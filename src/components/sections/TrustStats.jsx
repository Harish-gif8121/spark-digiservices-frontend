"use client";

import { useEffect, useState, useRef } from "react";

/* ---------------- COUNT UP HOOK ---------------- */
function useCountUp(end, startAnimation, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnimation]);

  return count;
}

/* ---------------- STAT CARD ---------------- */
function StatCard({ label, value, suffix, startAnimation }) {
  const count = useCountUp(value, startAnimation);

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 text-center hover:border-yellow-500 transition duration-300">
      <h3 className="text-3xl md:text-4xl font-bold text-[#ffff]">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-400 text-sm mt-2">{label}</p>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function TrustStats({ data }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  /* -------- INTERSECTION OBSERVER -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "Happy Clients",
      value: 120,
      suffix: "+"
    },
    {
      label: "Projects Done",
      value: 500,
      suffix: "+"
    },
    {
      label: "Growth Rate",
      value: 95,
      suffix: "%"
    },
    {
      label: "Client Rating",
      value: Math.floor(data?.testimonials?.rating || 4.9),
      suffix: "/5"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 text-black">
      <div className="max-w-6xl mx-auto px-4">

        {/* ---------- STATS ---------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              startAnimation={startAnimation}
            />
          ))}
        </div>

        {/* ---------- TRUST BAR ---------- */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 text-sm tracking-wider uppercase">
            Trusted by 50+ Businesses
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            <img src="/logos/logo1.svg" alt="logo" className="h-8" />
            <img src="/logos/logo2.svg" alt="logo" className="h-8" />
            <img src="/logos/logo3.svg" alt="logo" className="h-8" />
            <img src="/logos/logo4.svg" alt="logo" className="h-8" />
            <img src="/logos/logo5.svg" alt="logo" className="h-8" />
          </div>
        </div>

      </div>
    </section>
  );
}