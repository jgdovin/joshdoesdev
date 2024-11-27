"use client";
import React from "react";
import PostPreview from "./post-preview";
import { Post } from "@/interfaces/post";

export type PostListType = {
  posts: Post[];
};

const PostList = ({ posts }: PostListType) => {
  return (
    <div className={` relative flex w-full flex-col gap-6`}>
      {posts?.map((post) => <PostPreview key={post.slug} post={post} />)}
    </div>
  );
};

export default PostList;
