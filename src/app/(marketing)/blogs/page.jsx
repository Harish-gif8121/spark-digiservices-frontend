import {blogs} from "@/data/blogs";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="bg-white min-h-screen py-20 px-6 mt-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-12">
          All <span className="text-[#e94c89]">Blogs</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="border rounded-xl overflow-hidden shadow-sm">
              <img src={blog.image} className="h-52 w-full object-cover" />

              <div className="p-5">
                <h3 className="font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{blog.desc}</p>

                <Link href={`/blogs/${blog.id}`} className="text-[#e94c89] text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}