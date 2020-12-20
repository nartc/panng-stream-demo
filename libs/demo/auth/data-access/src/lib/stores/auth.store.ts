import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { of } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';
import { AuthService } from '../services';

interface AuthState {
  token: string;
  user: unknown;
}

@Injectable({ providedIn: 'root' })
export class AuthStore extends ComponentStore<AuthState> {
  readonly user$ = this.select((s) => s.user);
  readonly token$ = this.select((s) => s.token);

  readonly isAuth$ = this.select(this.token$, (token) => !!token);

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    super({ token: '', user: undefined });
    this.setInitialAuthState();
    this.localStorageEffect(this.select((s) => s));
  }

  private setInitialAuthState(): void {
    const token = localStorage.getItem('token') || '';
    if (token) {
      const userString = localStorage.getItem('user');
      this.setState((state) =>
        userString != null
          ? { token, user: JSON.parse(userString) }
          : { ...state, token }
      );
    } else {
      this.setState({ token: '', user: undefined });
    }
  }

  readonly localStorageEffect = this.effect<AuthState>((state$) =>
    state$.pipe(
      tap<AuthState>(({ token, user }) => {
        if (!token) {
          localStorage.clear();
        } else {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    )
  );

  readonly signInEffect = this.effect(($) =>
    $.pipe(
      exhaustMap(() => of('nice').pipe(tapResponse(console.log, console.error)))
    )
  );
  readonly signUpEffect = this.effect(($) => $.pipe());
}
