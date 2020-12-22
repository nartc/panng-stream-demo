import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostHeaderComponent } from './post-header.component';

@NgModule({
  declarations: [PostHeaderComponent],
  imports: [CommonModule],
  exports: [PostHeaderComponent],
})
export class PostHeaderModule {}
