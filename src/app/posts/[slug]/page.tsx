import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPublishedPosts, getPostBySlug } from "@/lib/posts";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
// import Alert from "@/app/_components/alert";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PostBody } from "@/components/post-body";
import Link from "next/link";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="mx-auto max-w-4xl">
      <article className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="p-8">
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          <div className="mb-6 flex flex-col text-gray-500 dark:text-gray-400">
            <div className="flex">
              <User size={18} className="mr-2" />
              <span className="mr-4">Josh Gdovin</span>
              <Calendar size={18} className="mr-2" />
              <span className="mr-4">{post.date}</span>
            </div>
            <div>
              {post.tags.split(",").map((tag) => (
                <Link key={tag} href={`/tag/${tag.trim()}`}>
                  <Badge key={tag} variant="secondary" className="mr-2">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <PostBody content={content} />
        </div>
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPublishedPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
