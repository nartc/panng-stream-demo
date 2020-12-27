import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthWrapperComponent } from './auth-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthWrapperComponent],
  exports: [AuthWrapperComponent],
})
export class DemoAuthUiAuthWrapperModule {}
