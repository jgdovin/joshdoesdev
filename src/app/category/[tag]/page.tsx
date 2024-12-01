import { getAllPublishedPosts } from "@/lib/posts";
import PostList from "@/components/post-list";
import Categories from "@/components/custom/Categories";
import AboutMe from "@/components/custom/AboutMe";
import { capitalizeFirstLetter } from "@/lib/utils";

type Params = {
  params: {
    tag: string;
  };
};

export default function Home({ params }: Params) {
  const posts = getAllPublishedPosts(params.tag);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="space-y-8 md:col-span-2">
        <h1 className="mb-8 text-4xl font-bold">
          {capitalizeFirstLetter(params.tag)} Category Posts
        </h1>
        <PostList posts={posts} />
      </div>
      <div className="space-y-8">
        <Categories posts={posts} />
        <AboutMe />
      </div>
    </div>
  );
}
