"use client";

import { useState } from "react";
import PopupForm from "./popups/PopupForm";

export default function FormTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="mt-6 bg-blue-600 text-white px-6 py-3">
        Get Demo
      </button>
      <PopupForm open={open} onClose={() => setOpen(false)} />
    </>
  );
}
