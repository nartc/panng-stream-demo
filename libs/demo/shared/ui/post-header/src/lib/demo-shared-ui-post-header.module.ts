import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostHeaderComponent } from './post-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostHeaderComponent],
  exports: [PostHeaderComponent],
})
export class DemoSharedUiPostHeaderModule {}
