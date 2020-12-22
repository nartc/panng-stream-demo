import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostListItemModule } from '@panng-stream-demo/post/post-list/ui';
import {
  PostHeaderModule,
  TextareaControlModule,
} from '@panng-stream-demo/shared/ui';
import { PostListComponent } from './post-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PostListComponent }]),
    TextareaControlModule,
    PostHeaderModule,
    PostListItemModule,
  ],
  declarations: [PostListComponent],
})
export class DemoPostPostListFeatureModule {}
