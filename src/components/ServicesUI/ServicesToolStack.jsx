import Image from "next/image";
import { toolStack } from "@/data/toolstack";

const Section = ({ title, tools }) => {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="mt-20">
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-gray-900 relative inline-block">
        {title}
        <span className="block h-[3px] w-10 bg-[#e94c89] mx-auto mt-3 rounded-full"></span>
      </h3>

      {/* Tools Grid */}
      <div className="flex flex-wrap justify-center gap-12">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon Wrapper */}
            <div className="relative flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute w-20 h-20 bg-[#e94c89]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Icon */}
              <div className="bg-gray-50 p-4 rounded-2xl shadow-sm group-hover:shadow-md transition duration-300">
                <Image
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

export default function ServicesToolStack({ service }) {
  const data = toolStack[service];

  if (!data) return null;

  const sections = [];

  if (data.technicalSeo) {
    sections.push({
      title: "Technical SEO Tools",
      tools: data.technicalSeo,
    });
  }

  if (data.ecommerceSeo) {
    sections.push({
      title: "E-Commerce SEO Tools",
      tools: data.ecommerceSeo,
    });
  }

  if (data.strategy) {
    sections.push({
      title: "Strategy Tools",
      tools: data.strategy,
    });
  }

  if (data.content) {
    sections.push({
      title: "Content Tools",
      tools: data.content,
    });
  }

  if (data.ads) {
    sections.push({
      title: "Advertising Tools",
      tools: data.ads,
    });
  }

  if (data.analytics) {
    sections.push({
      title: "Analytics Tools",
      tools: data.analytics,
    });
  }

  if (data.contentMarketing) {
    sections.push({
      title: "Content Marketing Tools",
      tools: data.contentMarketing,
    });
  }

  if (data.analyticsTools) {
    sections.push({
      title: "Analytics & Performance Monitoring",
      tools: data.analyticsTools,
    });
  }
if (data.strategyTools) {
  sections.push({
    title: "Social Media Strategy Tools",
    tools: data.strategyTools,
  });
}
if (data.marketingTools) {
  sections.push({
    title: "Marketing tools by Google",
    tools: data.marketingTools,
  });
}

if (data.contentTools) {
  sections.push({
    title: "Content Creation Tools",
    tools: data.contentTools,
  });
}

if (data.adsTools) {
  sections.push({
    title: "Paid Social Advertising Platforms",
    tools: data.adsTools,
  });
}


  if (sections.length === 0) return null;

  return (
    <section className="bg-white pb-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Sections */}
        {sections.map((sec, i) => (
          <Section key={i} title={sec.title} tools={sec.tools} />
        ))}
      </div>
    </section>
  );
}
