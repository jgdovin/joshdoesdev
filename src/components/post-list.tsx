"use client";
import React from "react";
import PostPreview, { PostPreviewType } from "./post-preview";
import { Post } from "@/interfaces/post";

export type PostListType = {
  posts: Post[];
};

const PostList = ({ posts }: PostListType) => {
  return (
    <div className="relative flex flex-col gap-6 w-full">
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
