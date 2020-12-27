import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoAuthUiAuthWrapperModule } from '@panng-stream/demo/auth/ui/auth-wrapper';
import { DemoSharedUiDemoTemplateModule } from '@panng-stream/demo/shared/ui/demo-template';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SignInComponent }]),
    ReactiveFormsModule,
    DemoAuthUiAuthWrapperModule,
    DemoSharedUiDemoTemplateModule,
  ],
  declarations: [SignInComponent],
})
export class DemoAuthFeaturesSignInModule {}
