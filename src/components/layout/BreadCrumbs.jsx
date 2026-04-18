import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="mb-10">
      <ol className="flex flex-wrap items-center text-sm">

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">

              {/* Home Icon (only first item) */}
              {index === 0 && (
                <Home size={16} className="mr-1 text-gray-500" />
              )}

              {/* Link or Active */}
              {!isLast ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-[#e94c89] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-semibold">
                  {item.label}
                </span>
              )}

              {/* Separator Icon */}
              {!isLast && (
                <ChevronRight
                  size={16}
                  className="mx-2 text-gray-400"
                />
              )}

            </li>
          );
        })}

      </ol>
    </nav>
  );
}