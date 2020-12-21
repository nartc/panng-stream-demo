import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from '@panng-stream-api/auth';
import type { AuthConfig } from '@panng-stream-api/config';
import { InjectAuthConfig } from '@panng-stream-api/config';
import { ApiUserService, User } from '@panng-stream-api/user';
import { compare, genSalt, hash } from 'bcrypt';
import { LoginDto, LoginResultDto, RegisterDto } from './dtos';

@Injectable()
export class ApiSecurityService {
  constructor(
    private readonly userService: ApiUserService,
    private readonly authService: AuthService,
    @InjectAuthConfig() private readonly authConfig: AuthConfig
  ) {}

  async register(registerDto: RegisterDto) {
    const hashPassword = await hash(
      registerDto.password,
      await genSalt(this.authConfig.salt)
    );
    return await this.userService.createUser({
      ...registerDto,
      password: hashPassword,
    });
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByUsername(loginDto.username);

    if (user == null) {
      throw new BadRequestException(loginDto.username, 'Wrong credentials');
    }

    const isMatched = await compare(loginDto.password, user.password);
    if (!isMatched) {
      throw new BadRequestException(loginDto.password, 'Wrong credentials');
    }

    const loginResult = new LoginResultDto();
    loginResult.token = await this.authService.createToken(user as User);
    loginResult.user = user as User;
    return loginResult;
  }
}
