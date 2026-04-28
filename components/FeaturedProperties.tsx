const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    badge: "For Sale",
    price: "$1,250,000",
    title: "Modern Villa in Beverly Hills",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    type: "Villa",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    badge: "For Sale",
    price: "$875,000",
    title: "Elegant Suburban Family Home",
    location: "Palo Alto, CA",
    beds: 4,
    baths: 3,
    sqft: "3,100",
    type: "House",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    badge: "For Rent",
    price: "$4,500/mo",
    title: "Downtown Luxury Penthouse",
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: "2,000",
    type: "Penthouse",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    badge: "New",
    price: "$560,000",
    title: "Contemporary Beach Cottage",
    location: "Miami Beach, FL",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    type: "Cottage",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    badge: "For Sale",
    price: "$2,100,000",
    title: "Architectural Masterpiece",
    location: "Malibu, CA",
    beds: 6,
    baths: 5,
    sqft: "5,800",
    type: "Luxury",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=80",
    badge: "For Rent",
    price: "$3,200/mo",
    title: "Stylish City Apartment",
    location: "Chicago, IL",
    beds: 2,
    baths: 2,
    sqft: "1,400",
    type: "Apartment",
  },
];

const badgeColors: Record<string, string> = {
  "For Sale": "bg-[#0f1f3d] text-white",
  "For Rent": "bg-emerald-600 text-white",
  New: "bg-[#c9a84c] text-white",
};

function PropertyCard({ p }: { p: (typeof properties)[0] }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            badgeColors[p.badge] ?? "bg-gray-700 text-white"
          }`}
        >
          {p.badge}
        </span>
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <svg
            className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wide mb-1">
          {p.type}
        </p>
        <h3 className="text-[#0f1f3d] font-bold text-lg leading-snug mb-1">
          {p.title}
        </h3>
        <p className="text-gray-400 text-sm flex items-center gap-1 mb-4">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {p.location}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-4 text-gray-500 text-sm border-t border-gray-100 pt-4">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
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
            {p.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {p.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            {p.sqft} sqft
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-[#0f1f3d] font-bold text-xl">{p.price}</span>
          <button className="text-sm font-semibold text-[#c9a84c] hover:text-[#b8963d] transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-2">
              Hand-Picked Listings
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d]">
              Featured Properties
            </h2>
          </div>
          <a
            href="#properties"
            className="text-sm font-semibold text-[#0f1f3d] border-b-2 border-[#c9a84c] pb-0.5 hover:text-[#c9a84c] transition-colors"
          >
            View All Listings →
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
