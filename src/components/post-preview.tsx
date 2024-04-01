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
    <article className="markdown scale-100 transition-all hover:scale-105">
      <Link href={`/posts/${slug}`}>
        <h2 className="bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent dark:to-muted">
          {title}
        </h2>
        <p className="text-[13px]">{date}</p>
        <p className="mt-2">{description}</p>
      </Link>
    </article>
  );
};

export default PostPreview;
