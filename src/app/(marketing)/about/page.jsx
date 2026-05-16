import site from "@/data/site.json";
import { heroes } from "@/data/hero";
import whyChoose from "@/data/site.json";
import WhyChoose from "@/components/sections/WhyChoose";

import ServiceHero from "@/components/ServicesUI/ServiceHero";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import ContactSection from "@/components/popups/ContactSection";
import AboutSection from "@/components/sections/AboutSection";

export default function AboutPage() {
  const { name, description, tagline, benefits } = site;

  return (
    <main className="mx-auto">
      <ServiceHero
        title={heroes.about.heroTitle}
        description={heroes.about.heroDescription}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <ServicesMarquee />
      <AboutSection />
      <WhyChoose data={whyChoose} />
      <ContactSection />
    </main>
  );
}
