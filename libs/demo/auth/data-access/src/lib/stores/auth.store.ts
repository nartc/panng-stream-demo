import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { LoginDto, RegisterDto, User } from '@panng-stream-demo/sdk';
import { exhaustMap, tap } from 'rxjs/operators';
import { AuthService } from '../services';

interface AuthState {
  token: string;
  user: User;
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
    super({ token: '', user: {} });
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
      this.setState({ token: '', user: {} });
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

  readonly signInEffect = this.effect<LoginDto>((loginDto$) =>
    loginDto$.pipe(
      exhaustMap((loginDto) =>
        this.authService.login(loginDto).pipe(
          tapResponse(({ data }) => {
            if (data?.login) {
              this.setState({
                token: data.login.token,
                user: data.login.user as User,
              });
              this.router.navigate(['/']);
            }
          }, console.error)
        )
      )
    )
  );
  readonly signUpEffect = this.effect<RegisterDto>((registerDto$) =>
    registerDto$.pipe(
      exhaustMap((registerDto) =>
        this.authService.register(registerDto).pipe(
          tapResponse(() => {
            this.router.navigate(['/sign-in']);
          }, console.error)
        )
      )
    )
  );
}
