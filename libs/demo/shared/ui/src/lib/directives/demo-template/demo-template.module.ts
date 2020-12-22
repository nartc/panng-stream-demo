import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoTemplateDirective } from './demo-template.directive';

@NgModule({
  declarations: [DemoTemplateDirective],
  imports: [CommonModule],
  exports: [DemoTemplateDirective],
})
export class DemoTemplateModule {}
