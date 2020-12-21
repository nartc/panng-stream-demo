import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfiguration, authConfiguration } from './configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [appConfiguration, authConfiguration],
    }),
  ],
})
export class ApiConfigModule {}
