export default function Home() {
  return (
    <main className="mx-auto mt-12 prose dark:prose-invert">
      <h1 className="text-center">Up from the ashesss</h1>

      <section className="text-center mt-6 px-6 sm:px-10 lg:px-20">
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          Welcome to my first bloggggggggggggg
        </p>

        <div className="mt-8">
          <a
            href="/blog"
            className="text-xl text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
          >
            Explore the Blog
          </a>
        </div>
      </section>
    </main>
  );
}
