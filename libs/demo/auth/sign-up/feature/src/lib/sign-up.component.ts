import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthStore } from '@panng-stream-demo/auth/data-access';

@Component({
  selector: 'demo-sign-up',
  template: `
    <p>sign-up works!</p>
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
export class SignUpComponent {
  form = this.fb.group({
    username: [],
    email: [],
    password: [],
    name: [],
    location: [],
    avatarUrl: [],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authStore: AuthStore
  ) {}

  onSubmit(): void {
    this.authStore.signUpEffect();
  }
}
