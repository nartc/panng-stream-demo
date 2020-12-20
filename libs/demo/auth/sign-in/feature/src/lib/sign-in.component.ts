import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthStore } from '@panng-stream-demo/auth/data-access';

@Component({
  selector: 'demo-sign-in',
  template: `
    <h1>Sign In</h1>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <section class="flex">
        <input
          class="p-2 border border-gray-600 rounded"
          type="email"
          formControlName="email"
          placeholder="email"
        />
        <input
          class="p-2 border border-gray-600 rounded ml-2"
          type="password"
          formControlName="password"
          placeholder="password"
        />
      </section>
      <section class="mt-2">
        <button
          class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white"
          (click)="onSubmit()"
        >
          Submit
        </button>
        <a
          class="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-white ml-2"
          routerLink="/sign-up"
        >
          Sign up here
        </a>
      </section>
    </form>
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
    email: [],
    password: [],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authStore: AuthStore
  ) {}

  onSubmit(): void {
    this.authStore.signInEffect();
  }
}
