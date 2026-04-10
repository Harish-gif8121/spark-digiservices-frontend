import Image from "next/image";

export default function ClientsSection() {
  const data = {
    title: "Our Clients",
    subtitle:
      "We are proud to work with these amazing brands, delivering innovative solutions and driving growth across industries.",
    clients: [
      { name: "Anuhar Homes", logo: "/clients/anuhar.png" },
      { name: "Creya", logo: "/clients/creya.png" },
      { name: "Zealous", logo: "/clients/zealous.png" },
      { name: "Global Edge School", logo: "/clients/global.png" },
      { name: "Virtusa Life Spaces", logo: "/clients/virtusa.png" },
      { name: "Ayathi", logo: "/clients/ayathi.png" },
      { name: "Shourya Convention", logo: "/clients/shourya.png" },
      { name: "Sampangi", logo: "/clients/sampangi.png" },
      { name: "Pinnacle Generators", logo: "/clients/pinnacle.png" },
      { name: "Vasudha Harmony", logo: "/clients/vasudha.png" },
      { name: "Chandra Groups", logo: "/clients/chandra.png" },
      { name: "EyeCure Hospital", logo: "/clients/eyecure.png" }
    ]
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-3">
          Our <span className="text-[#e94c89]">Clients</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          {data.subtitle}
        </p>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data.clients.map((client, index) => (
            <div
              key={index}
              className="group bg-[#0f0f0f] rounded-xl p-6 flex items-center justify-center
              border border-gray-800 hover:border-[#e94c89] transition duration-300 hover:shadow-lg hover:shadow-[#e94c89]/20"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}