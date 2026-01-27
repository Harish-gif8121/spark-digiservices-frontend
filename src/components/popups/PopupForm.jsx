"use client";

import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function PopupForm({ open, onClose }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const toastId = toast.loading("Submitting...");

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
        }),
      });

      if (!res.ok) throw new Error();

      toast.success("Submitted successfully!", { id: toastId });
      onClose();
    } catch {
      toast.error("Submission failed", { id: toastId });
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-96 h-full bg-white p-6 shadow-xl"
        >
          <button onClick={onClose}>Close</button>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input name="name" required className="border p-2 w-full" />
            <input name="email" required className="border p-2 w-full" />
            <button className="bg-black text-white px-4 py-2">
              Submit
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
