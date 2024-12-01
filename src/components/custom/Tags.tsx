import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { capitalizeFirstLetter, rankAndOrderTags } from "@/lib/utils";
import { getAllPublishedPosts } from "@/lib/posts";
const posts = getAllPublishedPosts();

export default async function Tags() {
  const tags = posts.flatMap((post) => post.tags.split(","));
  const rankedTags = rankAndOrderTags(tags, 5);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {rankedTags.map((tag) => {
            return (
              <li key={tag}>
                <Link
                  href={`/tag/${tag}`}
                  className="text-purple-400 hover:underline"
                >
                  {capitalizeFirstLetter(tag)}
                </Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
