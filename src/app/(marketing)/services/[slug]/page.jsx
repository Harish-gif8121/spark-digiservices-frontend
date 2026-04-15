import services from "@/data/services.json";
import whyChoose from "@/data/site.json";
import ServiceHero from "@/components/ServicesUI/ServiceHero";
import SparkDigiServices from "@/components/sections/SparkDigiServices";
import { notFound } from "next/navigation";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import ServicesToolStack from "@/components/ServicesUI/ServicesToolStack";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contactSection";

/* Static params */
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* Page */
export default async function ServicePage(props) {
  const { slug } = await props.params; // ✅ MUST await here

  console.log("Generating page for slug:", slug); // Debug log

  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
     <main className=" mx-auto ">
      <ServiceHero service={service} />
      <ServicesMarquee />
      <ServicesToolStack service={slug} />
     <WhyChoose data={whyChoose} />
        <SparkDigiServices />
        <Testimonials/>
        <ContactSection/>
      </main>
    </>
  );
}
