import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureAuthComponent } from './feature-auth.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeatureAuthComponent }]),
  ],
  declarations: [FeatureAuthComponent],
})
export class DemoFeatureAuthModule {}
