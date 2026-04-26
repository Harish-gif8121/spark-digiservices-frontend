"use client";

import { useState } from "react";
import { Phone, Mail, User, Briefcase } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // phone validation (only digits, max 10)
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      return setMessage("Phone number must be exactly 10 digits");
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Submitted successfully");
        setForm({ name: "", phone: "", email: "", service: "" });
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      setMessage("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ================= LEFT FORM ================= */}
        <div className="backdrop-blur-xl bg-white/70 border border-gray-200 shadow-xl rounded-3xl p-8 lg:p-10">

          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Let’s Work Together
          </h2>
          <p className="text-gray-500 mb-8">
            Fill the form and our team will contact you shortly.
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
              <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
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

            {/* SERVICE */}
            <div className="relative">
              <Briefcase className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition appearance-none"
              >
                <option value="">Select a Service</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>SEO</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>

            {/* MESSAGE */}
            {message && (
              <p className="text-sm text-gray-600 text-center mt-2">
                {message}
              </p>
            )}
          </form>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          <p className="text-pink-500 font-semibold mb-3 tracking-wide">
            CONTACT US
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We Build Solutions <br /> That Grow Your Business
          </h2>

          <p className="text-gray-600 mb-8">
            Whether you're looking to build a website, mobile app, or boost your online presence, 
            our team is here to help you achieve your goals faster and smarter.
          </p>

          {/* CONTACT CARD */}
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
            <div className="bg-pink-500 p-3 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Call Us Anytime</p>

              <p className="text-lg font-semibold">+91 6300296581</p>

            </div>
          </div>

          {/* EXTRA TRUST POINTS */}
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