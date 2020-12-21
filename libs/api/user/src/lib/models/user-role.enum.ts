import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});
