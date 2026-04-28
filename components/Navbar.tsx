"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <span
            className={`text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-[#0f1f3d]" : "text-white"
            }`}
          >
            Prestige<span className="text-[#c9a84c]">Realty</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#c9a84c] ${
                scrolled ? "text-[#0f1f3d]" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full bg-[#c9a84c] text-white text-sm font-semibold hover:bg-[#b8963d] transition-colors"
          >
            List Property
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 ${
            scrolled ? "text-[#0f1f3d]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#0f1f3d] font-medium hover:text-[#c9a84c] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 rounded-full bg-[#c9a84c] text-white text-sm font-semibold text-center hover:bg-[#b8963d] transition-colors"
          >
            List Property
          </a>
        </div>
      )}
    </header>
  );
}
