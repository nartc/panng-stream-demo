import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@panng-stream-api/user';

@ObjectType()
export class PostLike {
  @Field({ nullable: true })
  createdAt: Date;
  @Field({ nullable: true })
  updatedAt: Date;
  @Field(() => User, { nullable: true })
  user: User;
}
