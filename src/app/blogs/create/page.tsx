"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Backendless from "@/app/lib/backendless";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CreateBlogPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    Backendless.UserService.getCurrentUser().then((u) => {
      if (!u) return router.push("/login");
      setUser(u);
    });
  }, [router]);

  const formik = useFormik({
    initialValues: { title: "", content: "", tags: "" },
    validationSchema: Yup.object({
      title: Yup.string().required("Title required"),
      content: Yup.string().required("Content required"),
    }),
    onSubmit: async (values) => {
      await Backendless.Data.of("Blog Posts").save({
        ...values,
        author: user,
      });
      router.push("/blogs");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-xl mx-auto space-y-4 mt-10"
    >
      <input
        type="text"
        {...formik.getFieldProps("title")}
        className="border w-full p-2"
        placeholder="Blog Title"
      />
      <textarea
        {...formik.getFieldProps("content")}
        className="border w-full p-2 h-40"
        placeholder="Write your blog..."
      />
      <input
        type="text"
        {...formik.getFieldProps("tags")}
        className="border w-full p-2"
        placeholder="Tags (optional)"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
