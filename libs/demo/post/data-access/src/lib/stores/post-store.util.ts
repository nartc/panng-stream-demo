import {
  LikePostMutation,
  Post,
  UnlikePostMutation,
} from '@panng-stream-demo/sdk';

export type RequiredPost = Required<Post> & { liked?: boolean };

export class PostStoreUtil {
  static postProcessToggleLike(
    data: UnlikePostMutation | LikePostMutation | undefined | null,
    post: RequiredPost
  ): RequiredPost {
    if (data) {
      const userId = (data as LikePostMutation).like
        ? (data as LikePostMutation).like?.user?.id
        : (data as UnlikePostMutation).unlike?.user?.id;
      const updatedLikedBy = post.liked
        ? post.likedBy?.filter((lb) => lb.user?.id !== userId)
        : [...(post.likedBy || []), { user: { id: userId } }];
      return {
        ...post,
        likedBy: updatedLikedBy,
        liked: !post.liked,
      } as RequiredPost;
    }
    return post;
  }
}
