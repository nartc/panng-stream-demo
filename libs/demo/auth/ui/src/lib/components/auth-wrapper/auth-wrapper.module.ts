import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthWrapperComponent } from './auth-wrapper.component';

@NgModule({
  declarations: [AuthWrapperComponent],
  imports: [CommonModule],
  exports: [AuthWrapperComponent],
})
export class AuthWrapperModule {}
