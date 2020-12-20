import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturePostComponent } from './feature-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeaturePostComponent }]),
  ],
  declarations: [FeaturePostComponent],
})
export class DemoPostFeatureModule {}
