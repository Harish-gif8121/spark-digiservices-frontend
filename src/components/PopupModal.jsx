"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PopupModal() {
  const [open, setOpen] = useState(true);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 animate-[fadeIn_300ms_ease-out]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Promotional popup"
    >
      {/* Popup Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md sm:max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/20 animate-[zoomIn_300ms_ease-out]"
        style={{ maxHeight: "calc(100dvh - 2rem)" }}
      >
        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute right-3 top-3 sm:right-4 sm:top-4 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:border-red-500 active:scale-95"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Image — responsive height */}
        <div className="relative w-full h-[380px] xs:h-[420px] sm:h-[500px] md:h-[540px]">
          <Image
            src="/award.png"
            alt="Promotional banner"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-contain sm:object-cover"
          />
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.92) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}