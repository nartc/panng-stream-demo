import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApiAuthModule } from '@panng-stream-api/auth';
import { ApiCommentModule } from '@panng-stream-api/comment';
import { ApiConfigModule } from '@panng-stream-api/config';
import { ApiPostModule } from '@panng-stream-api/post';
import { ApiSecurityModule } from '@panng-stream-api/security';
import { ApiUserModule } from '@panng-stream-api/user';

import { AppController } from './app.controller';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.graphql',
    }),
    ApiConfigModule,
    ApiAuthModule,
    ApiPostModule,
    ApiUserModule,
    ApiSecurityModule,
    ApiCommentModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
