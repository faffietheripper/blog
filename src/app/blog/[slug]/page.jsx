import { getPostBySlug, getPosts } from "src/lib/posts";
import { notFound } from "next/navigation";

// this builds all the params for ALL blogs posts when the wesbite is deployed
export function generateStaticParams() {
  const posts = getPosts();

  // generateStaticParams expects you to output an array of objects, containing the [slug]
  return posts.map((post) => {
    slug: post.slug;
  });
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex  flex-col items-center justify-around p-24">
      <div
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className="prose dark:prose-invert"
      ></div>
    </main>
  );
}
