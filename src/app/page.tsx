import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/post-list";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <PostList posts={posts} />
    </main>
  );
}
