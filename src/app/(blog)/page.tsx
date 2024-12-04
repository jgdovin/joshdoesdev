import { getAllPublishedPosts } from "@/lib/posts";
import PostList from "@/components/post-list";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Tags from "@/components/custom/Tags";
import AboutMe from "@/components/custom/AboutMe";

export default function Home() {
  const posts = getAllPublishedPosts();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="space-y-8 md:col-span-2">
        <h1 className="mb-8 text-4xl font-bold">Latest Posts</h1>
        <PostList posts={posts} />
      </div>
      <div className="space-y-8">
        <Tags />
        <AboutMe />
      </div>
    </div>
  );
}
