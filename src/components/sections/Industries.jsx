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
        description: "Secure solutions for smarter financial services.",
        icon: "building",
        gradient: "from-violet-500 to-fuchsia-500",
        iconBg: "bg-violet-50",
        iconColor: "text-violet-600",
      },
      {
        name: "Healthcare",
        description: "Enhancing care through digital innovation.",
        icon: "truck",
        gradient: "from-emerald-500 to-teal-500",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
      },
      {
        name: "Retail",
        description: "Creating seamless and engaging shopping experiences.",
        icon: "store",
        gradient: "from-blue-500 to-indigo-500",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        name: "Automobile",
        description: "Driving innovation across the mobility ecosystem.",
        icon: "cart",
        gradient: "from-orange-500 to-amber-500",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-600",
      },
      {
        name: "Education",
        description: "Empowering modern learning experiences.",
        icon: "education",
        gradient: "from-rose-500 to-pink-500",
        iconBg: "bg-rose-50",
        iconColor: "text-rose-600",
      },
      {
        name: "Agriculture",
        description: "Advancing farming with smart technology.",
        icon: "design",
        gradient: "from-green-500 to-emerald-500",
        iconBg: "bg-green-50",
        iconColor: "text-green-600",
      },
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
  const [active, setActive] = useState(2);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2500);
    return () => clearInterval(interval);
  }, [total]);

  const getPosition = (index) => {
    let diff = index - active;
    const half = total / 2;
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;

    if (isDesktop) {
      if (diff === 0) return "center";
      if (diff === -1) return "left";
      if (diff === 1) return "right";
      if (diff === -2) return "farLeft";
      if (diff === 2) return "farRight";
      return "hidden";
    } else {
      if (diff === 0) return "center";
      if (diff === -1) return "left";
      if (diff === 1) return "right";
      return "hidden";
    }
  };

  const getStyles = (pos) => {
    if (isDesktop) {
      switch (pos) {
        case "center":
          return "z-30 translate-x-0 scale-100 opacity-100 w-[280px] h-[220px]";
        case "left":
          return "z-20 -translate-x-[320px] scale-95 opacity-90 w-[260px] h-[200px]";
        case "right":
          return "z-20 translate-x-[320px] scale-95 opacity-90 w-[260px] h-[200px]";
        case "farLeft":
          return "z-10 -translate-x-[620px] scale-90 opacity-50 w-[240px] h-[180px]";
        case "farRight":
          return "z-10 translate-x-[620px] scale-90 opacity-50 w-[240px] h-[180px]";
        default:
          return "hidden";
      }
    } else {
      switch (pos) {
        case "center":
          return "z-30 translate-x-0 scale-100 opacity-100 w-[240px] h-[190px]";
        case "left":
          return "z-20 -translate-x-[200px] scale-95 opacity-85 w-[220px] h-[175px]";
        case "right":
          return "z-20 translate-x-[200px] scale-95 opacity-85 w-[220px] h-[175px]";
        default:
          return "hidden";
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 overflow-hidden">
      {/* Soft colorful blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-violet-200 shadow-sm text-xs font-semibold text-violet-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            Industries We Serve
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {industries.title}
          </h2>

          <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xl mx-auto">
            {industries.subtitle}
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative flex justify-center items-center h-[300px] md:h-[320px] w-full overflow-hidden">
          {itemsList.map((item, index) => {
            const pos = getPosition(index);
            if (pos === "hidden") return null;

            const isCenter = pos === "center";

            return (
              <div
                key={index}
                className={`
                  absolute transition-all duration-700 ease-in-out
                  bg-white rounded-2xl flex flex-col justify-center items-center
                  antialiased
                  ${getStyles(pos)}
                  ${
                    isCenter
                      ? "shadow-2xl ring-2 ring-gray-900/5"
                      : "shadow-md ring-1 ring-gray-100"
                  }
                `}
              >
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${item.gradient}`}
                />

                {/* Soft corner glow — only on center */}
                {isCenter && (
                  <div
                    className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl`}
                  />
                )}

                {/* Icon chip */}
                <div
                  className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} mb-3 transition-transform duration-300 ${
                    isCenter ? "scale-110 shadow-sm" : ""
                  }`}
                >
                  {iconMap[item.icon]}
                </div>

                {/* Title */}
                <h3
                  className={`relative z-10 font-bold text-center leading-tight transition-colors duration-300 ${
                    isCenter
                      ? "text-gray-900 text-xl md:text-2xl"
                      : "text-gray-700 text-base md:text-lg"
                  }`}
                >
                  {item.name}
                </h3>

                {/* Description */}
                <p
                  className={`relative z-10 text-center px-3 leading-relaxed mt-1.5 transition-colors duration-300 ${
                    isCenter ? "text-gray-500 text-xs md:text-sm" : "text-gray-400 text-[11px]"
                  }`}
                >
                  {item.description}
                </p>

                {/* Bottom accent line — center only */}
                {isCenter && (
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-full bg-gradient-to-r ${item.gradient}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {itemsList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-gradient-to-r from-violet-500 to-pink-500"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}