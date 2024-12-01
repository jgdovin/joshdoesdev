import { getAllPublishedPosts } from "@/lib/posts";
import PostList from "@/components/post-list";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Categories from "@/components/custom/Categories";

export default function Home() {
  const posts = getAllPublishedPosts();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="space-y-8 md:col-span-2">
        <h1 className="mb-8 text-4xl font-bold">Latest Posts</h1>
        <PostList posts={posts} />
      </div>
      <div className="space-y-8">
        <Categories posts={posts} />
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <p>
              Hi, I&apos;m Josh Gdovin—a seasoned Web Application Engineer &
              DevOps professional with a passion for implementing best practices
              and enhancing the developer experience.
            </p>
            <p>
              With a background in cloud architecture and infrastructure
              automation, I strive to build scalable and efficient systems.
            </p>
            <p>
              Outside of work, I&apos;m an avid hiker, snowboarder, and disc
              golf enthusiast. I also have a deep love for animals, especially
              ferrets and cats. Welcome to my blog, where I share insights on
              Technology, Devops, Engineering and more!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
