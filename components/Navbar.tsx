"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Buy", href: "#properties" },
  { label: "Rent", href: "#properties" },
  { label: "Sell", href: "#contact" },
  { label: "Home Loans", href: "#services" },
  { label: "Find an Agent", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="#home" className="flex-shrink-0">
          <span className="text-2xl font-black tracking-tight text-[#CC1A1A]">
            prestige<span className="text-gray-800">realty</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#CC1A1A] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-[#CC1A1A] transition-colors"
          >
            Advertise
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#CC1A1A] transition-colors"
          >
            Help
          </a>
          <a
            href="#"
            className="text-sm font-medium border border-gray-300 rounded-full px-4 py-1.5 text-gray-700 hover:border-[#CC1A1A] hover:text-[#CC1A1A] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold bg-[#CC1A1A] text-white rounded-full px-4 py-1.5 hover:bg-[#b31616] transition-colors"
          >
            List property
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 text-gray-700"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium py-1 hover:text-[#CC1A1A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <a href="#" className="flex-1 text-center text-sm border border-gray-300 rounded-full py-2 text-gray-700">
              Sign in
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="flex-1 text-center text-sm bg-[#CC1A1A] text-white rounded-full py-2 font-semibold">
              List property
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
