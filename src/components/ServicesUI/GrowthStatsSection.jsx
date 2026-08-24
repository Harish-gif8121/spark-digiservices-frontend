// components/sections/GrowthStatsSection.jsx

import Image from "next/image";
import Counter from "../../components/ui/counter";

export default function GrowthStatsSection() {
  return (
    <section className="relative text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://media.istockphoto.com/id/1444536152/photo/portrait-of-happy-business-woman-sitting-in-the-office.jpg?s=612x612&w=0&k=20&c=6u2lrNGkLBn8awKprEN5ccfMeOYKDMRXpAqSL6gwuC4="           alt="Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Growth isn't just our goal — it's the force that fuels our entire journey.
          </h2>

          {/* Accent line */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="w-12 h-[3px] bg-cyan-400"></span>
          </div>

          <p className="text-gray-300 mb-8 max-w-lg">
            Growth drives everything we do, empowering us to help brands attract and retain customers at every stage of their journey.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6">
            <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
              MAKE APPOINTMENT
            </button>

            <div>
              <p className="text-sm text-gray-400">
                GET A FREE CONSULTATION
              </p>
              <p className="text-2xl font-bold text-cyan-400">
                6300296581
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-10 border-l border-white/20 pl-10">
          
          {/* Stat 1 */}
          <div>
            <h3 className="text-5xl font-bold text-cyan-400">
              <Counter end={100} suffix="+" />
            </h3>
            <p className="text-gray-300 mt-2">Happy Customer</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-5xl font-bold text-cyan-400">
              <Counter end={10} suffix="+" />
            </h3>
            <p className="text-gray-300 mt-2">Award Winning</p>
          </div>

          {/* Divider Line */}
          <div className="col-span-2 border-t border-white/20 my-2"></div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-5xl font-bold text-cyan-400">
              <Counter end={98} suffix="%" />
            </h3>
            <p className="text-gray-300 mt-2">Satisfaction Rate</p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-5xl font-bold text-cyan-400">
              <Counter end={130} suffix="+" />
            </h3>
            <p className="text-gray-300 mt-2">Completed Projects</p>
          </div>

        </div>
      </div>
    </section>
  );
}