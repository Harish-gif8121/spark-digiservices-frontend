import FormTrigger from "@/components/FormTrigger";
import site from "@/data/site.json";
import Link from "next/link";
import Animation from "@/components/ui/Animation";

export default function HomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      {/* <div className="absolute inset-0 bg-black/60" /> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center h-full px-6 text-white">
        <div className="max-w-4xl">
          <Animation direction="up" delay={200}>
          <p className="text-xl mb-4">
            Welcome to{" "}
            <span className="text-red-500 font-semibold">{site.name}</span>
          </p>
          </Animation>

          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            {site.tagline}
          </h1>

          <h2 className="text-5xl md:text-7xl font-bold text-red-500 mt-3">
            {site.highlight}
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-gray-300">
            {site.description}
          </p>

          {/* Center CTA Button */}
          <div className="mt-10">
            <FormTrigger className="inline-block bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-sm tracking-wider font-semibold transition duration-300">
              GET A QUOTE
            </FormTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}
