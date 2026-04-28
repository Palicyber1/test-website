"use client";

import { useState } from "react";

const tabs = ["Buy", "Rent", "Sell"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f3d]/75 via-[#0f1f3d]/60 to-[#0f1f3d]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-4">
          Welcome to Prestige Realty
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Find Your Disney
          <br />
          <span className="text-[#c9a84c]">Dream House</span>
        </h1>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Explore thousands of properties curated by our expert agents. Whether
          buying, renting, or investing — we make it effortless.
        </p>

        {/* Search card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-[#0f1f3d] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search inputs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="City, neighborhood, or address"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#c9a84c] transition-colors"
            />
            <select className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#c9a84c] transition-colors bg-white">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Townhouse</option>
              <option>Villa</option>
            </select>
            <button className="px-6 py-3 bg-[#c9a84c] text-white rounded-xl font-semibold text-sm hover:bg-[#b8963d] transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex justify-center gap-10 mt-12 text-white">
          {[
            { value: "12K+", label: "Properties" },
            { value: "8K+", label: "Happy Clients" },
            { value: "150+", label: "Expert Agents" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#c9a84c]">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
