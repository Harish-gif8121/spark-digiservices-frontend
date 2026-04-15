export default function ServiceHero({ service }) {
  if (!service) return null;

  const words = service.heroTitle?.split(" ") || [];
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <section className="relative w-full h-[260px] md:h-[500px] flex items-center justify-center text-white overflow-hidden">
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
      {/* <div className="absolute inset-0 bg-black/90" /> */}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-light">
          {firstWord}{" "}
          <span className="text-[#e94c89] font-bold">{restWords}</span>
        </h1>

        {/* Breadcrumbs */}
        <p className="mt-3 text-sm text-gray-300">
          <a href="/" className="hover:text-white">
            Home
          </a>

          <span className="mx-2">•</span>

          <a href="/services" className="hover:text-white">
            Services
          </a>

          <span className="mx-2">•</span>

          <span className="text-[#e94c89]">{service.heroTitle}</span>
        </p>

        {/* Description */}
        {service.heroDescription && (
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            {service.heroDescription}
          </p>
        )}
      </div>
    </section>
  );
}
