import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          { path: '', redirectTo: 'post', pathMatch: 'full' },
          {
            path: 'post',
            loadChildren: () =>
              import('@panng-stream/demo/feature-post').then(
                (m) => m.DemoFeaturePostModule
              ),
          },
        ],
      },
      {
        path: '',
        loadChildren: () =>
          import('@panng-stream/demo/feature-auth').then(
            (m) => m.DemoFeatureAuthModule
          ),
      },
    ]),
  ],
  declarations: [AuthLayoutComponent],
  exports: [RouterModule],
})
export class DemoShellModule {}
