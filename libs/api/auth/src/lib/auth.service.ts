import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { AuthConfig } from '@panng-stream-api/config';
import { InjectAuthConfig } from '@panng-stream-api/config';
import { ApiUserService, User } from '@panng-stream-api/user';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: ApiUserService,
    @InjectAuthConfig() private readonly authConfig: AuthConfig
  ) {}

  async createToken(user: User) {
    return await this.jwtService.signAsync({
      email: user.email,
      username: user.username,
      role: user.role,
    });
  }

  async validateUser({ username }: JwtPayload) {
    return this.userService.findByUsername(username);
  }
}
