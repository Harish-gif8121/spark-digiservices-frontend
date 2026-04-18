"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Users, Briefcase, TrendingUp, Star } from "lucide-react";

/* ---------------- ICON MAP ---------------- */
const iconMap = {
  "Happy Clients": Users,
  "Projects Done": Briefcase,
  "Growth Rate": TrendingUp,
  "Client Rating": Star,
};

/* ---------------- COUNT UP HOOK (SMOOTH) ---------------- */
function useCountUp(end, startAnimation, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * end),
        end
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);

  return count;
}

function StatCard({ label, value, suffix, color, trend, startAnimation }) {
  const count = useCountUp(value, startAnimation);
  const Icon = iconMap[label] ?? Users;

  const colorMap = {
    purple: { bg: "#EEEDFE", text: "#534AB7" },
    teal: { bg: "#E1F5EE", text: "#0F6E56" },
    pink: { bg: "#FBEAF0", text: "#993556" },
    amber: { bg: "#FAEEDA", text: "#BA7517" },
  };

  const { bg, text } = colorMap[color] ?? colorMap["purple"];

  return (
    <div className="relative group overflow-hidden rounded-xl bg-white border border-gray-100 p-4 hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-200">
      
      {/* Accent */}
      <div
        className="absolute top-0 right-0 w-1 h-1/3 rounded-tr-xl"
        style={{ background: bg }}
      />

      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
        style={{ background: bg }}
      >
        <Icon style={{ color: text }} size={16} />
      </div>

      {/* Count */}
      <div className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 leading-none">
        {count}
        <span style={{ color: text }}>{suffix}</span>
      </div>

      {/* Label */}
      <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
        {label}
      </p>

      {/* Trend */}
      {trend && (
        <span className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700">
          ↗ {trend}
        </span>
      )}

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] rounded-bl-xl"
        style={{ background: text, width: "60%" }}
      />
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function TrustCombined({ data }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  const section = data?.whyChoose;

  /* -------- INTERSECTION OBSERVER -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* -------- STATS DATA -------- */
  const stats = [
    {
      label: "Happy Clients",
      value: 120,
      suffix: "+",
      color: "purple",
      trend: "12% this quarter",
    },
    {
      label: "Projects Done",
      value: 500,
      suffix: "+",
      color: "teal",
      trend: "24 this month",
    },
    {
      label: "Growth Rate",
      value: 95,
      suffix: "%",
      color: "pink",
      trend: "YoY average",
    },
    {
      label: "Client Rating",
      value: Math.floor(data?.testimonials?.rating || 4.9),
      suffix: "/5",
      color: "amber",
      trend: "Avg across platforms",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* BG EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e94c89]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* ---------- LEFT: STATS ---------- */}
        <div>
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${index % 2 !== 0 ? "sm:mt-10" : ""}`}
              >
                <StatCard
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  color={stat.color}
                  trend={stat.trend}
                  startAnimation={startAnimation}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT: WHY CHOOSE ---------- */}
        <div>
          <p className="text-[#e94c89] text-sm font-semibold uppercase mb-3">
            {section?.tag}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {section?.title}{" "}
            <span className="text-[#e94c89]">{section?.highlight}</span>
          </h2>

          <p className="text-gray-600 mt-4 mb-8 max-w-lg">
            {section?.subtitle}
          </p>

          <div className="space-y-6">
            {section?.items?.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="text-[#e94c89] font-bold text-xl min-w-[40px]">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-lg font-semibold group-hover:text-[#e94c89] transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}