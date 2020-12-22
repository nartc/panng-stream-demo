import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { AuthStore } from '@panng-stream-demo/auth/data-access';
import { iif } from 'rxjs';
import { exhaustMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { PostService } from '../services';
import { PostStoreUtil, RequiredPost } from './post-store.util';

interface PostListState {
  loading: boolean;
  posts: RequiredPost[];
}

@Injectable()
export class PostListStore extends ComponentStore<PostListState> {
  readonly posts$ = this.select((s) => s.posts);
  readonly loading$ = this.select((s) => s.loading);

  readonly vm$ = this.select(this.posts$, this.loading$, (posts, loading) => ({
    posts,
    loading,
    isEmpty: !posts.length,
  }));

  constructor(
    private readonly postService: PostService,
    private readonly authStore: AuthStore,
    private readonly router: Router
  ) {
    super({ loading: false, posts: [] });
  }

  readonly getPostsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.authStore.user$),
      switchMap(([, user]) =>
        this.postService.posts().pipe(
          tapResponse(({ data }) => {
            if (data?.posts) {
              this.patchState({
                loading: false,
                posts: data.posts.map((post) => ({
                  ...post,
                  liked: post.likedBy?.some(
                    (liked) => liked.user?.id === user.id
                  ),
                })) as RequiredPost[],
              });
            }
          }, console.error)
        )
      )
    )
  );

  readonly toggleLikeEffect = this.effect<number>((id$) =>
    id$.pipe(
      withLatestFrom(this.posts$),
      exhaustMap(([id, posts]) => {
        const liked = posts.find((post) => post?.id === id)?.liked;
        return iif(
          () => !!liked,
          this.postService.unlike(id),
          this.postService.like(id)
        ).pipe(
          tapResponse(({ data }) => {
            this.patchState(({ posts }) => ({
              posts: posts.map((post) =>
                post.id === id
                  ? PostStoreUtil.postProcessToggleLike(data, post)
                  : post
              ) as RequiredPost[],
            }));
          }, console.error)
        );
      })
    )
  );

  readonly createPostEffect = this.effect<string>((newPost$) =>
    newPost$.pipe(
      exhaustMap((newPost) =>
        this.postService.createPost({ text: newPost }).pipe(
          tapResponse(({ data }) => {
            this.patchState((state) => ({
              posts: [
                { ...(data?.createPost || {}), liked: false },
                ...state.posts,
              ] as RequiredPost[],
            }));
          }, console.error)
        )
      )
    )
  );

  readonly goToDetailEffect = this.effect<number>((id$) =>
    id$.pipe(
      tap((id) => {
        this.router.navigate(['/post', id]);
      })
    )
  );
}
