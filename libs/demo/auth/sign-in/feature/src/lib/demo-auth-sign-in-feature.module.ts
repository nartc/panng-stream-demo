import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthWrapperModule } from '@panng-stream-demo/auth/ui';
import { DemoTemplateModule } from '@panng-stream-demo/shared/ui';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SignInComponent }]),
    ReactiveFormsModule,
    AuthWrapperModule,
    DemoTemplateModule,
  ],
  declarations: [SignInComponent],
})
export class DemoAuthSignInFeatureModule {}
