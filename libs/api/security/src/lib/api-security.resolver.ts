import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@panng-stream-api/user';
import { LoginDto, LoginResultDto, RegisterDto } from './dtos';
import { ApiSecurityService } from './api-security.service';

@Resolver()
export class ApiSecurityResolver {
  constructor(private readonly securityService: ApiSecurityService) {}

  @Mutation(() => User, { nullable: true })
  register(@Args('input') registerDto: RegisterDto) {
    return this.securityService.register(registerDto);
  }

  @Mutation(() => LoginResultDto, { nullable: true })
  login(@Args('input') loginDto: LoginDto) {
    return this.securityService.login(loginDto);
  }
}
