import {
  FaBuilding,
  FaHeartbeat,
  FaShoppingCart,
  FaStore,
  FaPaintBrush,
  FaTruck,
  FaGraduationCap
} from "react-icons/fa";

export default function IndustriesSection({ data }) {
  const industries = data?.industries || data ;

  const iconMap = {
    building: <FaBuilding size={26} />,
    health: <FaHeartbeat size={26} />,
    cart: <FaShoppingCart size={26} />,
    store: <FaStore size={26} />,
    design: <FaPaintBrush size={26} />,
    truck: <FaTruck size={26} />,
    education: <FaGraduationCap size={26} />
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <p className="text-[#e94c89] font-semibold mb-2 tracking-wide">
          {industries.tag}
        </p>

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          {industries.title.split(" ")[0]}{" "}
          <span className="text-[#e94c89]">
            {industries.title.split(" ")[1]}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          {industries.subtitle}
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 
              shadow-sm hover:shadow-lg hover:-translate-y-1 
              transition duration-300 group"
            >

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center 
              bg-pink-50 rounded-xl text-[#e94c89]
              group-hover:bg-[#e94c89] group-hover:text-white transition">
                {iconMap[item.icon]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-5">
                {item.description}
              </p>

              {/* Button */}
              <button
                className="px-5 py-2 rounded-lg bg-pink-50 text-[#e94c89] font-medium
                hover:bg-[#e94c89] hover:text-white transition duration-300"
              >
                Learn More
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}