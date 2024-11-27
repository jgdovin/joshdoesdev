import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/post-list";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="space-y-8 md:col-span-2">
        <h1 className="mb-8 text-4xl font-bold">Latest Posts</h1>
        <PostList posts={posts} />
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/cicd"
                  className="text-blue-600 hover:underline"
                >
                  CI/CD
                </Link>
              </li>
              <li>
                <Link
                  href="/category/containerization"
                  className="text-blue-600 hover:underline"
                >
                  Containerization
                </Link>
              </li>
              <li>
                <Link
                  href="/category/iac"
                  className="text-blue-600 hover:underline"
                >
                  Infrastructure as Code
                </Link>
              </li>
              <li>
                <Link
                  href="/category/monitoring"
                  className="text-blue-600 hover:underline"
                >
                  Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/category/security"
                  className="text-blue-600 hover:underline"
                >
                  Security
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <p>
              Hi, I'm Josh Gdovin—a seasoned DevOps professional with a passion
              for implementing best practices and enhancing the developer
              experience.
            </p>
            <p>
              With a background in cloud architecture and infrastructure
              automation, I strive to build scalable and efficient systems.
            </p>
            <p>
              Outside of work, I'm an avid hiker, snowboarder, and disc golf
              enthusiast. I also have a deep love for animals, especially
              ferrets and cats. Welcome to my blog, where I share insights on
              Technology, Devops, Engineering and more!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
