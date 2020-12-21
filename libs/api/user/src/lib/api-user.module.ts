import { Module } from '@nestjs/common';
import { ApiDataAccessModule } from '@panng-stream-api/data-access';
import { ApiUserService } from './api-user.service';

@Module({
  imports: [ApiDataAccessModule],
  providers: [ApiUserService],
  exports: [ApiUserService],
})
export class ApiUserModule {}
