import { Module } from '@nestjs/common';
import { ApiDataAccessModule } from '@panng-stream-api/data-access';
import { ApiCommentResolver } from './api-comment.resolver';
import { ApiCommentService } from './api-comment.service';

@Module({
  imports: [ApiDataAccessModule],
  providers: [ApiCommentService, ApiCommentResolver],
})
export class ApiCommentModule {}
