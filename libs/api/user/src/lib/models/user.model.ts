import { Field, ObjectType } from '@nestjs/graphql';
import { UserRole } from './user-role.enum';

@ObjectType()
export class User {
  @Field({ nullable: true })
  id: number;
  @Field({ nullable: true })
  createdAt: Date;
  @Field({ nullable: true })
  updatedAt: Date;
  @Field({ nullable: true })
  username: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  name: string | null;
  @Field({ nullable: true })
  location: string | null;
  @Field({ nullable: true })
  bio: string | null;
  @Field({ nullable: true })
  avatarUrl: string | null;
  @Field(() => UserRole, { nullable: true })
  role: UserRole;
}
