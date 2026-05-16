import ContactSection from "@/components/sections/contactSection";
import ContactSectionform from "@/components/popups/ContactSection";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import ServiceHero from "@/components/ServicesUI/ServiceHero";
import { heroes } from "@/data/hero";
import whyChoose from "@/data/site.json";
import WhyChoose from "@/components/sections/WhyChoose";
// import contactHero from "@/data/hero";

export default function Page() {
  return (
    <main className="mx-auto">
      {/* Hero Section */}
     <ServiceHero
             title={heroes.contact.heroTitle}
             description={heroes.contact.heroDescription}
             breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
           />
      <ServicesMarquee />
<WhyChoose data={whyChoose} />
    <ContactSectionform />
        <ContactSection />
     
    </main>
  );
}