"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PopupForm from "./popups/PopupForm";

export default function FormTrigger({
  data = {},
  source,
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() =>
          setOpen(true)
        }
        className="group inline-flex items-center gap-2 bg-[#0069fb] hover:bg-[#09336f] text-white px-10 py-4 rounded-full text-sm tracking-wider font-semibold transition duration-300"
      >
        {data.title ||
          "Get in touch"}

        <ArrowRight
          size={10}
          className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>

      <PopupForm
        open={open}
        onClose={() =>
          setOpen(false)
        }
        source={source}
        data={data}
      />
    </>
  );
}