import { Post } from "@/interfaces/post";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { capitalizeFirstLetter, rankAndOrderCategories } from "@/lib/utils";
import { getAllPublishedPosts } from "@/lib/posts";
const posts = getAllPublishedPosts();

export default async function Categories() {
  const categories = posts.flatMap((post) => post.tags.split(","));
  const rankedCategories = rankAndOrderCategories(categories, 5);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {rankedCategories.map((category) => {
            return (
              <li key={category}>
                <Link
                  href={`/category/${category}`}
                  className="text-purple-400 hover:underline"
                >
                  {capitalizeFirstLetter(category)}
                </Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
