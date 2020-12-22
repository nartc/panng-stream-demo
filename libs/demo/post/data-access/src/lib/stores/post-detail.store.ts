import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { AuthStore } from '@panng-stream-demo/auth/data-access';
import { iif } from 'rxjs';
import {
  exhaustMap,
  filter,
  map,
  pluck,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { CommentService, PostService } from '../services';
import { PostStoreUtil, RequiredPost } from './post-store.util';

interface PostDetailState {
  loading: boolean;
  post?: RequiredPost;
}

@Injectable()
export class PostDetailStore extends ComponentStore<PostDetailState> {
  readonly loading$ = this.select((s) => s.loading);
  readonly post$ = this.select((s) => s.post);

  readonly vm$ = this.select(
    this.loading$,
    this.post$.pipe(filter((post) => !!post)),
    (loading, post) => ({
      post,
      loading,
    })
  );

  constructor(
    private readonly authStore: AuthStore,
    private readonly postService: PostService,
    private readonly commentService: CommentService,
    readonly route: ActivatedRoute
  ) {
    super({ loading: false });
    this.getPostEffect(route.params.pipe(pluck('id'), map(Number)));
  }

  readonly getPostEffect = this.effect<number>((id$) =>
    id$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.authStore.user$),
      switchMap(([id, user]) =>
        this.postService.post(id).pipe(
          tapResponse(({ data: { post } }) => {
            this.setState({
              loading: false,
              post: {
                ...post,
                liked: post?.likedBy?.some((lb) => lb.user?.id === user.id),
              } as RequiredPost,
            });
          }, console.error)
        )
      )
    )
  );

  readonly postCommentEffect = this.effect<string>((commentText$) =>
    commentText$.pipe(
      withLatestFrom(this.post$),
      exhaustMap(([commentText, post]) =>
        this.commentService
          .createComment({
            text: commentText,
            postId: post?.id as number,
          })
          .pipe(
            tapResponse(({ data }) => {
              if (data?.create) {
                this.patchState((state) => ({
                  post: {
                    ...state.post,
                    comments: [data?.create, ...(state.post?.comments || [])],
                  } as RequiredPost,
                }));
              }
            }, console.error)
          )
      )
    )
  );

  readonly toggleLikeEffect = this.effect(($) =>
    $.pipe(
      withLatestFrom(this.post$),
      exhaustMap(([, post]) =>
        iif(
          () => !!post?.liked,
          this.postService.unlike(post?.id as number),
          this.postService.like(post?.id as number)
        ).pipe(
          tapResponse(({ data }) => {
            this.patchState({
              post: PostStoreUtil.postProcessToggleLike(
                data,
                post as RequiredPost
              ),
            });
          }, console.error)
        )
      )
    )
  );
}
