import { Field, InputType } from '@nestjs/graphql';
import { LoginDto } from './login.dto';

@InputType()
export class RegisterDto extends LoginDto {
  @Field()
  email: string;
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  avatarUrl?: string;
  @Field({ nullable: true })
  bio?: string;
  @Field({ nullable: true })
  location?: string;
}
