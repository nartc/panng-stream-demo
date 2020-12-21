import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '@panng-stream-api/common';
import { ApiCommentService } from './api-comment.service';
import { CreateCommentDto } from './dtos';
import { Comment } from './models';

@Resolver()
export class ApiCommentResolver {
  constructor(private readonly service: ApiCommentService) {}

  @Mutation(() => Comment, { nullable: true })
  @UseGuards(GqlAuthGuard)
  create(
    @Args('input') dto: CreateCommentDto,
    @CurrentUser('id') userId: number
  ) {
    return this.service.createComment(userId, dto);
  }
}
