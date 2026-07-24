"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PopupModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      
      {/* Popup Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_10px_40px_rgba(0,0,0,0.4)] animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-red-500"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Image */}
        <div className="relative h-[470px] w-full">
          <Image
            src="/award.png"
            alt="Popup Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}