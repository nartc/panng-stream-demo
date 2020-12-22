import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'demo-post-list-item',
  templateUrl: './post-list-item.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListItemComponent {
  @Input() text!: string;
  @Input() liked!: boolean;
  @Input() likedByCount!: number;
  @Input() commentsCount!: number;

  @Output() likeClick = new EventEmitter();
  @Output() commentClick = new EventEmitter();
}
