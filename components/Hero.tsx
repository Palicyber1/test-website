"use client";

import { useState } from "react";

const tabs = ["Buy", "Rent", "Sell"];

const popularSearches = [
  "New York, NY",
  "Los Angeles, CA",
  "Miami, FL",
  "Austin, TX",
  "Chicago, IL",
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [query, setQuery] = useState("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85"
          alt="Beautiful home"
          className="w-full h-full object-cover"
        />
        {/* Zillow-style: lighter top, darker bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Center content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow-md">
          Find your fairytale dream house.
        </h1>
        <p className="text-white/80 text-base sm:text-lg mb-8 drop-shadow">
          Over 12,000 homes for sale, rent, and more.
        </p>

        {/* Search card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 text-sm font-semibold transition-colors relative ${
                  activeTab === tab
                    ? "text-[#CC1A1A]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CC1A1A]" />
                )}
              </button>
            ))}
          </div>

          {/* Search input row */}
          <div className="flex items-center gap-2 p-3">
            {/* Location icon */}
            <div className="pl-2 text-gray-400 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter an address, neighborhood, city, or ZIP code"
              className="flex-1 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />

            {/* Search button */}
            <button className="flex-shrink-0 bg-[#CC1A1A] hover:bg-[#b31616] text-white rounded-xl px-5 py-3 transition-colors flex items-center gap-2 font-semibold text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Popular searches */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          <span className="text-white/60 text-xs">Popular:</span>
          {popularSearches.map((city) => (
            <button
              key={city}
              onClick={() => setQuery(city)}
              className="text-xs text-white/80 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 transition-colors"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
