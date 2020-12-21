import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from '@panng-stream-api/comment';
import { User } from '@panng-stream-api/user';
import { PostLike } from './post-like.model';

@ObjectType()
export class Post {
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
  @Field(() => [Comment], { nullable: true })
  comments: Comment[];
  @Field(() => [PostLike], { nullable: true })
  likedBy: PostLike[];
}
