import React from "react";
import Link from "next/link";

export type ArticlePreviewType = {
  title: string;
  date: string;
  description: string;
};

const ArticlePreview = (articlePreview: ArticlePreviewType) => {
  const { title, date, description } = articlePreview;
  return (
    <article className="scale-100 hover:scale-105 transition-all">
      <Link href="/">
        <h2>{title}</h2>
        <p className="text-[13px]">{date}</p>
        <p className="mt-2">{description}</p>
      </Link>
    </article>
  );
};

export default ArticlePreview;
