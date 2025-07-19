"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface BlogPost {
  objectId: string;
  title: string;
  content: string;
  tags?: string;
  createdAt?: string;
  author?: string;
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://settledhall-us.backendless.app/api/data/Posts?sortBy=created%20desc"
      )
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        Latest Posts
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.objectId}
              className="border border-gray-400 rounded-2xl p-6 bg-white"
            >
              <header className="mb-3">
                <h2 className="text-2xl font-bold text-indigo-700">
                  {post.title}
                </h2>
              </header>

              <p className="text-gray-800 leading-relaxed mb-4">
                {post.content}
              </p>

              <footer className="text-sm text-gray-600 space-y-1">
                <p>
                  {post.author ? `By ${post.author}` : "Unknown author"} ·{" "}
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleString()
                    : ""}
                </p>

                {post.tags && (
                  <p className="italic text-gray-500">Tags: {post.tags}</p>
                )}
              </footer>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
