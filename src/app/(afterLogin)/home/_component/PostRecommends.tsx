"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommend } from "../_lib/getPostRecommends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/app/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
    staleTime: 60 * 1000,// fresh -> stale time
    gcTime: 60 * 5 * 1000 //가비지 컬렉션 타임 5분뒤에 메모리에서 정리 ( 캐시가 날라가기떄문에 새로 불러와짐 ) 반드시 statleTime보다 길어야함
  });
  return data?.map((post) => <Post key={post.postId} post={post}></Post>);
}
