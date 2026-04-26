"use client";

import {
  Monitor,
  Search,
  Share2,
  Smartphone,
  BarChart3,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Globe,
  PenTool,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import FormTrigger from "../../../components/FormTrigger";

const services = [
  {
    title: "Logo Design",
    icon: PenTool,
    desc: "Build a powerful brand identity that stands out instantly.",
    href: "/services/logo-design",
    points: ["Custom brand identity", "Modern styles", "High-resolution files"],
  },
  {
    title: "Trademark",
    icon: ShieldCheck,
    desc: "Protect your brand legally.",
    href: "/services/trademark",
    points: ["Filing", "Approval", "Support"],
  },
  {
    title: "Web Development",
    icon: Monitor,
    desc: "Modern fast websites.",
    href: "/services/website-development",
    points: ["Responsive", "SEO ready", "Fast"],
  },
  {
    title: "App Development",
    icon: Smartphone,
    desc: "Android & iOS apps.",
    href: "/services/app-development",
    points: ["Mobile UI", "Secure", "Scalable"],
  },
  {
    title: "SEO",
    icon: Search,
    desc: "Rank higher and drive organic traffic.",
    href: "/services/seo",
    points: ["Keyword research", "On-page SEO", "Technical fixes"],
  },
  {
    title: "Local SEO",
    icon: Globe,
    desc: "Reach nearby customers.",
    href: "/services/local-seo",
    points: ["GMB setup", "Maps ranking", "Local leads"],
  },
  {
    title: "Social Media",
    icon: Share2,
    desc: "Grow your audience and engagement.",
    href: "/services/social-media",
    points: ["Content strategy", "Daily posting", "Analytics"],
  },
  {
    title: "Google Ads",
    icon: BarChart3,
    desc: "Run high ROI campaigns.",
    href: "/services/google-ads",
    points: ["Targeting", "Optimization", "Tracking"],
  },

  // {
  //   title: "App Development",
  //   icon: Smartphone,
  //   desc: "Android & iOS apps.",
  //   href: "/services/app-development",
  //   points: ["Mobile UI", "Secure", "Scalable"],
  // },

  {
    title: "Email Marketing",
    icon: Mail,
    desc: "Convert leads effectively.",
    href: "/services/email-marketing",
    points: ["Automation", "Campaigns", "Conversion"],
  },
  {
    title: "WhatsApp Marketing",
    icon: MessageCircle,
    desc: "Direct customer reach.",
    href: "/services/whatsapp-marketing",
    points: ["Bulk messaging", "Automation", "Engagement"],
  },
];

const button = {
  title: "Get our services",
};

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="text-center mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900">
              Interactive Digital{" "}
              <span className="text-blue-600">Solutions</span>
            </h2>

            <p className="text-gray-500 mt-4">
              Transform your business with cutting-edge strategies and creative
              excellence.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 relative z-10">
          {services.map((service, i) => (
            <Card key={i} service={service} index={i} />
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-10 text-center">
          <FormTrigger data={button} source="homepage_services" />
        </div>
      </div>
    </section>
  );
}

function Card({ service, index }) {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={service.href} className="group perspective block">
      <div className="relative h-[240px] transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        {/* FRONT */}
        <div className="absolute inset-0 bg-white rounded-xl border-2 border-blue-400 shadow-xl px-5 py-4 flex flex-col justify-between backface-hidden transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
          {/* Top Accent */}
          <div className="absolute top-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />

          {/* Number
          <span className="absolute top-2 right-3 text-[52px] font-bold text-gray-100 leading-none">
            {num}
          </span> */}

          <div>
            {/* ICON */}
            <div className="w-11 h-11 flex items-center justify-center rounded-md bg-blue-50 group-hover:bg-blue-500 transition">
              <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition" />
            </div>

            {/* TITLE */}
            <h3 className="mt-3 text-2xl xl:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
              {service.title}
            </h3>

            {/* DESC */}
            <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">
              {service.desc}
            </p>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between text-xs mt-3">
            <span className="text-gray-500 group-hover:text-gray-700">
              Explore
            </span>

            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:rotate-45 transition" />
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-gray-900 text-white rounded-xl px-5 py-4 rotate-y-180 backface-hidden flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold">{service.title}</h3>

            <ul className="mt-3 space-y-1.5 text-xs text-gray-300">
              {service.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <span className="flex justify-between items-center text-xs mt-3">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* 3D Styles */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </Link>
  );
}
