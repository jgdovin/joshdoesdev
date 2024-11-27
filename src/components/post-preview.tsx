import React from "react";
import Link from "next/link";
import { oswaldBold, raleway } from "@/lib/fonts";

export type PostPreviewType = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const PostPreview = (postPreview: PostPreviewType) => {
  const { title, date, description, slug } = postPreview;
  return (
    <article className="scale-100 transition-all hover:scale-105">
      <Link href={`/posts/${slug}`} className="flex flex-col gap-5">
        <h2
          className={`bg-gradient-to-r from-accent to-destructive bg-clip-text text-lg text-transparent dark:to-muted md:text-2xl lg:text-3xl ${oswaldBold.className} p-1`}
        >
          {title}
        </h2>
        <span className="mt-[-10px] pl-2 text-xs text-gray-400">{date}</span>
        <p className={`mt-2 pl-10 text-sm ${raleway.className} text-gray-500`}>
          {description}
        </p>
        <p className="self-center">Read More...</p>
      </Link>
    </article>
  );
};

export default PostPreview;
