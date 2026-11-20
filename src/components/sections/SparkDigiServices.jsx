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
import FormTrigger from "../FormTrigger";

const services = [
  {
    title: "Logo Design",
    icon: PenTool,
    desc: "Craft a unique and memorable logo that reflects your brand’s personality and vision. We design identities that make your business instantly recognizable and professionally stand out.",
    href: "/services/logo-design",
    points: ["Custom brand identity", "Modern styles", "High-resolution files"],
    gradient: "from-violet-500 to-fuchsia-500",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    ring: "group-hover:ring-violet-200",
    glow: "group-hover:shadow-violet-200/60",
    accent: "bg-violet-500",
  },
  {
    title: "Trademark",
    icon: ShieldCheck,
    desc: "Secure your brand identity with complete legal trademark protection services. We help you safeguard your business name, logo, and assets from unauthorized use.",
    href: "/services/trademark",
    points: ["Filing", "Approval", "Support"],
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    ring: "group-hover:ring-emerald-200",
    glow: "group-hover:shadow-emerald-200/60",
    accent: "bg-emerald-500",
  },
  {
    title: "Web Development",
    icon: Monitor,
    desc: "Build fast, responsive, and modern websites tailored to your business goals. Our websites are designed to deliver performance, scalability, and a seamless user experience.",
    href: "/services/website-development",
    points: ["Responsive", "SEO ready", "Fast"],
    gradient: "from-blue-500 to-indigo-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    ring: "group-hover:ring-blue-200",
    glow: "group-hover:shadow-blue-200/60",
    accent: "bg-blue-500",
  },
  {
    title: "App Development",
    icon: Smartphone,
    desc: "Create powerful Android and iOS applications that engage users and drive growth. We develop smooth, feature-rich apps built for performance and real-world usability.",
    href: "/services/app-development",
    points: ["Mobile UI", "Secure", "Scalable"],
    gradient: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    ring: "group-hover:ring-orange-200",
    glow: "group-hover:shadow-orange-200/60",
    accent: "bg-orange-500",
  },
  {
    title: "SEO",
    icon: Search,
    desc: "Improve your website visibility and rank higher on search engines organically. Our SEO strategies help you attract the right audience and increase consistent traffic.",
    href: "/services/seo",
    points: ["Keyword research", "On-page SEO", "Technical fixes"],
    gradient: "from-rose-500 to-pink-500",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    ring: "group-hover:ring-rose-200",
    glow: "group-hover:shadow-rose-200/60",
    accent: "bg-rose-500",
  },
  {
    title: "Local SEO",
    icon: Globe,
    desc: "Connect with nearby customers who are actively searching for your services. We optimize your online presence to boost visibility in local search results and maps.",
    href: "/services/local-seo",
    points: ["GMB setup", "Maps ranking", "Local leads"],
    gradient: "from-cyan-500 to-sky-500",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    ring: "group-hover:ring-cyan-200",
    glow: "group-hover:shadow-cyan-200/60",
    accent: "bg-cyan-500",
  },
  {
    title: "Social Media",
    icon: Share2,
    desc: "Build a strong online presence and connect meaningfully with your audience. We create engaging content and strategies that grow followers and increase engagement.",
    href: "/services/social-media",
    points: ["Content strategy", "Daily posting", "Analytics"],
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    ring: "group-hover:ring-pink-200",
    glow: "group-hover:shadow-pink-200/60",
    accent: "bg-pink-500",
  },
  {
    title: "Google Ads",
    icon: BarChart3,
    desc: "Run highly targeted ad campaigns that bring instant traffic and conversions. We optimize your ads for maximum ROI and better lead generation.",
    href: "/services/google-ads",
    points: ["Targeting", "Optimization", "Tracking"],
    gradient: "from-yellow-500 to-orange-500",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    ring: "group-hover:ring-yellow-200",
    glow: "group-hover:shadow-yellow-200/60",
    accent: "bg-yellow-500",
  },
  {
    title: "Email Marketing",
    icon: Mail,
    desc: "Turn leads into loyal customers through personalized email campaigns. We design impactful emails that improve engagement, trust, and conversions.",
    href: "/services/email-marketing",
    points: ["Automation", "Campaigns", "Conversion"],
    gradient: "from-purple-500 to-indigo-500",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    ring: "group-hover:ring-purple-200",
    glow: "group-hover:shadow-purple-200/60",
    accent: "bg-purple-500",
  },
  {
    title: "WhatsApp Marketing",
    icon: MessageCircle,
    desc: "Reach your customers instantly with direct and personalized messaging campaigns. We help you boost sales and engagement through high-response WhatsApp communication.",
    href: "/services/whatsapp-marketing",
    points: ["Bulk messaging", "Automation", "Engagement"],
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    ring: "group-hover:ring-green-200",
    glow: "group-hover:shadow-green-200/60",
    accent: "bg-green-500",
  },
];
const button = {
  title: "Get our services",
};

export default function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6 overflow-hidden">
      {/* Soft colorful blobs in background */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left mx-auto md:mx-0 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 backdrop-blur border border-violet-200 shadow-sm text-xs font-medium text-violet-600 mb-5">
              <Sparkles className="w-4 h-4" />
              Premium Digital Services
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Designed to Help Your{" "}
              <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Business Grow
              </span>
            </h2>

            <p className="text-gray-500 mt-4 text-base">
              Elevate your brand. Expand your reach. Accelerate your growth.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <Link
            href="/services"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-violet-300/50 hover:shadow-violet-400/60 hover:scale-105 transition-all duration-300"
          >
            All Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 relative z-10">
          {services.map((service, i) => (
            <Card key={i} service={service} index={i} />
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-12 text-center">
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
    <Link href={service.href} className="group block w-full perspective">
      <div className="relative h-[290px] w-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        {/* FRONT — text rendered sharply */}
        <div
          className={`absolute inset-0 bg-white rounded-2xl border border-gray-200 ring-1 ring-transparent ${service.ring} shadow-md ${service.glow} group-hover:shadow-xl px-5 py-5 flex flex-col justify-between backface-hidden transform-gpu antialiased transition-all duration-300`}
        >
          {/* Colorful top bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${service.gradient}`}
          />

          {/* Soft corner glow */}
          <div
            className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} opacity-10 blur-xl group-hover:opacity-30 transition`}
          />

          {/* Number watermark */}
          <span className="absolute top-4 right-4 text-4xl font-black text-gray-100 group-hover:text-gray-200 transition leading-none select-none">
            {num}
          </span>

          <div>
            {/* ICON */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl ${service.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
            >
              <Icon className={`w-6 h-6 ${service.iconColor}`} />
            </div>

            {/* TITLE — sharpened */}
            <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-gray-900 transition leading-tight [text-rendering:geometricPrecision] [-webkit-font-smoothing:antialiased]">
              {service.title}
            </h3>

            {/* DESC — sharpened */}
            <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed [text-rendering:geometricPrecision] [-webkit-font-smoothing:antialiased]">
              {service.desc}
            </p>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between text-xs mt-3">
            <span className="font-semibold text-gray-400 group-hover:text-gray-700 transition">
              Explore
            </span>

            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} text-white shadow-md group-hover:rotate-45 transition-transform duration-300`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* BACK — text rendered sharply */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} text-white rounded-2xl px-5 py-5 rotate-y-180 backface-hidden flex flex-col justify-between shadow-xl transform-gpu antialiased`}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />

          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 backdrop-blur">
                <Icon className="w-4 h-4 text-white" />
              </span>
              {/* TITLE — sharpened */}
              <h3 className="text-base font-bold leading-tight [text-rendering:geometricPrecision] [-webkit-font-smoothing:antialiased]">
                {service.title}
              </h3>
            </div>

            {/* POINTS — sharpened */}
            <ul className="mt-4 space-y-2 text-xs text-white/90 [text-rendering:geometricPrecision] [-webkit-font-smoothing:antialiased]">
              {service.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <span className="relative flex justify-between items-center text-xs font-semibold mt-3 bg-white/15 backdrop-blur rounded-lg px-3 py-2">
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