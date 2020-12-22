import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthStore } from '@panng-stream-demo/auth/data-access';

@Component({
  selector: 'demo-sign-in',
  templateUrl: './sign-in.component.html',
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

  onSubmit(): void {
    this.authStore.signInEffect(this.form.value);
  }
}
