"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { Globe, User, Phone, Mail, Building2, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "917995508708";

const CONFIG = {
    audit: {
        heading: "Audit Request Form",
        subtitle: "Tell us about your website — we'll send a detailed audit report.",
        cta: "Request Free Audit",
        source: "free-audit-form",
    },
    report: {
        heading: "Get Analytics Report Form",
        subtitle: "Enter your website details — we'll send a competitor & analytics report.",
        cta: "Get Analytics Report",
        source: "analytics-report-form",
    },
};

export default function WebsiteAuditForm({
    open,
    onClose,
    formType = "audit", // "audit" | "report"
}) {
    const cfg = CONFIG[formType];

    const [mounted, setMounted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        website: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: "", text: "" });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!mounted) return null;

    const validateField = (name, value) => {
        switch (name) {
            case "name":
                if (!value.trim()) return "Name is required";
                if (!/^[A-Za-z\s]+$/.test(value)) return "Only letters allowed";
                if (value.trim().length < 3) return "Minimum 3 characters";
                return "";

            case "phone":
                if (!value) return "Phone is required";
                if (!/^[6-9]\d{9}$/.test(value))
                    return "Must start 6-9 & be 10 digits";
                return "";

            case "email":
                if (!value) return "Email is required";
                if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email";
                return "";

            case "website":
                if (!value.trim()) return "Website URL is required";
                // Accept "example.com" or "https://example.com"
                if (
                    !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(
                        value.trim()
                    )
                ) {
                    return "Enter a valid website (e.g. example.com)";
                }
                return "";

            case "company":
                if (value && value.length < 2) return "Too short";
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

        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ type: "", text: "" });

        // validate
        const newErrors = {};
        ["name", "phone", "email", "website", "company"].forEach((key) => {
            const err = validateField(key, form[key]);
            if (err) newErrors[key] = err;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error("Please fix the errors before submitting");
            return;
        }

        // build WhatsApp message
        const text =
            `🚨 *${cfg.heading}*\n\n` +
            `👤 *Name:* ${form.name}\n` +
            `📱 *Phone:* ${form.phone}\n` +
            `📧 *Email:* ${form.email}\n` +
            `🏢 *Company:* ${form.company || "Not provided"}\n` +
            `🌐 *Website:* ${form.website}\n` +
            (form.message ? `💬 *Message:* ${form.message}\n` : "") +
            `\n🌐 *Source:* ${cfg.source}`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            text
        )}`;

        window.open(waUrl, "_blank", "noopener,noreferrer");

        toast.success("Opening WhatsApp — hit Send there to deliver your request.");

        setStatus({
            type: "success",
            text: "✅ WhatsApp opened — hit Send there to deliver your request.",
        });

        // reset
        setForm({
            name: "",
            phone: "",
            email: "",
            company: "",
            website: "",
            message: "",
        });
        setErrors({});
        onClose();
    };

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[999999] bg-black/30 backdrop-blur-sm flex items-center justify-center px-3 py-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto"
                    >
                        {/* CLOSE */}
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute right-4 top-3 text-gray-400 hover:text-black text-lg"
                        >
                            ✕
                        </button>

                        {/* FORM NAME (clearly displayed) */}
                        <div className="text-center mb-5">
                            <h2 className="text-xl font-bold text-[#2b5c9a]">
                                {cfg.heading}
                            </h2>
                            <p className="text-xs text-gray-500 mt-1">{cfg.subtitle}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                            {/* NAME */}
                            <div className="relative">
                                <User
                                    className="absolute left-3 top-3 text-gray-400"
                                    size={16}
                                />
                                <input
                                    name="name"
                                    placeholder="Full Name *"
                                    autoComplete="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border outline-none text-sm transition ${errors.name
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-[#e94c89]"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                                )}
                            </div>

                            {/* PHONE */}
                            <div className="relative">
                                <Phone
                                    className="absolute left-3 top-3 text-gray-400"
                                    size={16}
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    inputMode="numeric"
                                    placeholder="Phone (10 digits) *"
                                    autoComplete="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border outline-none text-sm transition ${errors.phone
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-[#e94c89]"
                                        }`}
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                                )}
                            </div>

                            {/* EMAIL */}
                            <div className="relative">
                                <Mail
                                    className="absolute left-3 top-3 text-gray-400"
                                    size={16}
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address *"
                                    autoComplete="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border outline-none text-sm transition ${errors.email
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-[#e94c89]"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* COMPANY */}
                            <div className="relative">
                                <Building2
                                    className="absolute left-3 top-3 text-gray-400"
                                    size={16}
                                />
                                <input
                                    name="company"
                                    placeholder="Company (optional)"
                                    autoComplete="organization"
                                    value={form.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border outline-none text-sm transition ${errors.company
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-[#e94c89]"
                                        }`}
                                />
                                {errors.company && (
                                    <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                                )}
                            </div>

                            {/* WEBSITE */}
                            <div className="relative">
                                <Globe
                                    className="absolute left-3 top-3 text-gray-400"
                                    size={16}
                                />
                                <input
                                    name="website"
                                    placeholder="Website URL (e.g. example.com) *"
                                    value={form.website}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg border outline-none text-sm transition ${errors.website
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-[#e94c89]"
                                        }`}
                                />
                                {errors.website && (
                                    <p className="text-xs text-red-500 mt-1">{errors.website}</p>
                                )}
                            </div>

                            {/* MESSAGE (optional) */}
                            <div className="relative">
                                <MessageSquare
                                    className="absolute left-3 top-3 text-gray-400"
                                    size={16}
                                />
                                <textarea
                                    name="message"
                                    rows={2}
                                    placeholder="Anything specific you want us to check? (optional)"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 outline-none text-sm resize-none focus:border-[#e94c89] transition"
                                />
                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2.5 rounded-lg text-sm font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
                            >
                                {cfg.cta}
                            </button>

                            {status.text && (
                                <p
                                    className={`text-xs text-center font-medium ${status.type === "success"
                                            ? "text-green-600"
                                            : "text-red-600"
                                        }`}
                                >
                                    {status.text}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}