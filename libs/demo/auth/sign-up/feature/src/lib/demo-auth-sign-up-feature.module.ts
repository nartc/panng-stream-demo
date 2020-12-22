import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthWrapperModule } from '@panng-stream-demo/auth/ui';
import { DemoTemplateModule } from '@panng-stream-demo/shared/ui';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SignUpComponent }]),
    AuthWrapperModule,
    DemoTemplateModule,
  ],
  declarations: [SignUpComponent],
})
export class DemoAuthSignUpFeatureModule {}
