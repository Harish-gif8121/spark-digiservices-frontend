import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <p className="text-sm tracking-widest text-gray-500 mb-3">
              BLOG / INSIGHTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Latest <span className="text-blue-500">Articles</span>
            </h2>
          </div>

          <Link href="/blogs">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-blue-500 transition font-medium">
              View All Blogs →
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">{blog.date}</p>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5">{blog.desc}</p>

                <Link href={`/blogs/${blog.id}`}>
                  <span className="text-sm font-medium text-black group-hover:text-blue-500">
                    Read More →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
