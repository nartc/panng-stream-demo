import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoAuthUiAuthWrapperModule } from '@panng-stream/demo/auth/ui/auth-wrapper';
import { DemoSharedUiDemoTemplateModule } from '@panng-stream/demo/shared/ui/demo-template';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SignUpComponent }]),
    DemoAuthUiAuthWrapperModule,
    DemoSharedUiDemoTemplateModule,
  ],
  declarations: [SignUpComponent],
})
export class DemoAuthFeaturesSignUpModule {}
