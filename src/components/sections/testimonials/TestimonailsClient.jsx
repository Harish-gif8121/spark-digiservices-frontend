"use client";

import { useState, useEffect } from "react";
import site from "@/data/site.json";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const { rating, reviewsCount, reviews } = site.testimonials;

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const review = reviews[index];

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">

      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT RATING CARD */}

        <div className="bg-[#0b0b0b] border border-neutral-800 rounded-3xl p-12 text-center w-[360px]">

          <h2 className="text-6xl font-bold">{rating}</h2>

          <div className="text-red-500 text-xl my-3">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-400">
            ({reviewsCount}+ Reviews)
          </p>

          <p className="mt-6 text-lg text-gray-300">
            Customer experiences that speak for themselves
          </p>

          <div className="flex justify-center mt-6 -space-x-3">
            <Image src="/avatars/user1.jpg" width={36} height={36} className="rounded-full border-2 border-black" alt="" />
            <Image src="/avatars/user2.jpg" width={36} height={36} className="rounded-full border-2 border-black" alt="" />
            <Image src="/avatars/user3.jpg" width={36} height={36} className="rounded-full border-2 border-black" alt="" />
            <Image src="/avatars/user4.jpg" width={36} height={36} className="rounded-full border-2 border-black" alt="" />
          </div>

        </div>

        {/* RIGHT REVIEW SLIDER */}

        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >

              <h4 className="text-green-400 mb-2">
                {review.company}
              </h4>

              <div className="text-red-500 mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-lg text-gray-200 leading-relaxed">
                {review.review}
              </p>

              <div className="flex items-center gap-4 mt-8">

                <Image
                  src={review.image}
                  width={50}
                  height={50}
                  alt={review.author}
                  className="rounded-full"
                />

                <div>
                  <h4 className="font-semibold">{review.author}</h4>
                  <p className="text-gray-400 text-sm">
                    {review.designation}
                  </p>
                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* ARROWS */}

          <div className="flex gap-4 mt-28 relative z-10 top-20 justify-end">

            <button
              onClick={prev}
              className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 transition"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={next}
              className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 transition"
            >
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </div>

      {/* RIGHT GRADIENT */}

      <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-red-900/40 to-transparent pointer-events-none"></div>

    </section>
  );
}