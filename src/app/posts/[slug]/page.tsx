import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
// import Alert from "@/app/_components/alert";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import Button from "@/components/ui/Button";
import { Separator } from "@/components/ui/separator";
import markdownStyles from "@/components/markdown-styles.module.css";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="mx-auto max-w-4xl">
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
          <div className="prose dark:prose-invert max-w-none">
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </article>

      <section className="mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
        <p className="mb-4">
          Subscribe to our newsletter for the latest DevOps insights and best
          practices.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow rounded-l-lg p-2 text-gray-900"
          />
          <Button className="rounded-l-none">Subscribe</Button>
        </div>
      </section>
    </div>
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
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
