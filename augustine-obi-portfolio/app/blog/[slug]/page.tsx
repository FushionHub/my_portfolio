const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  // In a real application, you would fetch the blog post content based on the slug
  const post = {
    title: 'Blog Post Title',
    date: 'August 4, 2025',
    content: `
      <p>This is a placeholder for the blog post content. In a real application, this would be fetched from a CMS or a local file based on the slug: <strong>${params.slug}</strong>.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-invert lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
          <p className="text-gray-400 mb-8">{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
