import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaControlComponent } from './textarea-control.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TextareaControlComponent],
  exports: [TextareaControlComponent],
})
export class DemoSharedUiFormsTextareaControlModule {}
