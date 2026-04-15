import blogs from "@/data/blogs";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) return notFound();

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-500 mb-6">{blog.date}</p>

        <img src={blog.image} className="w-full rounded-xl mb-8" />

        <p className="text-gray-700 leading-relaxed">
          {blog.desc} (Full blog content goes here...)
        </p>
      </div>
    </div>
  );
}
