import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoPostUiListItemModule } from '@panng-stream/demo/post/ui/list-item';
import { DemoSharedUiFormsTextareaControlModule } from '@panng-stream/demo/shared/ui/forms/textarea-control';
import { DemoSharedUiPostHeaderModule } from '@panng-stream/demo/shared/ui/post-header';
import { PostDetailComponent } from './post-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PostDetailComponent }]),
    DemoPostUiListItemModule,
    DemoSharedUiPostHeaderModule,
    DemoSharedUiFormsTextareaControlModule,
  ],
  declarations: [PostDetailComponent],
})
export class DemoPostFeaturesDetailsModule {}
