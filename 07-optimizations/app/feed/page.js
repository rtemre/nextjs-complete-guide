import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// For Dynamic metadata Nextjs looks for generateMetadata() function.
// This generateMetadata(config) has parameters such as ({ params, searchParams })
export async function generateMetadata(config) {
  const post = await getPosts();
  const numberOfPosts = post.length;
  return {
    title: `Browse our ${numberOfPosts} posts`,
    description: "Browse our all posts.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
