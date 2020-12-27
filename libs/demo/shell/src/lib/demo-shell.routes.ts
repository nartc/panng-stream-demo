import { Routes } from '@angular/router';
import { AuthGuard } from '@panng-stream-demo/auth/util';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const demoShellRoutes: Routes = [
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
              import('@panng-stream/demo/post/features/list').then(
                (m) => m.DemoPostFeaturesListModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('@panng-stream/demo/post/features/details').then(
                (m) => m.DemoPostFeaturesDetailsModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    loadChildren: () =>
      import('@panng-stream/demo/auth/features/shell').then(
        (m) => m.DemoFeatureAuthModule
      ),
  },
];
