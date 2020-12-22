import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@panng-stream-demo/auth/util';
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
            canActivateChild: [AuthGuard],
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('@panng-stream-demo/post/post-list/feature').then(
                    (m) => m.DemoPostPostListFeatureModule
                  ),
              },
              {
                path: ':id',
                loadChildren: () =>
                  import('@panng-stream-demo/post/post-detail/feature').then(
                    (m) => m.DemoPostPostDetailFeatureModule
                  ),
              },
            ],
          },
        ],
      },
      {
        path: '',
        loadChildren: () =>
          import('@panng-stream-demo/auth/feature').then(
            (m) => m.DemoFeatureAuthModule
          ),
      },
    ]),
  ],
  declarations: [AuthLayoutComponent],
  exports: [RouterModule],
})
export class DemoShellModule {}
