import { Module } from '@nestjs/common';
import { ApiAuthModule } from '@panng-stream-api/auth';
import { ApiUserModule } from '@panng-stream-api/user';
import { ApiSecurityResolver } from './api-security.resolver';
import { ApiSecurityService } from './api-security.service';

@Module({
  imports: [ApiUserModule, ApiAuthModule],
  providers: [ApiSecurityService, ApiSecurityResolver],
})
export class ApiSecurityModule {}
