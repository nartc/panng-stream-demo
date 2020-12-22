import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostDetailStore } from '@panng-stream-demo/post/data-access';

@Component({
  selector: 'demo-post-detail',
  templateUrl: './post-detail.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PostDetailStore],
})
export class PostDetailComponent {
  readonly vm$ = this.postDetailStore.vm$;

  constructor(private readonly postDetailStore: PostDetailStore) {}

  onSubmitComment(commentText: string): void {
    this.postDetailStore.postCommentEffect(commentText);
  }

  onLikeClick(): void {
    this.postDetailStore.toggleLikeEffect();
  }
}
