import FormTrigger from "@/components/FormTrigger";
import site from "@/data/site.json";
import Animation from "@/components/ui/Animation";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

const button = {
  title: "Get Details",
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/spark.mp4" type="video/mp4" />
      </video>

      {/* Layered overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Soft colorful glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 py-24 sm:py-28">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Welcome / tagline pill */}
          <Animation direction="up" delay={200}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-[10px] sm:text-xs font-semibold tracking-wide text-white/90 mb-5 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e94c89]" />
              Your Trusted{" "}
              <span className="text-[#e94c89] font-bold">{site.name}</span>
              {" "}Partner
            </div>
          </Animation>

          {/* Main headline */}
          <Animation direction="up" delay={300}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
              {site.tagline}
            </h1>
          </Animation>

          {/* Highlight */}
          <Animation direction="up" delay={400}>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 sm:mt-3 leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-[#e94c89] via-pink-400 to-orange-400 bg-clip-text text-transparent">
                {site.highlight}
              </span>
            </h2>
          </Animation>

          {/* Description */}
          <Animation direction="up" delay={500}>
            <p className="mt-5 sm:mt-7 max-w-2xl mx-auto text-gray-200/90 text-sm sm:text-base leading-relaxed px-2">
              {site.description}
            </p>
          </Animation>

          {/* CTAs */}
          <Animation direction="up" delay={600}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              {/* Primary CTA — gradient pill */}
              <div className="w-full sm:w-auto">
                <FormTrigger
                  data={button}
                  source="homepage_hero"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:scale-[1.03] transition-all duration-300"
                />
              </div>

              {/* Secondary CTA — phone */}
              <a
                href="tel:+916300296581"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm font-semibold tracking-wide text-white border border-white/40 bg-white/5 backdrop-blur-md hover:bg-white hover:text-gray-900 hover:border-white hover:scale-[1.03] transition-all duration-300"
              >
                <Phone size={16} className="transition-transform group-hover:rotate-12" />
                +91 6300296581
                <ArrowRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>
            </div>
          </Animation>
        </div>
      </div>

      {/* Scroll hint (desktop) */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-white/60">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <span className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}