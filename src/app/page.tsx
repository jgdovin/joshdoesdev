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
            <CardTitle>About DevOps Diaries</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Exploring the cutting-edge of modern engineering and DevOps
              practices. Join us on a journey through the latest tools,
              techniques, and best practices in the world of software
              development and operations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
