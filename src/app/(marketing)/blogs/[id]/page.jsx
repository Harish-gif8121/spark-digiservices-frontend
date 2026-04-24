import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export default async function BlogDetail({ params }) {
  const { id } = await params;   // ✅ NOW REQUIRED

  const blog = blogs.find((b) => b.id === id);
  if (!blog) return notFound();
 

  return (
    <div className="bg-[#f5f6f7] min-h-screen py-22">
      <div className="max-w-7xl mx-auto bg-white px-6 md:px-10 py-10 shadow-sm rounded-sm">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded font-semibold text-xs">
            {blog.category}
          </span>
          <span>{blog.date}</span>
        </div>

        {/* Image */}
        <div className="mt-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded border"
          />
        </div>

        {/* Intro */}
        <p className="mt-6 text-gray-700 text-[15px] leading-relaxed">
          {blog.desc}
        </p>

        {/* Content */}
        <div className="mt-8 space-y-6 text-[15px] text-gray-800 leading-relaxed">
          {blog.content?.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-semibold text-gray-900 mb-2">
                {section.heading}
              </h2>

              {section.text && <p>{section.text}</p>}

              {section.list && (
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Comment Form */}
        <div className="mt-10 border-t pt-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            Leave a Comment
          </h3>

          <form className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input placeholder="Name" className="border p-2 text-sm rounded" />
              <input placeholder="Email" className="border p-2 text-sm rounded" />
              <input placeholder="Phone" className="border p-2 text-sm rounded" />
            </div>

            <textarea
              rows="4"
              placeholder="Comment"
              className="w-full border p-2 text-sm rounded"
            />

            <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600">
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}