"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Briefcase, TrendingUp, Star, ArrowUpRight, Sparkles } from "lucide-react";

/* ---------------- ICON MAP ---------------- */
const iconMap = {
  "Happy Clients": Users,
  "Projects Done": Briefcase,
  "Growth Rate": TrendingUp,
  "Client Rating": Star,
};

/* ---------------- COUNT UP HOOK ---------------- */
function useCountUp(end, startAnimation, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime = null;
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(Math.floor((progress / duration) * end), end);
      setCount(value);
      if (progress < duration) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, startAnimation]);

  return count;
}

/* ---------------- COLOR THEMES ---------------- */
const colorMap = {
  purple: {
    bg: "bg-violet-50",
    iconBg: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    text: "text-violet-600",
    bar: "from-violet-500 to-fuchsia-500",
    glow: "shadow-violet-200/60",
    ring: "hover:ring-violet-200",
  },
  teal: {
    bg: "bg-emerald-50",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
    text: "text-emerald-600",
    bar: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-200/60",
    ring: "hover:ring-emerald-200",
  },
  pink: {
    bg: "bg-rose-50",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
    text: "text-rose-600",
    bar: "from-rose-500 to-pink-500",
    glow: "shadow-rose-200/60",
    ring: "hover:ring-rose-200",
  },
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    text: "text-amber-600",
    bar: "from-amber-500 to-orange-500",
    glow: "shadow-amber-200/60",
    ring: "hover:ring-amber-200",
  },
};

/* ---------------- STAT CARD ---------------- */
function StatCard({ label, value, suffix, color, trend, startAnimation }) {
  const count = useCountUp(value, startAnimation);
  const Icon = iconMap[label] ?? Users;
  const theme = colorMap[color] ?? colorMap.purple;

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 ${theme.ring} shadow-md ${theme.glow} hover:shadow-xl p-5 transition-all duration-300 hover:-translate-y-1 antialiased`}
    >
      {/* Soft corner glow */}
      <div
        className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${theme.iconBg} opacity-10 blur-2xl group-hover:opacity-25 transition`}
      />

      {/* Top gradient accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${theme.bar}`}
      />

      {/* Icon */}
      <div
        className={`relative z-10 w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
      >
        <Icon className="text-white" size={18} />
      </div>

      {/* Value */}
      <div className="relative z-10 flex items-end gap-1 mt-4">
        <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-none [text-rendering:geometricPrecision]">
          {count}
        </span>
        <span className={`text-lg md:text-xl font-bold mb-1 ${theme.text}`}>
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="relative z-10 text-[10px] text-gray-500 uppercase tracking-wider mt-2 font-medium">
        {label}
      </p>

      {/* Trend */}
      {trend && (
        <span
          className={`relative z-10 inline-flex items-center gap-1 mt-3 px-2 py-1 rounded-full text-[10px] font-semibold ${theme.bg} ${theme.text}`}
        >
          <ArrowUpRight size={10} />
          {trend}
        </span>
      )}

      {/* Bottom line */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-1/2 rounded-bl-2xl bg-gradient-to-r ${theme.bar} opacity-70`}
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
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
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
      className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Colorful background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT: STATS */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
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

        {/* RIGHT: WHY CHOOSE */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-violet-200 shadow-sm text-xs font-semibold text-violet-600 mb-5">
            <Sparkles className="w-4 h-4" />
            {section?.tag || "Why Choose Us"}
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 tracking-tight">
            {section?.title}{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {section?.highlight}
            </span>
          </h2>

          <p className="text-gray-600 mt-4 mb-8 max-w-lg leading-relaxed">
            {section?.subtitle}
          </p>

          <div className="space-y-5">
            {section?.items?.map((item, index) => (
              <div
                key={index}
                className="group flex gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md hover:ring-1 hover:ring-gray-100 transition-all duration-300"
              >
                <div
                  className="min-w-[44px] h-[44px] flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-bold text-sm 
                  shadow-md shadow-violet-200/60 group-hover:scale-110 group-hover:rotate-3 
                  transition-transform duration-300"
                >
                  {item.number}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
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