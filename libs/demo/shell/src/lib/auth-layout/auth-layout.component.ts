import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthStore } from '@panng-stream-demo/auth/data-access';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'demo-auth-layout',
  templateUrl: './auth-layout.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  readonly user$ = this.authStore.user$.pipe(
    filter((user) => !!Object.keys(user).length)
  );

  constructor(private readonly authStore: AuthStore) {}

  onUserClick(): void {
    this.authStore.signOutEffect();
  }
}
