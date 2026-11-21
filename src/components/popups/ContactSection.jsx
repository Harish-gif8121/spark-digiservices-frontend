"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  User,
  Briefcase,
  MessageSquare,
  Building2,
} from "lucide-react";

// 👇 Same services source used in PopupForm
import servicesData from "@/data/services.json";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", text: "" });

  // 👉 WhatsApp number that should RECEIVE the enquiry
  const WHATSAPP_NUMBER = "917995508708";

  const handleChange = (e) => {
    const { name, value } = e.target;

    // phone: digits only, max 10
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    // basic validation
    if (form.phone.length !== 10) {
      return setStatus({
        type: "error",
        text: "Phone number must be exactly 10 digits.",
      });
    }
    if (!form.message.trim()) {
      return setStatus({
        type: "error",
        text: "Please write a short message.",
      });
    }

    // 🔨 Build WhatsApp message
    const text =
      `🚨 *New Website Lead*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📱 *Phone:* ${form.phone}\n` +
      `📧 *Email:* ${form.email}\n` +
      `🏢 *Company:* ${form.company || "Not provided"}\n` +
      `🛠 *Service:* ${form.service || "Not selected"}\n` +
      `💬 *Message:* ${form.message}\n\n` +
      `🌐 *Source:* website-contact`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    // 🚀 Open WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus({
      type: "success",
      text: "✅ WhatsApp opened — hit Send there to deliver your message.",
    });
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* FORM */}
        <div className="backdrop-blur-xl bg-white/70 border border-gray-200 shadow-xl rounded-3xl p-8 lg:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Let's Work Together
          </h2>
          <p className="text-gray-500 mb-8">
            Fill the form — clicking Send opens WhatsApp with your details.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>

            {/* PHONE */}
            <div className="relative">
              <Phone
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (10 digits)"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>

            {/* COMPANY */}
            <div className="relative">
              <Building2
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                value={form.company}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>

            {/* SERVICE — DYNAMIC FROM services.json */}
            <div className="relative">
              <Briefcase
                className="absolute left-4 top-3.5 text-gray-400 pointer-events-none"
                size={18}
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition appearance-none bg-white"
              >
                <option value="">Select a Service</option>
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
            >
              Send via WhatsApp
            </button>

            {status.text && (
              <p
                className={`text-sm text-center mt-2 font-medium ${status.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                  }`}
              >
                {status.text}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-pink-500 font-semibold mb-3 tracking-wide">
            CONTACT US
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We Build Solutions <br /> That Grow Your Business
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you're looking to build a website, mobile app, or boost your
            online presence, our team is here to help you achieve your goals
            faster and smarter.
          </p>

          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
            <div className="bg-pink-500 p-3 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Call Us Anytime</p>
              <p className="text-lg font-semibold">+91 7995508708</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-gray-600">
            <p>✔ Fast Response Time</p>
            <p>✔ Expert Developers</p>
            <p>✔ Affordable Pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
}