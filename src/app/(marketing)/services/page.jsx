// import services from "@/data/services";
import Breadcrumbs from "@/components/layout/BreadCrumbs";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Monitor,
  Search,
  Share2,
  Smartphone,
  BarChart3,
  PenTool,
  Mail,
  MessageCircle,
  Globe,
  ShieldCheck,
} from "lucide-react";
     const services = [
  {
    slug: "logo-design",
    title: "Logo Design",
    desc: "Create unique and memorable brand identities with professional logo designs.",
    icon: PenTool,
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    desc: "Enhance visibility and traffic with keyword optimization and technical SEO.",
    icon: Search,
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    desc: "Engage your audience with strategic posts and impactful storytelling.",
    icon: Share2,
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    desc: "Drive targeted traffic and conversions with high-performing ad campaigns.",
    icon: BarChart3,
  },
  {
    slug: "local-seo",
    title: "Google My Business (Local SEO)",
    desc: "Improve local visibility and attract nearby customers effectively.",
    icon: Globe,
  },
  {
    slug: "web-development",
    title: "Website Development & Design",
    desc: "Create modern, responsive websites tailored to your brand identity.",
    icon: Monitor,
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    desc: "Develop intuitive mobile apps to boost engagement and retention.",
    icon: Smartphone,
  },
  {
    slug: "trademark",
    title: "Trademark Registration",
    desc: "Protect your brand legally with hassle-free trademark registration.",
    icon: ShieldCheck,
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    desc: "Reach your audience directly with targeted email campaigns.",
    icon: Mail,
  },
  {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    desc: "Engage customers instantly using personalized WhatsApp campaigns.",
    icon: MessageCircle,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white py-27 px-6">
      <div className="max-w-7xl mx-auto">

        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" }
        ]} />

        <h1 className="text-4xl font-bold mt-6 mb-12">Our Services</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link key={index} href={`/services/${service.slug}`}>
                <div className="group relative cursor-pointer rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#e94c89] hover:shadow-[0_20px_50px_rgba(233,76,137,0.25)]">

                  {/* Icon */}
                  <Icon className="text-[#e94c89] mb-6" size={28} />

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={22}
                    className="absolute top-6 right-6 text-[#e94c89] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12"
                  />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  );
}