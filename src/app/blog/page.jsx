import { format, parseISO } from "date-fns";
import Link from "next/link";
import { getPosts } from "src/lib/posts";

export default async function BlogListPage() {
  const posts = await getPosts(); // returns an array of post objects

  return (
    <main className="flex flex-col items-center justify-around p-6 md:p-24 min-h-screen text-gray-300">
      <h1 className="text-4xl font-semibold text-gray-100 mb-6">
        The Articles Themselves
      </h1>
      <ul className="w-full max-w-2xl">
        {posts.map((post) => {
          return (
            <li
              key={post.slug}
              className="border-b border-gray-700 pb-4 mb-4 last:border-0"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl font-bold text-purple-300 group-hover:text-purple-400 transition-colors duration-200"
              >
                {post.title}
                <p className="mt-1 text-sm text-gray-400">
                  Published on{" "}
                  <time
                    dateTime={post.date}
                    className="mb-1 text-xs text-gray-600"
                  >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </time>
                </p>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                  Read More
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
