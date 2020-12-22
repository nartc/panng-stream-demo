import { Injectable } from '@angular/core';
import {
  ApolloAngularSDK,
  LoginDto,
  RegisterDto,
} from '@panng-stream-demo/sdk';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly sdk: ApolloAngularSDK) {}

  login(loginDto: LoginDto) {
    return this.sdk.login({ input: loginDto });
  }

  register(registerDto: RegisterDto) {
    return this.sdk.register({ input: registerDto });
  }
}
