import { Module } from '@nestjs/common';
import { ApiDataAccessModule } from '@panng-stream-api/data-access';
import { ApiPostResolver } from './api-post.resolver';
import { ApiPostService } from './api-post.service';

@Module({
  imports: [ApiDataAccessModule],
  providers: [ApiPostService, ApiPostResolver],
  exports: [ApiPostService],
})
export class ApiPostModule {}
