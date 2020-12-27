import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostListStore } from '@panng-stream-demo/post/data-access';

@Component({
  selector: 'demo-post-list',
  templateUrl: './post-list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PostListStore],
})
export class PostListComponent implements OnInit {
  readonly vm$ = this.postListStore.vm$;

  constructor(private readonly postListStore: PostListStore) {}

  ngOnInit(): void {
    this.postListStore.getPostsEffect();
  }

  onSubmit(text: string): void {
    this.postListStore.createPostEffect(text);
  }

  onLikeClick(id: number): void {
    this.postListStore.toggleLikeEffect(id);
  }

  onCommentClick(id: number): void {
    this.postListStore.goToDetailEffect(id);
  }
}
