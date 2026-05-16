

import Breadcrumbs from "../../components/layout/BreadCrumbs";

export default function ServiceHero({
  title,
  description,
  breadcrumbs = [],
}) {
  if (!title) return null;

  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <section className="relative w-full h-[260px] md:h-[500px] flex items-center justify-center text-white overflow-hidden">
      
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/spark.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 pt-24 py-10 md:pt-0 md:py-0">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-light">
          {firstWord}{" "}
          <span className="text-[#e94c89] font-bold">
            {restWords}
          </span>
        </h1>

        {/* ✅ REUSABLE BREADCRUMBS */}
        <Breadcrumbs items={breadcrumbs} />

        {/* DESCRIPTION */}
        {description && (
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}