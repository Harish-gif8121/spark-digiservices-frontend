export default function ServicesMarquee() {
  const services = [
    "Logo Design",
    "Search Engine Optimization (SEO)",
    "Social Media Marketing",
    "Google Ads",
    "Google My Business (Local SEO)",
    "Website Development & Design",
    "Mobile App Development",
    "Trademark Registration",
    "Email Marketing",
    "WhatsApp Marketing",
  ];

  const items = [...services, ...services]; // duplicate for smooth loop

  return (
    <section className="services-marquee bg-gray-800 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {items.map((service, index) => (
          <span
            key={index}
            className="marquee-item mx-4 gap-10 text-white text-sm md:text-base flex items-center gap-2"
          >
            {service}

            <span className="text-[#e94c89] ">✱</span>
          </span>
        ))}
      </div>
    </section>
  );
}