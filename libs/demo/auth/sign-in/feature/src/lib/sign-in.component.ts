import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthStore } from '@panng-stream-demo/auth/data-access';

@Component({
  selector: 'demo-sign-in',
  template: `
    <h1>Sign In</h1>
    <button (click)="onSubmit()">Submit</button>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  form = this.fb.group({
    username: [],
    password: [],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authStore: AuthStore
  ) {}

  onSubmit() {
    this.authStore.signInEffect();
  }
}
