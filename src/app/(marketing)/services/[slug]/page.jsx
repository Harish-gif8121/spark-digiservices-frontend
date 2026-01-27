import services from "@/data/services.json";
import Breadcrumbs from "@/components/layout/BreadCrumbs";

export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.slug);
  return {
    title: service?.title,
    description: service?.description,
  };
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.slug);

  return (
    <main className="container mx-auto py-10">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.slug}` }
      ]} />

      <h1 className="text-4xl font-bold mt-4">{service.title}</h1>
      <p className="mt-4">{service.description}</p>
    </main>
  );
}
