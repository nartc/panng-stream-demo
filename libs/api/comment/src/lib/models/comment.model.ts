import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@panng-stream-api/user';

@ObjectType()
export class Comment {
  @Field({ nullable: true })
  id: number;
  @Field({ nullable: true })
  createdAt: Date;
  @Field({ nullable: true })
  updatedAt: Date;
  @Field({ nullable: true })
  text: string;
  @Field(() => User, { nullable: true })
  author: User;
}
