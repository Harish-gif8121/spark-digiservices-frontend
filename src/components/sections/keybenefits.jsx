import site from "@/data/site.json";
import { ClipboardList, Settings, BarChart3, Headphones } from "lucide-react";

const icons = {
  clipboard: ClipboardList,
  settings: Settings,
  chart: BarChart3,
  support: Headphones,
};

export default function KeyBenefits() {
  const benefits = site.benefits;

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto relative z-10">

        {/* Header */}

        <div className="grid md:grid-cols-2 gap-10 mb-16">

          <div>
            <p className="text-[#4a8f8a]uppercase tracking-widest text-sm mb-3">
              * {benefits.tag}
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              {benefits.title}{" "}
              <span className="text-[#c81d3a]">{benefits.highlight}</span> today
            </h2>
          </div>

          <p className="text-gray-400 text-lg">
            {benefits.subtitle}
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-8">

          {benefits.items.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={index}
                className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl p-8 hover:border-red-600 transition"
              >

                <span className="text-gray-400 text-sm">
                  {item.number}
                </span>

                <div className="text-[#4a8f8a]mt-6 mb-6">
                  <Icon size={36} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}