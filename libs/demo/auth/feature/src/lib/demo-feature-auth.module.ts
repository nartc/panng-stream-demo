import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'sign-in',
        loadChildren: () =>
          import('@panng-stream-demo/auth/sign-in/feature').then(
            (m) => m.DemoAuthSignInFeatureModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('@panng-stream-demo/auth/sign-up/feature').then(
            (m) => m.DemoAuthSignUpFeatureModule
          ),
      },
    ]),
  ],
})
export class DemoFeatureAuthModule {}
