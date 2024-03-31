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
    <article className="scale-100 hover:scale-105 transition-all">
      <Link href={`/posts/${slug}`}>
        <h2 className="bg-gradient-to-r from-accent to-destructive dark:to-muted text-transparent bg-clip-text">
          {title}
        </h2>
        <p className="text-[13px]">{date}</p>
        <p className="mt-2">{description}</p>
      </Link>
    </article>
  );
};

export default PostPreview;
