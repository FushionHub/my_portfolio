import Link from 'next/link';

const blogPosts = [
  {
    slug: 'the-future-of-ai-in-marketing',
    title: 'The Future of AI in Marketing',
    date: 'August 4, 2025',
    excerpt: 'AI is transforming the marketing landscape. In this post, we explore the latest trends and what they mean for your business.',
  },
  {
    slug: 'scaling-operations-for-hypergrowth',
    title: 'Scaling Operations for Hypergrowth',
    date: 'July 28, 2025',
    excerpt: 'Hypergrowth is a good problem to have, but it comes with its own set of challenges. Here\'s how to scale your operations effectively.',
  },
  {
    slug: 'building-a-brand-that-lasts',
    title: 'Building a Brand That Lasts',
    date: 'July 21, 2025',
    excerpt: 'A strong brand is more than just a logo. It\'s a promise to your customers. Here\'s how to build a brand that stands the test of time.',
  },
];

const BlogPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">From the Blog</h1>
        </div>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-400">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary font-semibold mt-4 inline-block hover:underline">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
