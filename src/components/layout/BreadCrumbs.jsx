import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <div className="mb-8 text-sm text-gray-500">

      {items.map((item, index) => (
        <span key={index}>

          <Link
            href={item.href}
            className="hover:text-blue-600"
          >
            {item.label}
          </Link>

          {index < items.length - 1 && (
            <span className="mx-2">/</span>
          )}

        </span>
      ))}

    </div>
  );
}