import site from "@/data/site.json";

export default function ContactSection() {
  const contact = site.contact;

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/40 to-black" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* Heading */}
        <div className="text-center mb-24 relative">
          <p className="text-sm tracking-widest mb-4 text-gray-300">
            {contact.tagline}
          </p>

          <h2 className="text-6xl md:text-8xl font-bold leading-tight">
            LET'S WORK
            <br />
            TOGETHER
          </h2>

          {/* Floating Button */}
          <button className="absolute left-1/2 -translate-x-1/2 top-24 w-28 h-28 rounded-full bg-red-600 flex items-center justify-center text-sm font-medium hover:scale-110 transition">
            Get In Touch
          </button>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#c81d3a]">
              Sparkdigi Services
            </h3>

            <p className="text-gray-300 leading-relaxed max-w-md">
              {contact.description}
            </p>

            <div className="space-y-3 pt-4">
              <p className="flex items-center gap-3">
                📞 {contact.phone}
              </p>

              <p className="flex items-center gap-3">
                ✉️ {contact.email}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src={contact.mapEmbed}
              width="100%"
              height="300"
              loading="lazy"
              className="w-full h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}