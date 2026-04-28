const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Property Sales",
    description:
      "Our seasoned agents negotiate top dollar for your home with data-driven pricing strategies and a vast buyer network.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Property Management",
    description:
      "End-to-end management for landlords — tenant screening, rent collection, maintenance, and detailed reporting.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Mortgage Advisory",
    description:
      "Connect with trusted lenders and get personalized financing solutions tailored to your budget and goals.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Investment Consulting",
    description:
      "Maximize returns with market analysis, ROI projections, and access to exclusive off-market investment properties.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
    title: "Virtual Tours",
    description:
      "Experience properties from anywhere with immersive 3D walkthroughs, high-res photography, and drone footage.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Relocation Services",
    description:
      "Seamless end-to-end support for individuals and families relocating — from neighborhood guidance to moving day.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From your first home search to building a property portfolio, our
            team is with you at every step.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#c9a84c]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0f1f3d]/5 flex items-center justify-center text-[#c9a84c] mb-5 group-hover:bg-[#c9a84c] group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-[#0f1f3d] font-bold text-lg mb-3">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
