import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '@panng-stream-api/comment';
import { ApiDataAccessService } from '@panng-stream-api/data-access';

@Injectable()
export class ApiCommentService {
  constructor(private readonly data: ApiDataAccessService) {}

  createComment(userId: number, dto: CreateCommentDto) {
    return this.data.comment.create({
      data: {
        author: { connect: { id: userId } },
        post: { connect: { id: dto.postId } },
        text: dto.text,
      },
    });
  }
}
