"use client";

import { useState } from "react";
import axios from "axios";
import useAuthStore from "@/store/auth/authStore";
import { useRouter } from "next/navigation";

const CreatePostPage = () => {
  const router = useRouter();
  const { user, isLogin } = useAuthStore();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [postDate, setPostDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [loading, setLoading] = useState(false);

  if (!isLogin || !user) {
    return <p className="text-center mt-8">Please log in to create a post.</p>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postPayload = {
        title: title.trim(),
        content: content.trim(),
        author: `${user.firstname} ${user.lastname}`,
        tags: tags.trim(),
        createdAt: new Date(postDate),
      };

      console.log("Sending to Backendless:", postPayload);

      const response = await axios.post(
        "https://settledhall-us.backendless.app/api/data/Posts",
        postPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Backendless response:", response.data);
      router.push("/blogs");
    } catch (err: any) {
      console.error("Error creating post:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Content"
          className="border p-2 rounded min-h-[200px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Tags (optional, comma-separated)"
          className="border p-2 rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={postDate}
          onChange={(e) => setPostDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
