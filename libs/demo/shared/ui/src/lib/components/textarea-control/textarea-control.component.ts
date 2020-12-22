import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'demo-textarea-control',
  templateUrl: './textarea-control.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaControlComponent {
  @Input() placeholder = 'Say something...';
  @Output() submitClick = new EventEmitter<string>();

  control = new FormControl('');

  onSubmit(): void {
    if (!this.control.value) {
      return;
    }

    this.submitClick.emit(this.control.value);
    this.control.reset();
  }
}
