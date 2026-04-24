import Link from "next/link";
import {
  FaBuilding,
  FaHeartbeat,
  FaShoppingCart,
  FaStore,
  FaPaintBrush,
  FaTruck,
  FaGraduationCap,
} from "react-icons/fa";

export default function IndustriesSection({ data }) {
  const industries = data?.industries || data;

  const iconMap = {
    building: <FaBuilding size={24} />,
    health: <FaHeartbeat size={24} />,
    cart: <FaShoppingCart size={24} />,
    store: <FaStore size={24} />,
    design: <FaPaintBrush size={24} />,
    truck: <FaTruck size={24} />,
    education: <FaGraduationCap size={24} />,
    finance: <FaBuilding size={24} />,
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-3xl opacity-30 rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Tag */}
        <p className="text-blue-500 font-semibold mb-3 tracking-widest uppercase text-sm">
          {industries.tag}
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {industries.title.split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            {industries.title.split(" ")[1]}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          {industries.subtitle}
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.items.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-blue-100 to-transparent hover:from-blue-500 hover:to-indigo-500 transition duration-300"
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center text-center shadow-sm group-hover:shadow-xl transition duration-300">
                {/* Icon */}
                <div
                  className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl 
                bg-blue-50 text-blue-500 
                group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 
                group-hover:text-white transition duration-300 shadow-sm group-hover:shadow-md"
                >
                  {iconMap[item.icon]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <Link href="/contact">
                  <span className="text-sm font-semibold text-blue-500 group-hover:text-indigo-600 transition flex items-center gap-1">
                    Learn More →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
