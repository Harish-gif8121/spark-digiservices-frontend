import Image from "next/image";
import { toolStack } from "@/data/toolstack";

const Section = ({ title, tools }) => {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="mt-14">
      <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-gray-800">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center text-center py-6 transition-all duration-300 hover:-translate-y-1"
          >
            {/* ICON ONLY (No box) */}
            <div className="relative flex items-center justify-center">
              {/* Soft glow */}
              <div className="absolute w-20 h-20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Image */}
              <Image
                src={tool.icon}
                alt={tool.name}
                width={64}
                height={64}
                className="object-contain transition duration-300"
              />
            </div>

            {/* NAME */}
            <p className="mt-3 text-sm font-medium text-gray-600 group-hover:text-[#e94c89] transition">
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

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Badge */}
        <p className="text-[#e94c89] uppercase tracking-[0.2em] text-xs mb-3 font-semibold">
          * Tools We Use
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 leading-tight">
          Explore Our <span className="text-[#e94c89]">Tool Stack</span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Discover the tools and technologies we use to optimize campaigns,
          drive traffic, and boost ROI.
        </p>

        {/* Sections */}
        <Section
          title="Digital Marketing Strategy Tools"
          tools={data.strategy}
        />
        <Section title="Content Creation Tools" tools={data.content} />
        <Section title="Paid Advertising Platforms" tools={data.ads} />
        <Section title="Analytics & Reporting Tools" tools={data.analytics} />
      </div>
    </section>
  );
}
