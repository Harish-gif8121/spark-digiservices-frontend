import site from "@/data/site.json";

export default function ContactSection() {
  const contact = site.contact;

  return (
    <section className="relative w-full bg-white text-black overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Heading */}
        <div className="text-center mb-24 relative">
          <p className="text-sm tracking-widest mb-4 text-gray-500">
            {contact.tagline}
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            LET'S WORK
            <br />
            <span className="text-[#e94c89]">TOGETHER</span>
          </h2>

          {/* Floating Button */}
          <button className="absolute left-1/2 -translate-x-1/2 top-20 w-28 h-28 rounded-full bg-[#e94c89] text-white flex items-center justify-center text-sm font-medium shadow-lg hover:scale-110 transition">
            Get In Touch
          </button>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#e94c89]">
              Sparkdigi Services
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-md">
              {contact.description}
            </p>

            <div className="space-y-3 pt-4 text-gray-700">

              <p className="flex items-center gap-3">
                <span className="text-[#e94c89] text-lg">📞</span>
                {contact.phone}
              </p>

              <p className="flex items-center gap-3">
                <span className="text-[#e94c89] text-lg">✉️</span>
                {contact.email}
              </p>

            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
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