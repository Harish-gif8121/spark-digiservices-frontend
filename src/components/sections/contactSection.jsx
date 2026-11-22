import site from "@/data/site.json";
import { Phone, Mail, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

export default function ContactSection() {
  const contact = site.contact;

  return (
    <section className="relative w-full bg-white text-black overflow-hidden">
      {/* Soft colorful background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-violet-200/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-white border border-violet-200 shadow-sm text-[10px] sm:text-xs font-semibold text-violet-600 mb-4 sm:mb-5">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {contact.tagline || "Get in Touch"}
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
            LET'S WORK
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text text-transparentbg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              TOGETHER
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-4 sm:mt-6 max-w-lg mx-auto px-2">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        {/* Grid — stacks on mobile, 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          {/* Left Content — info card */}
          <div className="relative rounded-2xl bg-white ring-1 ring-gray-100 shadow-lg shadow-gray-200/40 p-5 sm:p-6 md:p-8 antialiased overflow-hidden">
            {/* Gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 shrink-0" />
              Sparkdigi Services
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3 max-w-md">
              {contact.description}
            </p>

            {/* Contact methods */}
            <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
              {/* Phone */}
              <a
                href={`tel:${contact.phone}`}
                className="group flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-violet-50 hover:to-pink-50 ring-1 ring-transparent hover:ring-violet-100 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md shadow-violet-200/60 group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Phone
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
                    {contact.phone}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-gray-300 group-hover:text-violet-500 group-hover:rotate-45 transition-all shrink-0"
                />
              </a>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-rose-50 hover:to-orange-50 ring-1 ring-transparent hover:ring-rose-100 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-white shadow-md shadow-rose-200/60 group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Email
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
                    {contact.email}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-gray-300 group-hover:text-rose-500 group-hover:rotate-45 transition-all shrink-0"
                />
              </a>

              {/* Address (only if present) */}
              {contact.address && (
                <div className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-gray-50 ring-1 ring-transparent">
                  <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-200/60 shrink-0">
                    <MapPin size={15} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">
                      {contact.address}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Map card — fixed height on mobile so it doesn't collapse */}
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-lg shadow-gray-200/40 group w-full">
            {/* Gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 z-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

            <iframe
              src={contact.mapEmbed}
              width="100%"
              height="320"
              loading="lazy"
              title="Office location"
              className="w-full h-[280px] sm:h-[320px] md:h-full md:min-h-[360px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 block"
              style={{ border: 0 }}
            />

            {/* Floating badge */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-md text-[10px] sm:text-xs font-semibold text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Visit our office
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}