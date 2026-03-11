import services from "@/data/services.json";
import Breadcrumbs from "@/components/layout/BreadCrumbs";
// 
import ServiceHero from "@/components/ServicesUI/ServiceHero";
import ServiceFeatures from "@/components/ServicesUI/ServiceFeatures";
import { notFound } from "next/navigation";

/* Generate Static Pages for All Services */
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* SEO Metadata */
export async function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="container mt-24 h-screen mx-auto py-10 bg-amber-400">

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
      />

      {/* Hero Section */}
      <ServiceHero service={service} />

      {/* Features Section */}
      <ServiceFeatures features={service.features} />

    </main>
  );
}