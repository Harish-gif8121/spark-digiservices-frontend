"use client";

import { useState } from "react";
import Link from "next/link";
import nav from "@/data/navigation.json";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // ✅ SAME ROUTE SCROLL FIX
  const handleNavClick = (href) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2"
          >
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
                  
                  {/* PARENT */}
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-1 hover:text-[#e94c89] transition"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition"
                    />
                  </Link>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white border shadow-xl rounded-xl w-64 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => handleNavClick(child.href)}
                          className="block px-5 py-3 text-sm hover:bg-pink-50 hover:text-[#e94c89] transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-[#e94c89] transition"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-3 text-gray-600 text-lg">
              <a
                href="https://www.facebook.com/people/SparkDigi-Services/61555764844753/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e94c89] transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/sparkdigi_services/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e94c89] transition"
              >
                <BsInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e94c89] transition"
              >
                <LiaLinkedin />
              </a>
            </div>

            <Link
              href="tel:+916300296581"
              className="border border-black rounded-full px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              +91 6300296581
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t px-4 py-5 space-y-4">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  
                  {/* PARENT */}
                  <div className="flex justify-between items-center">
                    <Link
                      href={item.href}
                      onClick={() => {
                        handleNavClick(item.href);
                        setMenuOpen(false);
                      }}
                      className="font-semibold text-gray-800"
                    >
                      {item.label}
                    </Link>

                    <button onClick={() => toggleDropdown(item.label)}>
                      <ChevronDown
                        size={18}
                        className={`transition ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* CHILDREN */}
                  {activeDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            handleNavClick(child.href);
                            setMenuOpen(false);
                          }}
                          className="block text-gray-600 hover:text-[#e94c89]"
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
                  onClick={() => {
                    handleNavClick(item.href);
                    setMenuOpen(false);
                  }}
                  className="block font-semibold text-gray-800 hover:text-[#e94c89]"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* SOCIAL */}
            <div className="flex gap-4 pt-4 border-t text-gray-600 text-lg">
              <Link href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </Link>

              <Link href="https://www.instagram.com/" target="_blank">
                <BsInstagram />
              </Link>

              <Link href="https://www.linkedin.com/" target="_blank">
                <LiaLinkedin />
              </Link>
            </div>

            <Link
              href="tel:+916300296581"
              className="border border-black rounded-full px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              +91 6300296581
            </Link>
          </div>
        )}
      </header>
    </>
  );
}