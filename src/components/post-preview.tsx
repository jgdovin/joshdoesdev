import React from "react";
import Link from "next/link";

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
      <Link href={`/posts/${slug}`}>
        <h2 className="bg-gradient-to-r from-accent to-destructive bg-clip-text text-lg text-transparent dark:to-muted md:text-2xl lg:text-3xl">
          {title}
        </h2>
        <span className="mt-[-10px] pl-2 text-xs text-gray-300">{date}</span>
        <p className="mt-2 text-xs md:text-base">{description}</p>
      </Link>
    </article>
  );
};

export default PostPreview;
