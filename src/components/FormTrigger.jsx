"use client";

import { useState } from "react";
import PopupForm from "./popups/PopupForm";

export default function FormTrigger() {
  const [open, setOpen] = useState(false); 

  return (
    <>
      <button onClick={() => setOpen(true)}  className="inline-block bg-[#0069fb] hover:bg-[#09336f] text-white px-10 py-4 rounded-full text-sm tracking-wider font-semibold transition duration-300"
            >
             
        Get Quote
      </button>
      <PopupForm open={open} onClose={() => setOpen(false)} />
    </>
  );
}
