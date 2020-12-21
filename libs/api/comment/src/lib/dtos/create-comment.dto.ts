import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCommentDto {
  @Field()
  postId: number;
  @Field()
  text: string;
}
