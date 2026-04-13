import FormTrigger from "@/components/FormTrigger";
import site from "@/data/site.json";
import Animation from "@/components/ui/Animation";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/spark.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-bl" /> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center h-full px-4 sm:px-6 text-white">
        <div className="max-w-4xl">
          {/* Welcome Text */}
          <Animation direction="up" delay={200}>
            <p className="text-lg sm:text-xl mb-4">
              Welcome to{" "}
              <span className="text-[#e94c89] font-semibold">
                {site.name}
              </span>
            </p>
          </Animation>

          {/* Main Headline */}
          <Animation direction="left" delay={300}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-light leading-tight">
              {site.tagline}
            </h1>
          </Animation>

          {/* Highlight */}
          <Animation direction="right" delay={400}>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#e94c89]  mt-3">
              {site.highlight}
            </h2>
          </Animation>

          {/* Description */}
          <Animation direction="up" delay={500}>
            <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
              {site.description}
            </p>
          </Animation>

          {/* CTA Buttons */}
          <Animation direction="up" delay={600}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <FormTrigger className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm tracking-wider font-semibold transition duration-300">
                GET A QUOTE
              </FormTrigger>

              <button className="w-full sm:w-auto border border-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm tracking-wider font-semibold hover:bg-white hover:text-black transition duration-300">
                GET FREE AUDIT
              </button>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}