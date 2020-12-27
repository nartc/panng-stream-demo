import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoTemplateDirective } from './demo-template.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoTemplateDirective],
  exports: [DemoTemplateDirective],
})
export class DemoSharedUiDemoTemplateModule {}
