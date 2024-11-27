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

export type PostPreviewType = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const PostPreview = (postPreview: PostPreviewType) => {
  const { title, date, description, slug } = postPreview;
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
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Badge variant="secondary">Devops</Badge>
          <span className="text-sm text-slate-400">{date}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostPreview;
