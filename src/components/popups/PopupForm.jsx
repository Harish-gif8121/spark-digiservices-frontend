"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// 👇 Services source of truth — edit data/services.json to update the dropdown
import servicesData from "@/data/services.json";

export default function PopupForm({ open, onClose, source, data }) {
  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const title = data?.title || "Get Your Free Quote";

  // WhatsApp receiver — change here if needed
  const WHATSAPP_NUMBER = "917995508708";

  // =========================================
  // MOUNT
  // =========================================
  useEffect(() => {
    setMounted(true);
  }, []);

  // =========================================
  // PREVENT BACKGROUND SCROLL
  // =========================================
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!mounted) return null;

  // =========================================
  // VALIDATION
  // =========================================
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (!/^[A-Za-z\s]+$/.test(value)) return "Only letters allowed";
        if (value.length < 3) return "Minimum 3 characters";
        return "";

      case "email":
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email";
        return "";

      case "phone":
        if (!value) return "Phone is required";
        if (!/^[6-9]\d{9}$/.test(value))
          return "Must start 6-9 & be 10 digits";
        return "";

      case "company":
        if (value && value.length < 2) return "Too short";
        return "";

      case "service":
        if (!value) return "Select a service";
        return "";

      case "message":
        if (!value) return "Message required";
        if (value.length < 10) return "Minimum 10 characters";
        return "";

      default:
        return "";
    }
  };

  // =========================================
  // INPUT CHANGE
  // =========================================
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Phone: digits only, max 10
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    // Name: letters and spaces only
    if (name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    e.target.value = value;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // =========================================
  // INPUT BLUR
  // =========================================
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // =========================================
  // FORM SUBMIT — WhatsApp Redirect
  // =========================================
  function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;

    // =======================================
    // GET FORM DATA
    // =======================================
    const leadData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      company: form.company.value.trim(),
      service: form.service.value,
      message: form.message.value.trim(),
      source: source || "unknown",
    };

    // =======================================
    // VALIDATE ALL FIELDS
    // =======================================
    const newErrors = {};
    Object.keys(leadData).forEach((key) => {
      const err = validateField(key, leadData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Fix errors before submitting");
      return;
    }

    // =======================================
    // BUILD WHATSAPP MESSAGE
    // =======================================
    const text =
      `🚨 *New Website Lead*\n\n` +
      `👤 *Name:* ${leadData.name}\n` +
      `📱 *Phone:* ${leadData.phone}\n` +
      `📧 *Email:* ${leadData.email}\n` +
      `🏢 *Company:* ${leadData.company || "Not provided"}\n` +
      `🛠 *Service:* ${leadData.service || "Not selected"}\n` +
      `💬 *Message:* ${leadData.message}\n\n` +
      `🌐 *Source:* ${leadData.source}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    // =======================================
    // OPEN WHATSAPP (synchronous — not blocked)
    // =======================================
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // =======================================
    // SUCCESS UX
    // =======================================
    toast.success("Opening WhatsApp — hit Send there to deliver your message.");

    form.reset();
    setErrors({});
    onClose();
    router.push("/thank-you");
  }

  // =========================================
  // UI
  // =========================================
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999999] bg-black/20 backdrop-blur-sm flex items-center justify-center px-3 py-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative max-h-[92vh] overflow-y-auto"
          >
            {/* =================================
                CLOSE BUTTON
            ================================= */}
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              aria-label="Close"
              className="absolute right-4 top-3 text-gray-400 hover:text-black text-lg disabled:opacity-50"
            >
              ✕
            </button>

            {/* =================================
                TITLE
            ================================= */}
            <h2 className="text-xl font-semibold text-center text-[#2b5c9a] mb-5">
              {title}
            </h2>

            {/* =================================
                FORM
            ================================= */}
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* ===============================
                  NAME
              =============================== */}
              <div className="relative">
                <input
                  name="name"
                  placeholder=" "
                  autoComplete="name"
                  disabled={submitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm transition ${errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                />
                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Name <span className="text-red-500">*</span>
                </label>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* ===============================
                  EMAIL
              =============================== */}
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  placeholder=" "
                  autoComplete="email"
                  disabled={submitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm transition ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                />
                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Email <span className="text-red-500">*</span>
                </label>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* ===============================
                  PHONE
              =============================== */}
              <div className="relative">
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder=" "
                  autoComplete="tel"
                  disabled={submitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm transition ${errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                />
                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Phone <span className="text-red-500">*</span>
                </label>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* ===============================
                  COMPANY
              =============================== */}
              <div className="relative">
                <input
                  name="company"
                  placeholder=" "
                  autoComplete="organization"
                  disabled={submitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm transition ${errors.company ? "border-red-500" : "border-gray-300"
                    }`}
                />
                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Company
                </label>
                {errors.company && (
                  <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                )}
              </div>

              {/* ===============================
                  SERVICE — DYNAMIC FROM services.json
              =============================== */}
              <div className="relative">
                <select
                  name="service"
                  defaultValue=""
                  disabled={submitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border px-3 py-2 pr-8 rounded-md text-sm bg-white appearance-none outline-none transition focus:border-[#e94c89] focus:ring-2 focus:ring-pink-100 ${errors.service ? "border-red-500" : "border-gray-300"
                    }`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23e94c89' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 10px center",
                  }}
                >
                  <option value="">Select Service *</option>
                  {servicesData.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-xs text-red-500 mt-1">{errors.service}</p>
                )}
              </div>

              {/* ===============================
                  MESSAGE
              =============================== */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="2"
                  placeholder=" "
                  disabled={submitting}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border px-3 py-2 rounded-md text-sm transition ${errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                />
                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Message <span className="text-red-500">*</span>
                </label>
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* ===============================
                  SUBMIT BUTTON
              =============================== */}
              <button
                type="submit"
                disabled={submitting}
                className={`w-full text-white py-2.5 rounded-md text-sm font-medium transition ${submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#e94c89] hover:bg-[#781139]"
                  }`}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}