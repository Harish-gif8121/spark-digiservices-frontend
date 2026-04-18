"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function PopupForm({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!mounted) return null;

  // ✅ Validation (UNCHANGED)
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

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    e.target.value = value;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      services: form.service.value,
      message: form.message.value,
    };

    let newErrors = {};
    Object.keys(data).forEach((key) => {
      const err = validateField(key, data[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Fix errors before submitting");
      return;
    }

    const toastId = toast.loading("Submitting...");

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          phone_number: data.phone,
        }),
      });

      if (!res.ok) throw new Error();

      toast.success("Form Submitted successfully!", { id: toastId });
      onClose();
      router.push("/thank-you");
    } catch {
      toast.error("Something went wrong", { id: toastId });
    }
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999999] bg-black/20 backdrop-blur-sm flex items-center justify-center px-3"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-3 text-gray-400 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold text-center text-[#2b5c9a] mb-5">
              Get Your Free Quote
            </h2>

           <form onSubmit={handleSubmit} className="space-y-4 text-sm">

  {/* Name */}
  <div className="relative">
    <input
      name="name"
      placeholder=" "
      onChange={handleChange}
      onBlur={handleBlur}
      className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
        errors.name ? "border-red-500" : "border-gray-300"
      }`}
    />
    <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
      Name <span className="text-red-500">*</span>
    </label>
    {errors.name && (
      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
    )}
  </div>

  {/* Email */}
  <div className="relative">
    <input
      name="email"
      placeholder=" "
      onChange={handleChange}
      onBlur={handleBlur}
      className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
        errors.email ? "border-red-500" : "border-gray-300"
      }`}
    />
    <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
      Email <span className="text-red-500">*</span>
    </label>
    {errors.email && (
      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
    )}
  </div>

  {/* Phone */}
  <div className="relative">
    <input
      name="phone"
      placeholder=" "
      onChange={handleChange}
      onBlur={handleBlur}
      className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
        errors.phone ? "border-red-500" : "border-gray-300"
      }`}
    />
    <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
      Phone <span className="text-red-500">*</span>
    </label>
    {errors.phone && (
      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
    )}
  </div>

  {/* Company */}
  <div className="relative">
    <input
      name="company"
      placeholder=" "
      onChange={handleChange}
      onBlur={handleBlur}
      className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
        errors.company ? "border-red-500" : "border-gray-300"
      }`}
    />
    <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
      Company <span className="text-red-500">*</span>
    </label>
    {errors.company && (
      <p className="text-sm text-red-500 mt-1">{errors.company}</p>
    )}
  </div>

  {/* Service */}
  <div className="relative">
    <select
      name="service"
      onChange={handleChange}
      onBlur={handleBlur}
      className={`w-full border px-3 py-2 rounded-md text-sm ${
        errors.service ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Select Service <span className="text-red-500">*</span></option>
      <option>SEO</option>
      <option>Google Ads</option>
      <option>Social Media Marketing</option>
      <option>Website Development</option>
    </select>
    {errors.service && (
      <p className="text-xs text-red-500 mt-1">{errors.service}</p>
    )}
  </div>

  {/* Message */}
  <div className="relative">
    <textarea
      name="message"
      rows="2"
      placeholder=" "
      onChange={handleChange}
      onBlur={handleBlur}
      className={`w-full border px-3 py-2 rounded-md text-sm ${
        errors.message ? "border-red-500" : "border-gray-300"
      }`}
    />
    <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
      Message <span className="text-red-500">*</span>
    </label>
    {errors.message && (
      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
    )}
  </div>
  {/* Submit */}
  <button className="w-full bg-[#e94c89] hover:bg-[#781139] text-white py-2.5 rounded-md text-sm font-medium">
    Submit
  </button>
</form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}