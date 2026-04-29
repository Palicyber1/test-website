"use client";

import { useState } from "react";

const tabs = [
  { label: "For Sale", id: "sale" },
  { label: "For Rent", id: "rent" },
  { label: "For Sale by Owner", id: "fsbo" },
  { label: "New Construction", id: "new" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("sale");
  const [query, setQuery] = useState("");

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: "calc(100vh - 64px)", marginTop: "64px" }}
    >
      {/* Background — bright, barely darkened like Zillow */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=90"
          alt="Beautiful home"
          className="w-full h-full object-cover"
        />
        {/* Very light overlay — keep the photo vivid */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-[42px] sm:text-[52px] font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
          Find your fairytale dream house.
        </h1>

        {/* Search card — the hero element */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-5 py-3.5 text-[13px] font-semibold whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#C00]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C00]" />
                )}
              </button>
            ))}
          </div>

          {/* Input row */}
          <div className="flex items-center px-4 py-3 gap-2">
            {/* Search icon */}
            <svg
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter an address, neighborhood, city, or ZIP code"
              className="flex-1 py-2 text-[14px] text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />

            <button className="flex-shrink-0 bg-[#C00] hover:bg-[#a30000] text-white font-bold text-[14px] rounded-lg px-7 py-3 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
