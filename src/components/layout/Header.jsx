"use client";

import { useState } from "react";
import Link from "next/link";
import nav from "@/data/navigation.json";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/spark-logo.webp"
            alt="Spark Digi Services"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[17px] font-semibold text-gray-800">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                  {item.label}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition" />
                </span>

                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="bg-white border shadow-xl rounded-xl w-60">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm hover:bg-blue-50 hover:text-blue-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* RIGHT SIDE DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-3 text-gray-600">
            <FaFacebook />
            <BsInstagram />
            <LiaLinkedin />
            <BsTwitter />
          </div>

          <Link
            href="/contact"
            className="border border-black rounded-full px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            +91 6300296581
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t px-4 py-4 space-y-4">

          {nav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex justify-between w-full font-semibold text-gray-800"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === item.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block font-semibold text-gray-800"
              >
                {item.label}
              </Link>
            )
          )}

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-4 border-t text-gray-600">
            <FaFacebook />
            <BsInstagram />
            <LiaLinkedin />
            <BsTwitter />
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="block text-center border border-black rounded-full px-6 py-3 font-semibold hover:bg-black hover:text-white transition"
          >
            +91 6300296581
          </Link>
        </div>
      )}
    </header>
  );
}