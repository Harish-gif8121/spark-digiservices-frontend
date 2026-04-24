"use client";

export default function ThankYou() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* 🌌 Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/043/536/162/small/gleaming-starry-background-with-blue-night-sky-and-mountain-silhouette-photo.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ✨ Stars + Shooting Stars */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* 🌌 Twinkling small stars */}
        <div className="twinkle"></div>

        {/* 🌠 Shooting Stars */}
        <span className="meteor"></span>
        <span className="meteor delay-2"></span>
        <span className="meteor delay-4"></span>
        <span className="meteor delay-6"></span>
      </div>

      {/* 💎 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="tracking-[4px] text-sm md:text-lg mb-6 opacity-80 animate-fadeIn">
          SPARK DIGI SERVICES
        </p>

        <h1 className="text-4xl md:text-7xl font-light animate-fadeUp">
          Thank You
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-80 animate-fadeUp delay-300">
          We’ll get back to you shortly
        </p>

        <a
          href="/"
          className="mt-8 px-6 py-2 border border-white/40 hover:bg-white hover:text-black transition animate-fadeUp delay-500"
        >
          Back to Home
        </a>
      </div>

      {/* 🎨 Styles */}
      <style jsx>{`
        /* ✨ Fade Animations */
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
        }

        .animate-fadeUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1.2s ease forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 🌠 Shooting Stars */
        .shooting-star {
          position: absolute;
          top: 20%;
          left: -10%;
          width: 150px;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          opacity: 0;
          animation: shoot 6s linear infinite;
        }

        .delay-2 {
          animation-delay: 2s;
        }
        .delay-4 {
          animation-delay: 4s;
        }

        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(40vh);
            opacity: 0;
          }
        }

        .twinkle {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(1.5px 1.5px at 70% 60%, white, transparent),
            radial-gradient(2px 2px at 40% 80%, white, transparent),
            radial-gradient(1px 1px at 90% 20%, white, transparent);
          animation: twinkle 4s infinite alternate;
          opacity: 0.6;
        }

        @keyframes twinkle {
          from {
            opacity: 0.3;
          }
          to {
            opacity: 0.8;
          }
        }

        /* 🌠 Meteor (realistic shooting star) */
        .meteor {
          position: absolute;
          top: 10%;
          left: -10%;
          width: 300px;
          height: 3px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
          );
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0;

          animation: meteorMove 5s linear infinite;
        }

        /* random delays */
        .delay-2 {
          animation-delay: 2s;
          top: 30%;
        }
        .delay-4 {
          animation-delay: 4s;
          top: 60%;
        }
        .delay-6 {
          animation-delay: 6s;
          top: 80%;
        }

        /* realistic diagonal movement */
        @keyframes meteorMove {
          0% {
            transform: translateX(0) translateY(0) rotate(25deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(60vh) rotate(25deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
