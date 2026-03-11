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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // ✅ outside click closes
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // ✅ prevent inside click close
            className="relative bg-white w-[90%] max-w-md rounded-lg p-6 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black hover:text-black text-sm"
            >
              ✕
            </button>

            <h2 className="text-lg text-blue-500 font-semibold">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Name"
                className="border border-amber-500 rounded-md text-black p-2 w-full focus:outline-none focus:ring-2"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="border  border-amber-500 text-black rounded-md p-2 w-full focus:outline-none focus:ring-2"
              />

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 w-full rounded-md hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}