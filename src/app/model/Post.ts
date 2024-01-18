import { User } from "./User";

export interface PostImage {
  link: string,
  imageId: number,
  Post?: Post
}

export interface Post {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: PostImage[]
}