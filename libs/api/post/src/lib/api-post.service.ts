import { Injectable } from '@nestjs/common';
import { ApiDataAccessService } from '@panng-stream-api/data-access';
import { CreatePostInput } from './dtos/create-post-input.dto';

@Injectable()
export class ApiPostService {
  constructor(private readonly data: ApiDataAccessService) {}

  posts() {
    return this.data.post.findMany({
      include: {
        author: true,
        comments: { include: { author: true } },
        likedBy: { include: { user: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 25,
    });
  }

  post(id: number) {
    return this.data.post.findUnique({
      where: { id },
      include: {
        comments: { include: { author: true } },
        author: true,
        likedBy: { include: { user: true } },
      },
    });
  }

  createPost(username: string, input: CreatePostInput) {
    return this.data.post.create({
      data: { text: input.text, author: { connect: { username } } },
    });
  }

  like(userId: number, postId: number) {
    return this.data.postLike.create({
      data: {
        post: { connect: { id: postId } },
        user: { connect: { id: userId } },
      },
      include: { user: true },
    });
  }

  unlike(userId: number, postId: number) {
    return this.data.postLike.delete({
      where: { postId_userId: { postId, userId } },
      include: { user: true },
    });
  }
}
