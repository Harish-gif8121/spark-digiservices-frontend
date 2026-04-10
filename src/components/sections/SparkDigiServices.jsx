import {
  Monitor,
  Search,
  Share2,
  Smartphone,
  BarChart3,
  Sparkles,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Globe,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import FormTrigger from "../FormTrigger";
import Link from "next/link";

const services = [
  {
    title: "Logo Design",
    desc: "Create unique and memorable brand identities with professional logo designs.",
    icon: PenTool,
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Enhance visibility and traffic with keyword optimization and technical SEO.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience with strategic posts and impactful storytelling.",
    icon: Share2,
  },
  {
    title: "Google Ads",
    desc: "Drive targeted traffic and conversions with high-performing ad campaigns.",
    icon: BarChart3,
  },
  {
    title: "Google My Business (Local SEO)",
    desc: "Improve local visibility and attract nearby customers effectively.",
    icon: Globe,
  },
  {
    title: "Website Development & Design",
    desc: "Create modern, responsive websites tailored to your brand identity.",
    icon: Monitor,
  },
  {
    title: "Mobile App Development",
    desc: "Develop intuitive mobile apps to boost engagement and retention.",
    icon: Smartphone,
  },
  {
    title: "Trademark Registration",
    desc: "Protect your brand legally with hassle-free trademark registration.",
    icon: ShieldCheck,
  },
  {
    title: "Email Marketing",
    desc: "Reach your audience directly with targeted email campaigns.",
    icon: Mail,
  },
  {
    title: "WhatsApp Marketing",
    desc: "Engage customers instantly using personalized WhatsApp campaigns.",
    icon: MessageCircle,
  },
];

export default function SparkDigiServices() {
  return (
    <section className="relative bg-white text-black py-24 overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#e94c89]/10 blur-[120px] top-[-150px] left-[-150px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#e94c89]/10 blur-[120px] bottom-[-150px] right-[-150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
          
          <div>
            <p className="text-[#e94c89] text-sm uppercase tracking-widest mb-3 font-semibold">
              ✱ Our Services
            </p>

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Digital Solutions by{" "}
              <span className="text-[#e94c89]">SparkDigi Services</span>
              <br /> to Elevate Your Brand
            </h2>
          </div>

          <div className="lg:text-right">
            <p className="text-gray-600 mb-5">
              At Sparkdigi Services, we empower businesses with innovative
              strategies and tools designed for sustainable growth and impactful
              engagement.
            </p>

            <Link href="/services">
              <button className="inline-flex items-center gap-3 bg-[#e94c89]/10 border border-[#e94c89]/30 px-6 py-3 rounded-full hover:bg-[#e94c89] hover:text-white transition">
                All Services
                <span className="bg-[#e94c89] text-white p-2 rounded-full">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </Link>
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#e94c89] hover:shadow-[0_20px_50px_rgba(233,76,137,0.25)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e94c89]/10 via-transparent to-[#e94c89]/10 blur-xl"></div>
                </div>

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
            );
          })}
        </div>

{/*        
        <div className="flex flex-col items-center justify-center text-center gap-6 text-gray-600 text-sm mt-16">
          <p>
            Let’s make something great work together.
          </p>

          <FormTrigger className="bg-[#e94c89] hover:bg-[#d63d75] text-white px-10 py-4 rounded-full text-sm tracking-wider font-semibold transition duration-300">
            Get Free Quote
          </FormTrigger>
        </div> */}

      </div>
    </section>
  );
}