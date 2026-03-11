import Link from "next/link";
import nav from "@/data/navigation.json";
import Image from "next/image";
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/spark-logo.webp"
            alt="Spark Digi Services"
            width={160}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-[17px] font-semibold text-gray-800">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                
                {/* Trigger */}
                <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                  {item.label}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition" />
                </span>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-xl w-60 overflow-hidden">

                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center px-5 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {child.label}
                      </Link>
                    ))}

                  </div>
                </div>

              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-3 text-gray-600">
            <Link href="#" className="hover:text-blue-600 transition">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-pink-500 transition">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="hover:text-blue-700 transition">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="hover:text-sky-500 transition">
              <Twitter size={18} />
            </Link>
          </div>

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="border border-black rounded-full px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            GET A QUOTE
          </Link>

        </div>

      </div>
    </header>
  );
}