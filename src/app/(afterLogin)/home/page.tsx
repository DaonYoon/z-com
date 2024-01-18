import style from "@/app/(afterLogin)/home/home.module.css";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";
import Post from "../_component/Post";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostRecommends from "./_component/PostRecommends";
import { getPostRecommend } from "./_lib/getPostRecommends";
import TabDecider from "./_component/TabDecider";

export default async function Home() {
  const queryCleint = new QueryClient();
  await queryCleint.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
  });

  const dehydratedState = dehydrate(queryCleint);

  queryCleint.getQueryData(["posts", "recommends"]);

  return (
    <TabProvider>
      <main className={style.main}>
        <HydrationBoundary state={dehydratedState}>
          <Tab />
          <PostForm />
          <TabDecider />
        </HydrationBoundary>
      </main>
    </TabProvider>
  );
}
