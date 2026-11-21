"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import nav from "@/data/navigation.json";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const closeTimer = useRef(null);

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

  // Active route detection (includes child routes)
  const isActive = (item) => {
    if (item.href === pathname) return true;
    if (item.children?.some((c) => c.href === pathname)) return true;
    return false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const openDropdown = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredDropdown(label);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setHoveredDropdown(null), 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-900/5"
            : "bg-white/85 backdrop-blur-md shadow-sm"
        }`}
      >
        {/* Colorful top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400" />

        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 shrink-0 group"
          >
            <Image
              src="/spark-logo.webp"
              alt="Spark Digi Services"
              width={140}
              height={40}
              priority
              className="h-9 w-auto md:h-10 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 text-[14px] lg:text-[15px] font-semibold text-gray-700">
            {nav.map((item) => {
              const active = isActive(item);
              const hasChildren = !!item.children;
              const open = hoveredDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && openDropdown(item.label)}
                  onMouseLeave={hasChildren ? closeDropdown : undefined}
                >
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative flex items-center gap-1 px-3.5 py-2 rounded-lg transition-all duration-200 ${
                      active
                        ? "text-[#e94c89] bg-pink-50"
                        : "text-gray-700 hover:text-[#e94c89] hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* DROPDOWN */}
                  {hasChildren && (
                    <div
                      className={`absolute left-0 top-full pt-3 transition-all duration-300 origin-top ${
                        open
                          ? "opacity-100 visible translate-y-0 scale-100"
                          : "opacity-0 invisible -translate-y-2 scale-95"
                      }`}
                    >
                      <div className="relative bg-white border border-gray-100 shadow-xl shadow-gray-900/10 rounded-xl w-64 overflow-hidden p-1.5">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => handleNavClick(child.href)}
                            className={`flex items-center justify-between px-3.5 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                              pathname === child.href
                                ? "bg-pink-50 text-[#e94c89] font-medium"
                                : "text-gray-700 hover:bg-gray-50 hover:text-[#e94c89]"
                            }`}
                          >
                            <span>{child.label}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e94c89] opacity-0 group-hover:opacity-100 transition" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex gap-1">
              <a
                href="https://www.facebook.com/people/SparkDigi-Services/61555764844753/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaFacebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/sparkdigi_services/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
              >
                <BsInstagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-gray-500 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:scale-110"
              >
                <LiaLinkedin size={16} />
              </a>
            </div>

            <Link
              href="tel:+916300296581"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 shadow-md shadow-pink-200/60 hover:shadow-lg hover:shadow-pink-300/60 hover:scale-105 transition-all duration-300"
            >
              <Phone size={14} />
              +91 6300296581
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-800 active:scale-95 hover:bg-pink-50 hover:text-[#e94c89] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU — POPUP */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* popup card */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            className={`relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
              menuOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-3"
            }`}
          >
            {/* top gradient line */}
            <div />

            {/* popup header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-800 tracking-wide">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 active:scale-95 transition"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* scrollable content */}
            <div className="max-h-[70vh] overflow-y-auto px-4 py-3">
              {/* centered nav links */}
              <div className="flex flex-col items-center text-center">
                {nav.map((item) => {
                  const active = isActive(item);
                  const hasChildren = !!item.children;

                  return (
                    <div key={item.label} className="w-full">
                      <div className="relative flex items-center justify-center">
                        <Link
                          href={item.href}
                          onClick={() => {
                            handleNavClick(item.href);
                            setMenuOpen(false);
                          }}
                          className={`py-2.5 px-4 font-semibold rounded-lg transition-colors ${
                            active
                              ? "text-[#e94c89] bg-pink-50"
                              : "text-gray-800 hover:text-[#e94c89] hover:bg-gray-50"
                          }`}
                        >
                          {item.label}
                        </Link>

                        {hasChildren && (
                          <button
                            onClick={() => toggleDropdown(item.label)}
                            className="absolute right-0 flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 hover:bg-pink-50 hover:text-[#e94c89] transition"
                            aria-label={`Toggle ${item.label}`}
                          >
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                activeDropdown === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {hasChildren && (
                        <div
                          className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                            activeDropdown === item.label
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="flex flex-col items-center py-1.5 space-y-0.5">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => {
                                  handleNavClick(child.href);
                                  setMenuOpen(false);
                                }}
                                className={`block py-2 px-3 text-sm rounded-lg transition-colors ${
                                  pathname === child.href
                                    ? "text-[#e94c89] bg-pink-50 font-medium"
                                    : "text-gray-600 hover:text-[#e94c89] hover:bg-gray-50"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />

              {/* socials centered */}
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all"
                >
                  <FaFacebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 transition-all"
                >
                  <BsInstagram size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 transition-all"
                >
                  <LiaLinkedin size={17} />
                </a>
              </div>

              {/* phone CTA centered */}
              <div className="mt-4 flex justify-center">
                <Link
                  href="tel:+916300296581"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 shadow-lg shadow-pink-200 hover:shadow-pink-300 transition-shadow"
                >
                  <Phone size={16} />
                  +91 6300296581
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* spacer */}
      <div className="h-[22px] md:h-[30px]" />
    </>
  );
}