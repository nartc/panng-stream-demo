import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostListItemComponent } from './post-list-item.component';

@NgModule({
  declarations: [PostListItemComponent],
  imports: [CommonModule],
  exports: [PostListItemComponent],
})
export class PostListItemModule {}
