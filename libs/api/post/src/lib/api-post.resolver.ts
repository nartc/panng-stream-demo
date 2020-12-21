import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '@panng-stream-api/common';
import { ApiPostService } from './api-post.service';
import { CreatePostInput } from './dtos/create-post-input.dto';
import { PostLike } from './models/post-like.model';
import { Post } from './models/post.model';

@Resolver()
export class ApiPostResolver {
  constructor(private readonly service: ApiPostService) {}

  @Query(() => [Post], { nullable: true })
  @UseGuards(GqlAuthGuard)
  posts() {
    return this.service.posts();
  }

  @Query(() => Post, { nullable: true })
  @UseGuards(GqlAuthGuard)
  post(@Args('id', ParseIntPipe) id: number) {
    return this.service.post(id);
  }

  @Mutation(() => Post, { nullable: true })
  @UseGuards(GqlAuthGuard)
  createPost(
    @Args('input') input: CreatePostInput,
    @CurrentUser('username') username: string
  ) {
    return this.service.createPost(username, input);
  }

  @Mutation(() => PostLike, { nullable: true })
  @UseGuards(GqlAuthGuard)
  like(
    @Args('id', ParseIntPipe) postId: number,
    @CurrentUser('id') userId: number
  ) {
    return this.service.like(userId, postId);
  }

  @Mutation(() => PostLike, { nullable: true })
  @UseGuards(GqlAuthGuard)
  unlike(
    @Args('id', ParseIntPipe) postId: number,
    @CurrentUser('id') userId: number
  ) {
    return this.service.unlike(userId, postId);
  }
}
