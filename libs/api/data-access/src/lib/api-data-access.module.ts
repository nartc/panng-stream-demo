import { Module } from '@nestjs/common';
import { ApiDataAccessService } from './api-data-access.service';

@Module({
  controllers: [],
  providers: [ApiDataAccessService],
  exports: [ApiDataAccessService],
})
export class ApiDataAccessModule {}
