export default function ServicesMarquee() {
  const services = [
    "Website Development",
    "App Development",
    "Performance Analytics",
    "Brand Identity Creation",
    "E-commerce Solutions",
    "Custom Web Solutions",
  ];

  const items = [...services, ...services]; 

  return (
    <section className="services-marquee">
      <div className="marquee-track">
        {items.map((service, index) => (
          <span key={index} className="marquee-item">
            {service}
            <span className="divider">✱</span>
          </span>
        ))}
      </div>
    </section>
  );
}