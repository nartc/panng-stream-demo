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
          import('@panng-stream/demo/auth/features/sign-in').then(
            (m) => m.DemoAuthFeaturesSignInModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('@panng-stream/demo/auth/features/sign-up').then(
            (m) => m.DemoAuthFeaturesSignUpModule
          ),
      },
    ]),
  ],
})
export class DemoFeatureAuthModule {}
