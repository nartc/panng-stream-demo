import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoPostUiListItemModule } from '@panng-stream/demo/post/ui/list-item';
import { DemoSharedUiFormsTextareaControlModule } from '@panng-stream/demo/shared/ui/forms/textarea-control';
import { DemoSharedUiPostHeaderModule } from '@panng-stream/demo/shared/ui/post-header';
import { PostListComponent } from './post-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PostListComponent }]),
    DemoPostUiListItemModule,
    DemoSharedUiPostHeaderModule,
    DemoSharedUiFormsTextareaControlModule,
  ],
  declarations: [PostListComponent],
})
export class DemoPostFeaturesListModule {}
