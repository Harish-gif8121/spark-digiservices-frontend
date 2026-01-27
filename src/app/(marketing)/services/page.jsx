import services from "@/data/services.json";
import Breadcrumbs from "@/components/layout/BreadCrumbs";

export default function ServicesPage() {
  return (
    <main className="container mx-auto py-10">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" }
      ]} />

      <h1 className="text-3xl font-bold mt-4">Services</h1>

      {services.map(s => (
        <a key={s.slug} href={`/services/${s.slug}`} className="block mt-4 underline">
          {s.title}
        </a>
      ))}
    </main>
  );
}
