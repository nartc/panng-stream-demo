import type {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStore } from '@panng-stream-demo/auth/data-access';
import type { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authStore: AuthStore) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authStore.token$.pipe(
      take(1),
      mergeMap((token) => {
        if (!token) return next.handle(request);

        const cloneReq = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`),
        });
        return next.handle(cloneReq);
      })
    );
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
