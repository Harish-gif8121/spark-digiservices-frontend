import Image from "next/image";

export default function DynamicSection({ data }) {
  if (!data || !data.points?.length) return null;

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT - CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            {data.title}
          </h2>

          {/* Subtitle */}
          {data.subtitle && (
            <p className="text-gray-600 mb-10 max-w-lg">{data.subtitle}</p>
          )}

          {/* Points List */}
          <ul className="space-y-5">
            {data.points.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* Simple Icon */}
                <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">
                  ✓
                </div>

                {/* Text */}
                <p className="text-gray-700 text-[15px] leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - STATIC IMAGE */}
        <div className="relative w-full h-[350px] lg:h-[420px]">
          <Image
            src={
              data.image ||
              "https://www.specbee.com/sites/default/files/inline-images/Drupal9-Custom-module.png"
            } // static or dynamic
            alt={data.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
