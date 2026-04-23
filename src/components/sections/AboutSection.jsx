import Image from "next/image";
import site from "@/data/site.json";
import { CalendarDays, Users, BadgeCheck } from "lucide-react";

const iconMap = {
  calendar: CalendarDays,
  users: Users,
  badge: BadgeCheck,
};

export default function AboutSection() {
  const { about } = site;

  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src={about.image}
            alt="About Company"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
            {about.title}
          </h2>

          <p className="mb-4 text-gray-700">
            <strong className="text-gray-900">{about.description1}</strong>
          </p>

          <p className="mb-4 text-gray-600 leading-relaxed">
            {about.description2}
          </p>

          <p className="mb-10 text-gray-900 font-semibold">
            {about.description3}
          </p>
           <p className="mb-4 text-gray-600 leading-relaxed">
            {about.description2}
          </p>

        
        </div>
      </div>
    </section>
  );
}