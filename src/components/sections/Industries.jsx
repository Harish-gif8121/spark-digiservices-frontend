"use client";

import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaHeartbeat,
  FaShoppingCart,
  FaStore,
  FaPaintBrush,
  FaTruck,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

export default function IndustriesSection() {
  const industries = {
    title: "Expertise Across Industries",
    subtitle: "Modern solutions for modern businesses.",
    items: [
      {
        name: "Finance",
        description:
          "Secure solutions for smarter financial services.",
        icon: "building",
      },
      {
        name: "Healthcare",
        description:
          " Enhancing care through digital innovation.",
        icon: "truck",
      },
      {
        name: "Retail",
        description:
          "Creating seamless and engaging shopping experiences.",
        icon: "store",
      },
      {
        name: "Automobile",
        description:
          "Driving innovation across the mobility ecosystem.",
        icon: "cart",
      },
      {
        name: "Education",
        description:" Empowering modern learning experiences.",
        icon: "education",
      },
      {
        name:"Agriculture",
        description:"Advancing farming with smart technology.",
        icon:"design",
      } 
    ],
  };

  const iconMap = {
    building: <FaBuilding size={24} />,
    health: <FaHeartbeat size={24} />,
    cart: <FaShoppingCart size={24} />,
    store: <FaStore size={24} />,
    design: <FaPaintBrush size={24} />,
    truck: <FaTruck size={24} />,
    education: <FaGraduationCap size={24} />,
    finance: <FaUniversity size={24} />,
  };

  const itemsList = industries.items;
  const total = itemsList.length;
  const [active, setActive] = useState(2); // center card index

  // Responsive: detect if desktop (>= 1024px) to show 5 cards, else 3 cards
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto rotate every 2 seconds (was 3s → faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 1500); // ⬅️ speed increased
    return () => clearInterval(interval);
  }, [total]);

  // Position mapping (circular)
  const getPosition = (index) => {
    let diff = index - active;
    const half = total / 2;
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;

    if (isDesktop) {
      // 5-card layout: show diff -2 .. 2
      if (diff === 0) return "center";
      if (diff === -1) return "left";
      if (diff === 1) return "right";
      if (diff === -2) return "farLeft";
      if (diff === 2) return "farRight";
      return "hidden";
    } else {
      // 3-card layout: only diff -1, 0, 1
      if (diff === 0) return "center";
      if (diff === -1) return "left";
      if (diff === 1) return "right";
      return "hidden";
    }
  };

  const getStyles = (pos) => {
    if (isDesktop) {
      // Desktop: increased horizontal gaps to avoid merging
      switch (pos) {
        case "center":
          return "z-30 translate-x-0 border-[10px] border-[#0f6f78] w-[270px] h-[190px]";
        case "left":
          return "z-20 -translate-x-[310px] border-[8px] border-[#b07a7a] w-[270px] h-[190px]"; // was -250
        case "right":
          return "z-20 translate-x-[310px] border-[8px] border-[#d96b6b] w-[270px] h-[190px]";  // was +250
        case "farLeft":
          return "z-10 -translate-x-[620px] opacity-60 w-[270px] h-[190px]"; // was -500
        case "farRight":
          return "z-10 translate-x-[620px] opacity-60 w-[270px] h-[190px]";  // was +500
        default:
          return "hidden";
      }
    } else {
      // Mobile/tablet: also increased gaps
      switch (pos) {
        case "center":
          return "z-30 translate-x-0 border-[8px] border-[#0f6f78] w-[230px] h-[170px]";
        case "left":
          return "z-20 -translate-x-[260px] border-[6px] border-[#b07a7a] w-[230px] h-[170px]"; // was -210
        case "right":
          return "z-20 translate-x-[260px] border-[6px] border-[#d96b6b] w-[230px] h-[170px]";  // was +210
        default:
          return "hidden";
      }
    }
  };

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headings - larger text as requested */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
            {industries.title}
          </h2>
          <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider mt-4">
            {industries.subtitle}
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative flex justify-center items-center h-[440px] md:h-[360px] w-full overflow-hidden">
          {itemsList.map((item, index) => {
            const pos = getPosition(index);
            if (pos === "hidden") return null;

            return (
              <div
                key={index}
                className={`
                  absolute transition-all duration-500 ease-in-out
                  bg-white rounded-xl p-5 flex flex-col justify-center items-center shadow-md

                  w-[260px] h-[240px] 
                  md:w-[300px] md:h-[260px] 
                  lg:w-[320px] lg:h-[280px]

                  ${getStyles(pos)}
                `}
              >
                <h3
                  className={`font-bold text-lg md:text-2xl mb-2 text-center ${
                    pos === "center" ? "text-[#0f6f78]" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </h3>

                <p className="text-gray-500 text-xs md:text-sm mb-3 text-center px-1">
                  {item.description}
                </p>

                <div className="text-gray-500 text-xl md:text-2xl">
                  {iconMap[item.icon]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}