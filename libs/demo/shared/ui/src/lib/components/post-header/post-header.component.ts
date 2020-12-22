import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'demo-post-header',
  templateUrl: './post-header.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostHeaderComponent {
  @Input() avatarUrl!: string;
  @Input() username!: string;
  @Input() name!: string;
  @Input() updatedAt!: Date;
}
