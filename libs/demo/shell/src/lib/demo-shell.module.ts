import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { demoShellRoutes } from './demo-shell.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(demoShellRoutes)],
  declarations: [AuthLayoutComponent],
  exports: [RouterModule],
})
export class DemoShellModule {}
