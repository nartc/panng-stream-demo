import { Injectable } from '@angular/core';
import type { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { Router } from '@angular/router';
import type { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthStore } from '../stores';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(
    private readonly authStore: AuthStore,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.isAuthenticated();
  }

  canActivateChild(): Observable<boolean> {
    return this.isAuthenticated();
  }

  canLoad(): Observable<boolean> {
    return this.isAuthenticated();
  }

  private isAuthenticated(): Observable<boolean> {
    return this.authStore.isAuth$.pipe(
      take(1),
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/sign-in']);
        }
      })
    );
  }
}
