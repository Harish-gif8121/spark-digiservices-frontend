

import Link from "next/link";

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="mt-3 text-sm text-gray-300">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#e94c89] font-medium">
              {item.label}
            </span>
          )}

          {index !== items.length - 1 && (
            <span className="mx-2 text-gray-400">•</span>
          )}
        </span>
      ))}
    </nav>
  );
}