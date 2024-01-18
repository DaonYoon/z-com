"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "../../_component/Post";
import { Post as IPost } from "@/app/model/Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,// fresh -> stale time
    gcTime: 60 * 5 * 1000 //가비지 컬렉션 타임 5분뒤에 메모리에서 정리 ( 캐시가 날라가기떄문에 새로 불러와짐 ) 반드시 statleTime보다 길어야함
  });
  return data?.map((post) => <Post key={post.postId} post={post}></Post>);
}
