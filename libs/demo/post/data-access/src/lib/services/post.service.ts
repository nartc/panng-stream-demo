import { Injectable } from '@angular/core';
import { ApolloAngularSDK, CreatePostInput } from '@panng-stream-demo/sdk';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private readonly sdk: ApolloAngularSDK) {}

  posts() {
    return this.sdk.posts();
  }

  post(id: number) {
    return this.sdk.post({ id });
  }

  like(id: number) {
    return this.sdk.likePost({ id });
  }

  unlike(id: number) {
    return this.sdk.unlikePost({ id });
  }

  createPost(input: CreatePostInput) {
    return this.sdk.createPost({ input });
  }
}
