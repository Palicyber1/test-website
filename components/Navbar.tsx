"use client";

import { useState } from "react";

const navLinks = [
  { label: "Buy", href: "#properties" },
  { label: "Rent", href: "#properties" },
  { label: "Sell", href: "#contact" },
  { label: "Home Loans", href: "#services" },
  { label: "Agent Finder", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 h-[64px] flex items-center gap-6">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 mr-2">
          <span className="text-[26px] font-black tracking-tight text-[#C00]">
            prestige
          </span>
          <span className="text-[26px] font-black tracking-tight text-gray-900">
            realty
          </span>
        </a>

        {/* Primary nav */}
        <nav className="hidden lg:flex items-center gap-5 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-gray-700 hover:text-[#C00] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <a href="#" className="text-[13px] font-medium text-gray-700 hover:text-[#C00] transition-colors">
            Manage Rentals
          </a>
          <a href="#" className="text-[13px] font-medium text-gray-700 hover:text-[#C00] transition-colors">
            Advertise
          </a>
          <a href="#" className="text-[13px] font-medium text-gray-700 hover:text-[#C00] transition-colors">
            Help
          </a>
          <div className="w-px h-5 bg-gray-200" />
          <a
            href="#"
            className="text-[13px] font-semibold text-[#C00] border border-[#C00] rounded-full px-4 py-1.5 hover:bg-red-50 transition-colors"
          >
            Sign in
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden ml-auto flex flex-col gap-[5px] text-gray-700"
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-current transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-current transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] font-medium text-gray-700 py-2.5 border-b border-gray-50 hover:text-[#C00] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <a href="#" className="flex-1 text-center text-[13px] font-semibold border border-[#C00] text-[#C00] rounded-full py-2 hover:bg-red-50 transition-colors">
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
