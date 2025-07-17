export default function BlogPage() {
  const dummyPosts = [
    {
      id: 1,
      title: "Exploring the Depths of the Ocean",
      date: "2025-07-01",
      excerpt:
        "A fascinating dive into the unexplored world beneath the waves.",
    },
    {
      id: 2,
      title: "The Art of Minimalist Living",
      date: "2025-06-20",
      excerpt: "How simplifying your life can lead to greater peace and focus.",
    },
    {
      id: 3,
      title: "Journey Through the Stars: A Space Odyssey",
      date: "2025-06-10",
      excerpt: "What it means to travel light-years and still long for Earth.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <ul className="space-y-6">
        {dummyPosts.map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
