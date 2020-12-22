import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaControlComponent } from './textarea-control.component';

@NgModule({
  declarations: [TextareaControlComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextareaControlComponent],
})
export class TextareaControlModule {}
