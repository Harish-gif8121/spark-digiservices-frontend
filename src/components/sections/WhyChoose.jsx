import Image from "next/image";
import Animation from "@/components/ui/Animation"; 

export default function WhyChoose({ data }) {
  const section = data?.whyChoose;

  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* ---------- BG EFFECTS ---------- */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e94c89]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* ---------- LEFT CONTENT ---------- */}
        <div>

          <Animation>
            <p className="text-[#e94c89] text-sm font-semibold tracking-wider uppercase mb-3">
              {section?.tag}
            </p>
          </Animation>

          <Animation delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              {section?.title}{" "}
              <span className="text-[#e94c89]">
                {section?.highlight}
              </span>
            </h2>
          </Animation>

          <Animation delay={200}>
            <p className="text-gray-600 mt-4 mb-8 max-w-lg">
              {section?.subtitle}
            </p>
          </Animation>

          {/* ---------- ITEMS ---------- */}
          <div className="space-y-6">
            {section?.items?.map((item, index) => (
              <Animation key={index} delay={index * 150} direction="up">
                <div className="flex gap-4 group">

                  {/* NUMBER */}
                  <div className="text-[#e94c89] font-bold text-xl min-w-[40px]">
                    {item.number}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-[#e94c89] transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </Animation>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <Animation direction="right" delay={300}>
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={section?.image || "https://thumbs.dreamstime.com/b/two-happy-busy-female-employees-working-together-using-computer-planning-project-middle-aged-professional-business-woman-308661106.jpg"}
              alt="Why Choose Us"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Animation>

      </div>
    </section>
  );
}