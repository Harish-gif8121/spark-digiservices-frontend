import services from "@/data/services.json";
import Breadcrumbs from "@/components/layout/BreadCrumbs";
import ServiceHero from "@/components/ServicesUI/ServiceHero";
import ServiceFeatures from "@/components/ServicesUI/ServiceFeatures";
import { notFound } from "next/navigation";
import SparkDigiServices from "@/components/sections/SparkDigiServices";

/* Static pages */
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* SEO metadata */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

/* Page */
export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="container mx-auto mt-24 py-10 bg-white text-black rounded-lg shadow-md px-6">

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` }
        ]}
      />

      <ServiceHero service={service} />

      <ServiceFeatures features={service.features} />

      <SparkDigiServices />

    </main>
  );
}