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
          <Badge className="mb-4">Devops</Badge>
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          <div className="mb-6 flex items-center text-gray-500 dark:text-gray-400">
            <User size={18} className="mr-2" />
            <span className="mr-4">Josh Gdovin</span>
            <Calendar size={18} className="mr-2" />
            <span className="mr-4">{post.date}</span>
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
