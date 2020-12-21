import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@panng-stream-api/user';

@ObjectType()
export class LoginResultDto {
  @Field()
  token: string;
  @Field(() => User, { nullable: true })
  user: User;
}
