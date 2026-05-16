import services from "@/data/services.json";
// import whyChoose from "@/data/site.json";
import ServiceHero from "@/components/ServicesUI/ServiceHero";
// import SparkDigiServices from "@/components/sections/SparkDigiServices";
import { notFound } from "next/navigation";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import ServicesToolStack from "@/components/ServicesUI/ServicesToolStack";
// import WhyChoose from "@/components/sections/WhyChoose";
// import Testimonials from "@/components/sections/testimonials";
// import ContactSection from "@/components/sections/contactSection";
import ContactSection from "@/components/popups/ContactSection";
import { WebsiteTypes } from "@/components/ServicesUI/WebsiteTypes";
import { toolStack } from "@/data/toolstack";
import DynamicSection from "@/components/ServicesUI/DynamicSection";
import { serviceExtras } from "@/data/serviceExtras";
import GrowthStatsSection from "@/components/ServicesUI/GrowthStatsSection";

/* Static params */
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
export default async function ServicePage({ params }) {
  const resolvedParams = await params;   // ✅ unwrap promise
  const { slug } = resolvedParams;

  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();


  console.log("service", service);  

  const toolData = toolStack[slug];
  const extraData = serviceExtras[slug];

  return (
    <main className="mx-auto">
      {/* <ServiceHero service={service} />
       */}
       <ServiceHero
  title={service.heroTitle}
  description={service.heroDescription}
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.heroTitle },
  ]}
/>
      <ServicesMarquee />

      <WebsiteTypes items={toolData?.websiteTypes || []} />

      <ServicesToolStack service={slug} />
      <DynamicSection data={extraData} />

      {/* <WhyChoose data={whyChoose} /> */}
      <GrowthStatsSection />
      <ContactSection />
      {/* <SparkDigiServices /> */}
      {/* <Testimonials /> */}
      {/* <ContactSection /> */}
    </main>
  );
}
