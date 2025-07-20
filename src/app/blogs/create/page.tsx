"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import useAuthStore from "@/store/auth/authStore";
import { useRouter } from "next/navigation";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const CreatePostPage = () => {
  const router = useRouter();
  const { user, isLogin } = useAuthStore();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | undefined>("");
  const [tags, setTags] = useState("");
  const [postDate, setPostDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLogin || !user) {
      router.push("/login");
    }
  }, [isLogin, user, router]);

  if (!isLogin || !user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postPayload = {
        title: title.trim(),
        content: (content || "").trim(),
        author: `${user.firstname} ${user.lastname}`,
        tags: tags.trim(),
        createdAt: new Date(postDate),
      };

      const response = await axios.post(
        "https://settledhall-us.backendless.app/api/data/Posts",
        postPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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

        <div className="border rounded p-2 min-h-[200px] bg-white">
          <MDEditor value={content} onChange={setContent} height={300} />
        </div>

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
