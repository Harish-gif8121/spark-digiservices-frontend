import Link from "next/link";
import nav from "@/data/navigation.json";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-white">
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
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                {/* Trigger */}
                <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                  {item.label}
                  <span className="text-xs">▼</span>
                </span>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  <div className="bg-white border shadow-lg rounded w-56">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-gray-100"
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
                className="hover:text-blue-600"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block border border-black rounded-full px-6 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          GET A QUOTE
        </Link>
      </div>
    </header>
  );
}
