import React from "react";
import { ibmPlexBold } from "@/lib/fonts";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import { capitalizeFirstLetter } from "@/lib/utils";

const PostPreview = ({ post }: { post: Post }) => {
  const { title, date, excerpt, slug, tags } = post;
  const mainTag = capitalizeFirstLetter(tags.split(",")[0]);
  return (
    <Link href={`/posts/${slug}`}>
      <Card
        key={slug}
        className="transition-shadow hover:cursor-pointer hover:shadow-lg"
      >
        <CardHeader>
          <CardTitle className={`${ibmPlexBold.className} text-purple-400`}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Badge variant="secondary">{mainTag}</Badge>
          <span className="text-sm text-slate-400">{date}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostPreview;
