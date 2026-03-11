import {
  Monitor,
  Search,
  Share2,
  Smartphone,
  BarChart3,
  Sparkles,
  ArrowUpRight,
  Form
} from "lucide-react";
import FormTrigger from "../FormTrigger";

const services = [
  {
    title: "Performance Marketing",
    desc: "Boost your growth with tailored campaigns including Google Ads, LinkedIn Ads and social media strategies.",
    icon: BarChart3,
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience with strategic posts and impactful storytelling.",
    icon: Share2,
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Enhance visibility and traffic with keyword optimization and technical SEO.",
    icon: Search,
  },
  {
    title: "Answer Engine Optimization",
    desc: "Optimize content for AI powered search like ChatGPT and Google AI results.",
    icon: Sparkles,
  },
  {
    title: "Generative Engine Optimization",
    desc: "Prepare your content for AI-generated search ecosystems.",
    icon: Sparkles,
  },
  {
    title: "Website Development",
    desc: "Create modern, responsive websites tailored to your brand identity.",
    icon: Monitor,
  },
  {
    title: "App Development",
    desc: "Develop intuitive mobile apps to boost engagement and retention.",
    icon: Smartphone,
  },
];

export default function SparkDigiServices() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-red-600/20 blur-[160px] top-[-200px] left-[-200px]"></div>
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] bottom-[-200px] right-[-200px]"></div>
      </div>

      <div className="container relative z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">

          <div>
            <p className="text-red-500 text-sm uppercase tracking-widest mb-3">
              ✱ Our Services
            </p>

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Digital Solutions by{" "}
              <span className="text-red-500">SparkDigi Services</span>
              <br /> to Elevate Your Brand
            </h2>
          </div>

          <div className="lg:text-right">
            <p className="text-gray-400 mb-5">
              At Sparkdigi Services, we empower businesses with innovative strategies
              and tools designed for sustainable growth and impactful engagement.
            </p>

            <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition">
              All Services
              <span className="bg-red-600 p-2 rounded-full">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10
                bg-white/5 backdrop-blur-xl p-7
                transition-all duration-500
                hover:-translate-y-3 hover:border-red-500/40
                hover:shadow-[0_20px_60px_rgba(255,0,0,0.25)]"
              >

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 blur-xl"></div>
                </div>

                <Icon className="text-red-500 mb-6" size={28} />

                <h3 className="font-semibold text-lg mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Arrow */}
                <ArrowUpRight
                  size={22}
                  className="absolute top-6 right-6 text-red-500
                  transition-transform duration-500
                  group-hover:translate-x-1 group-hover:-translate-y-1
                  group-hover:rotate-12"
                />
              </div>
            );
          })}

        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm mt-16">
          Let’s make something great work together.{" "}
        <FormTrigger className ="inline-block bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-sm tracking-wider font-semibold transition duration-300">
 <span className="text-red-500 cursor-pointer hover:underline">
            Get Free Quote
          </span>
        </FormTrigger>
         
        </div>

      </div>
    </section>
  );
}