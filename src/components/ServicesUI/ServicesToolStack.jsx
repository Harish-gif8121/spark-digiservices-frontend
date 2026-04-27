"use client";

// import Image from "next/image";
import { toolStack } from "@/data/toolstack";

/* ---------------- SECTION COMPONENT ---------------- */

const Section = ({ title, tools }) => {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="mt-20">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-gray-900 relative inline-block">
        {title}
        <span className="block h-[3px] w-10 bg-[#e94c89] mx-auto mt-3 rounded-full"></span>
      </h3>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-12">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="relative flex items-center justify-center">
              {/* Glow */}
              <div className="absolute w-20 h-20 bg-[#e94c89]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Image */}
              <div className="bg-gray-50 p-4 rounded-2xl shadow-sm group-hover:shadow-md transition duration-300">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Name */}
            <p className="mt-4 text-sm font-medium text-gray-700 group-hover:text-[#e94c89] transition">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function ServicesToolStack({ service }) {
  const data = toolStack[service];

  if (!data) return null;

  /* 🔥 ORDER CONTROL (Analytics FIRST) */
  const sectionConfig = [
    { key: "analytics", title: "Analytics Tools" },
    { key: "technicalSeo", title: "Technical SEO Tools" },
    { key: "ecommerceSeo", title: "E-Commerce SEO Tools" },
    { key: "strategy", title: "Strategy Tools" },
    { key: "content", title: "Content Tools" },
    { key: "ads", title: "Advertising Tools" },
    { key: "contentMarketing", title: "Content Marketing Tools" },
    { key: "analyticsTools", title: "Analytics & Performance Monitoring" },
    { key: "strategyTools", title: "Social Media Strategy Tools" },
    { key: "marketingTools", title: "Marketing Tools by Google" },
    { key: "contentTools", title: "Content Creation Tools" },
    { key: "adsTools", title: "Paid Social Advertising Platforms" },
    { key: "tools", title: "Mobile Development Tools" },
    { key: "backend", title: "Backend & APIs" },
  ];

  /* Build sections dynamically */
  const sections = sectionConfig
    .filter((sec) => data[sec.key])
    .map((sec) => ({
      title: sec.title,
      tools: data[sec.key],
    }));

  if (sections.length === 0) return null;

  return (
    <section className="bg-white pb-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {sections.map((sec, index) => (
          <Section key={index} title={sec.title} tools={sec.tools} />
        ))}
      </div>
    </section>
  );
}