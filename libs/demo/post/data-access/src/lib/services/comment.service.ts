import { Injectable } from '@angular/core';
import { ApolloAngularSDK, CreateCommentDto } from '@panng-stream-demo/sdk';

@Injectable({ providedIn: 'root' })
export class CommentService {
  constructor(private readonly sdk: ApolloAngularSDK) {}

  createComment(input: CreateCommentDto) {
    return this.sdk.createComment({ input });
  }
}
