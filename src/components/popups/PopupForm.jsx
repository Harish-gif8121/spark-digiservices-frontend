"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function PopupForm({
  open,
  onClose,
  source,
  data,
}) {
  console.log(
    "PopupForm source:",
    source
  );

  const [mounted, setMounted] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  const [submitting, setSubmitting] =
    useState(false);

  const router = useRouter();

  const title =
    data?.title ||
    "Get Your Free Quote";

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
    document.body.style.overflow =
      open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [open]);

  if (!mounted) {
    return null;
  }

  // =========================================
  // VALIDATION
  // =========================================

  const validateField = (
    name,
    value
  ) => {
    switch (name) {
      case "name":

        if (!value.trim()) {
          return "Name is required";
        }

        if (
          !/^[A-Za-z\s]+$/.test(
            value
          )
        ) {
          return "Only letters allowed";
        }

        if (value.length < 3) {
          return "Minimum 3 characters";
        }

        return "";

      case "email":

        if (!value) {
          return "Email is required";
        }

        if (
          !/^\S+@\S+\.\S+$/.test(
            value
          )
        ) {
          return "Invalid email";
        }

        return "";

      case "phone":

        if (!value) {
          return "Phone is required";
        }

        if (
          !/^[6-9]\d{9}$/.test(
            value
          )
        ) {
          return (
            "Must start 6-9 & be 10 digits"
          );
        }

        return "";

      case "company":

        if (
          value &&
          value.length < 2
        ) {
          return "Too short";
        }

        return "";

      case "service":

        if (!value) {
          return "Select a service";
        }

        return "";

      case "message":

        if (!value) {
          return "Message required";
        }

        if (value.length < 10) {
          return "Minimum 10 characters";
        }

        return "";

      default:
        return "";
    }
  };

  // =========================================
  // INPUT CHANGE
  // =========================================

  const handleChange = (e) => {
    let {
      name,
      value,
    } = e.target;

    // Phone: numbers only
    if (name === "phone") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    // Name: letters and spaces only
    if (name === "name") {
      value = value.replace(
        /[^A-Za-z\s]/g,
        ""
      );
    }

    e.target.value = value;

    setErrors((prev) => ({
      ...prev,

      [name]:
        validateField(
          name,
          value
        ),
    }));
  };

  // =========================================
  // INPUT BLUR
  // =========================================

  const handleBlur = (e) => {
    const {
      name,
      value,
    } = e.target;

    setErrors((prev) => ({
      ...prev,

      [name]:
        validateField(
          name,
          value
        ),
    }));
  };

  // =========================================
  // FORM SUBMIT
  // =========================================

  async function handleSubmit(e) {
    e.preventDefault();

    // Prevent double submission
    if (submitting) {
      return;
    }

    const form =
      e.currentTarget;

    // =======================================
    // GET FORM DATA
    // =======================================

    const leadData = {
      name:
        form.name.value.trim(),

      email:
        form.email.value.trim(),

      phone:
        form.phone.value.trim(),

      company:
        form.company.value.trim(),

      service:
        form.service.value,

      message:
        form.message.value.trim(),

      // IMPORTANT:
      // Preserve your current source logic
      source:
        source || "unknown",
    };

    console.log(
      "Lead data:",
      leadData
    );

    // =======================================
    // VALIDATE ALL FIELDS
    // =======================================

    const newErrors = {};

    Object.keys(
      leadData
    ).forEach((key) => {
      const error =
        validateField(
          key,
          leadData[key]
        );

      if (error) {
        newErrors[key] =
          error;
      }
    });

    setErrors(
      newErrors
    );

    // Stop if validation failed
    if (
      Object.keys(
        newErrors
      ).length > 0
    ) {
      toast.error(
        "Fix errors before submitting"
      );

      return;
    }

    // =======================================
    // START SUBMISSION
    // =======================================

    setSubmitting(true);

    const toastId =
      toast.loading(
        "Submitting..."
      );

    try {
      // =====================================
      // SEND LEAD TO NEXT.JS API
      // =====================================

      const response =
        await fetch(
          "/api/whatsapp-lead",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                leadData
              ),
          }
        );

      // =====================================
      // READ API RESPONSE
      // =====================================

      const result =
        await response.json();

      console.log(
        "WhatsApp lead response:",
        result
      );

      // =====================================
      // CHECK RESPONSE
      // =====================================

      if (
        !response.ok ||
        !result.success
      ) {
        console.error(
          "WhatsApp lead failed:",
          result
        );

        throw new Error(
          result.message ||
            "Failed to send lead"
        );
      }

      // =====================================
      // SUCCESS
      // =====================================

      toast.success(
        "Form submitted successfully!",
        {
          id: toastId,
        }
      );

      // Reset form
      form.reset();

      // Clear errors
      setErrors({});

      // Close popup
      onClose();

      // Go to thank-you page
      router.push(
        "/thank-you"
      );

    } catch (error) {

      console.error(
        "Form submission error:",
        error
      );

      toast.error(
        error?.message ||
          "Something went wrong. Please try again.",
        {
          id: toastId,
        }
      );

    } finally {

      setSubmitting(false);

    }
  }

  // =========================================
  // UI
  // =========================================

  return createPortal(
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          onClick={onClose}

          className="fixed inset-0 z-[999999] bg-black/20 backdrop-blur-sm flex items-center justify-center px-3"
        >

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 20,
            }}

            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}

            exit={{
              scale: 0.9,
              opacity: 0,
            }}

            onClick={(e) =>
              e.stopPropagation()
            }

            className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative"
          >

            {/* =================================
                CLOSE BUTTON
            ================================= */}

            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
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

            <form
              onSubmit={
                handleSubmit
              }
              className="space-y-4 text-sm"
            >

              {/* ===============================
                  NAME
              =============================== */}

              <div className="relative">

                <input
                  name="name"
                  placeholder=" "
                  autoComplete="name"
                  disabled={
                    submitting
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Name{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name}
                  </p>
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
                  disabled={
                    submitting
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Email{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email}
                  </p>
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
                  disabled={
                    submitting
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Phone{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.phone}
                  </p>
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
                  disabled={
                    submitting
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  className={`peer w-full border px-3 py-2 rounded-md outline-none text-sm ${
                    errors.company
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Company
                </label>

                {errors.company && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.company}
                  </p>
                )}

              </div>

              {/* ===============================
                  SERVICE
              =============================== */}

              <div className="relative">

                <select
                  name="service"
                  defaultValue=""
                  disabled={
                    submitting
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  className={`w-full border px-3 py-2 rounded-md text-sm ${
                    errors.service
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >

                  <option value="">
                    Select Service *
                  </option>

                  <option value="SEO">
                    SEO
                  </option>

                  <option value="Google Ads">
                    Google Ads
                  </option>

                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                </select>

                {errors.service && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.service}
                  </p>
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
                  disabled={
                    submitting
                  }
                  onChange={
                    handleChange
                  }
                  onBlur={
                    handleBlur
                  }
                  className={`w-full border px-3 py-2 rounded-md text-sm ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <label className="absolute left-3 -top-2 bg-white px-1 text-xs font-semibold text-gray-600">
                  Message{" "}
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* ===============================
                  SUBMIT BUTTON
              =============================== */}

              <button
                type="submit"
                disabled={
                  submitting
                }
                className={`w-full text-white py-2.5 rounded-md text-sm font-medium transition ${
                  submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#e94c89] hover:bg-[#781139]"
                }`}
              >

                {submitting
                  ? "Submitting..."
                  : "Submit"}

              </button>

            </form>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>,

    document.body
  );
}