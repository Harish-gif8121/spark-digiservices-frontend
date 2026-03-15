"use client";

import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { User, Mail, Phone, Building2, MessageSquare } from "lucide-react";

export default function PopupForm({ open, onClose }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const toastId = toast.loading("Submitting...");

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Submitted successfully!", { id: toastId });
      e.target.reset();
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
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-lg rounded-xl p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Get in Touch
            </h2>

            <p className="text-gray-500 mb-6 text-sm">
              Fill the form and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <User size={18} className="text-gray-400 mr-2" />
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              {/* Email */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Mail size={18} className="text-gray-400 mr-2" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Phone size={18} className="text-gray-400 mr-2" />
                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              {/* Company */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Building2 size={18} className="text-gray-400 mr-2" />
                <input
                  name="company"
                  placeholder="Company / Business Name"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              {/* Service Dropdown */}
              <select
                name="service"
                required
                className="w-full border rounded-lg px-3 py-2 text-gray-700"
              >
                <option value="">Select Service</option>
                <option>SEO</option>
                <option>Google Ads</option>
                <option>Social Media Marketing</option>
                <option>Website Development</option>
                <option>Other</option>
              </select>

              {/* Message */}
              <div className="flex border rounded-lg px-3 py-2">
                <MessageSquare size={18} className="text-gray-400 mr-2 mt-2" />
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us about your project..."
                  className="w-full outline-none text-gray-700 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}