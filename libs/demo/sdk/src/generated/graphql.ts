import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import * as ApolloCore from '@apollo/client/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};



export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
};


export enum UserRole {
  Admin = 'Admin',
  User = 'User'
}

export type Comment = {
  __typename?: 'Comment';
  id?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
};

export type PostLike = {
  __typename?: 'PostLike';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  comments?: Maybe<Array<Comment>>;
  likedBy?: Maybe<Array<PostLike>>;
};

export type LoginResultDto = {
  __typename?: 'LoginResultDto';
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<Post>>;
  post?: Maybe<Post>;
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  like?: Maybe<PostLike>;
  unlike?: Maybe<PostLike>;
  register?: Maybe<User>;
  login?: Maybe<LoginResultDto>;
};


export type MutationCreateArgs = {
  input: CreateCommentDto;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationLikeArgs = {
  id: Scalars['Float'];
};


export type MutationUnlikeArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  input: RegisterDto;
};


export type MutationLoginArgs = {
  input: LoginDto;
};

export type CreateCommentDto = {
  postId: Scalars['Float'];
  text: Scalars['String'];
};

export type CreatePostInput = {
  text: Scalars['String'];
};

export type RegisterDto = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
};

export type LoginDto = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentDto;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { create?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'text'>
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'text'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'name' | 'avatarUrl'>
    )>, comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'text' | 'id'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email' | 'username' | 'name' | 'avatarUrl'>
      )> }
    )>>, likedBy?: Maybe<Array<(
      { __typename?: 'PostLike' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    )>> }
  )>> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'text'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'name' | 'avatarUrl'>
    )>, comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'text' | 'id'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email' | 'username' | 'name' | 'avatarUrl'>
      )> }
    )>>, likedBy?: Maybe<Array<(
      { __typename?: 'PostLike' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    )>> }
  )> }
);

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  )> }
);

export type LikePostMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type LikePostMutation = (
  { __typename?: 'Mutation' }
  & { like?: Maybe<(
    { __typename?: 'PostLike' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  )> }
);

export type UnlikePostMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UnlikePostMutation = (
  { __typename?: 'Mutation' }
  & { unlike?: Maybe<(
    { __typename?: 'PostLike' }
    & Pick<PostLike, 'createdAt' | 'updatedAt'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  input: RegisterDto;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )> }
);

export type LoginMutationVariables = Exact<{
  input: LoginDto;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginResultDto' }
    & Pick<LoginResultDto, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email' | 'name'>
    )> }
  )> }
);

export const CreateCommentDocument = gql`
    mutation CreateComment($input: CreateCommentDto!) {
  create(input: $input) {
    id
    text
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCommentGQL extends Apollo.Mutation<CreateCommentMutation, CreateCommentMutationVariables> {
    document = CreateCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    text
    author {
      id
      email
      username
      name
      avatarUrl
    }
    comments {
      text
      id
      author {
        id
        email
        username
        name
        avatarUrl
      }
    }
    likedBy {
      user {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostsGQL extends Apollo.Query<PostsQuery, PostsQueryVariables> {
    document = PostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostDocument = gql`
    query Post($id: Float!) {
  post(id: $id) {
    id
    text
    author {
      id
      email
      username
      name
      avatarUrl
    }
    comments {
      text
      id
      author {
        id
        email
        username
        name
        avatarUrl
      }
    }
    likedBy {
      user {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostGQL extends Apollo.Query<PostQuery, PostQueryVariables> {
    document = PostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostGQL extends Apollo.Mutation<CreatePostMutation, CreatePostMutationVariables> {
    document = CreatePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikePostDocument = gql`
    mutation LikePost($id: Float!) {
  like(id: $id) {
    user {
      id
      username
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LikePostGQL extends Apollo.Mutation<LikePostMutation, LikePostMutationVariables> {
    document = LikePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UnlikePostDocument = gql`
    mutation UnlikePost($id: Float!) {
  unlike(id: $id) {
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnlikePostGQL extends Apollo.Mutation<UnlikePostMutation, UnlikePostMutationVariables> {
    document = UnlikePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation Register($input: RegisterDto!) {
  register(input: $input) {
    id
    name
    username
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($input: LoginDto!) {
  login(input: $input) {
    token
    user {
      id
      username
      email
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  interface WatchQueryOptionsAlone<V>
    extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}
    
  interface QueryOptionsAlone<V>
    extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}
    
  interface MutationOptionsAlone<T, V>
    extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}
    
  interface SubscriptionOptionsAlone<V>
    extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

  @Injectable({ providedIn: 'root' })
  export class ApolloAngularSDK {
    constructor(
      private createCommentGql: CreateCommentGQL,
      private postsGql: PostsGQL,
      private postGql: PostGQL,
      private createPostGql: CreatePostGQL,
      private likePostGql: LikePostGQL,
      private unlikePostGql: UnlikePostGQL,
      private registerGql: RegisterGQL,
      private loginGql: LoginGQL
    ) {}
      
    createComment(variables: CreateCommentMutationVariables, options?: MutationOptionsAlone<CreateCommentMutation, CreateCommentMutationVariables>) {
      return this.createCommentGql.mutate(variables, options)
    }
    
    posts(variables?: PostsQueryVariables, options?: QueryOptionsAlone<PostsQueryVariables>) {
      return this.postsGql.fetch(variables, options)
    }
    
    postsWatch(variables?: PostsQueryVariables, options?: WatchQueryOptionsAlone<PostsQueryVariables>) {
      return this.postsGql.watch(variables, options)
    }
    
    post(variables: PostQueryVariables, options?: QueryOptionsAlone<PostQueryVariables>) {
      return this.postGql.fetch(variables, options)
    }
    
    postWatch(variables: PostQueryVariables, options?: WatchQueryOptionsAlone<PostQueryVariables>) {
      return this.postGql.watch(variables, options)
    }
    
    createPost(variables: CreatePostMutationVariables, options?: MutationOptionsAlone<CreatePostMutation, CreatePostMutationVariables>) {
      return this.createPostGql.mutate(variables, options)
    }
    
    likePost(variables: LikePostMutationVariables, options?: MutationOptionsAlone<LikePostMutation, LikePostMutationVariables>) {
      return this.likePostGql.mutate(variables, options)
    }
    
    unlikePost(variables: UnlikePostMutationVariables, options?: MutationOptionsAlone<UnlikePostMutation, UnlikePostMutationVariables>) {
      return this.unlikePostGql.mutate(variables, options)
    }
    
    register(variables: RegisterMutationVariables, options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>) {
      return this.registerGql.mutate(variables, options)
    }
    
    login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
      return this.loginGql.mutate(variables, options)
    }
  }