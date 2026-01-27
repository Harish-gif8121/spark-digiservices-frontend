import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-2 text-sm text-gray-600">
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>{item.label}</Link>
            {i < items.length - 1 && " / "}
          </li>
        ))}
      </ol>
    </nav>
  );
}
