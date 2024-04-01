"use client";
import React from "react";
import PostPreview, { PostPreviewType } from "./post-preview";
import { Post } from "@/interfaces/post";

import markdownStyles from "./markdown-styles.module.css";

export type PostListType = {
  posts: Post[];
};

const PostList = ({ posts }: PostListType) => {
  return (
    <div
      className={`${markdownStyles["markdown"]} relative flex w-full flex-col gap-6`}
    >
      {posts?.map((post) => (
        <PostPreview
          key={post.title}
          title={post.title}
          date={post.date}
          description={post.excerpt}
          slug={post.slug}
        />
      ))}
    </div>
  );
};

export default PostList;
