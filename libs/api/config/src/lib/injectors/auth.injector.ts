import { Inject } from '@nestjs/common';
import { authConfiguration } from '../configurations';

export const InjectAuthConfig = () => Inject(authConfiguration.KEY);
