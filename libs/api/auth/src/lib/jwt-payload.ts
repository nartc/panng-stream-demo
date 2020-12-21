import { UserRole } from '@panng-stream-api/user';

export interface JwtPayload {
  email: string;
  username: string;
  role: UserRole;
}
