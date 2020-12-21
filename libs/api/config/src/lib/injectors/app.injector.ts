import { Inject } from '@nestjs/common';
import { appConfiguration } from '../configurations';

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
