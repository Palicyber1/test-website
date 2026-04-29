const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    status: "For Sale",
    price: "$1,250,000",
    beds: 5, baths: 4, sqft: "4,200",
    address: "1420 Sunset Blvd",
    city: "Beverly Hills, CA 90210",
    daysOn: "3 days on market",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    status: "For Sale",
    price: "$875,000",
    beds: 4, baths: 3, sqft: "3,100",
    address: "88 Elmwood Drive",
    city: "Palo Alto, CA 94301",
    daysOn: "1 day on market",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    status: "For Rent",
    price: "$4,500/mo",
    beds: 3, baths: 2, sqft: "2,000",
    address: "200 W 57th St, Apt 18C",
    city: "New York, NY 10019",
    daysOn: "5 days on market",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    status: "New Construction",
    price: "$560,000",
    beds: 3, baths: 2, sqft: "1,850",
    address: "740 Ocean Drive",
    city: "Miami Beach, FL 33139",
    daysOn: "Just listed",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    status: "For Sale",
    price: "$2,100,000",
    beds: 6, baths: 5, sqft: "5,800",
    address: "3301 Pacific Coast Hwy",
    city: "Malibu, CA 90265",
    daysOn: "12 days on market",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=80",
    status: "For Rent",
    price: "$3,200/mo",
    beds: 2, baths: 2, sqft: "1,400",
    address: "500 N Michigan Ave, Unit 9",
    city: "Chicago, IL 60611",
    daysOn: "2 days on market",
  },
];

const statusColor: Record<string, string> = {
  "For Sale": "bg-[#C00] text-white",
  "For Rent": "bg-emerald-600 text-white",
  "New Construction": "bg-blue-600 text-white",
};

function PropertyCard({ p }: { p: (typeof properties)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 cursor-pointer group">
      {/* Photo */}
      <div className="relative h-52 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.address}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
        <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded ${statusColor[p.status] ?? "bg-gray-700 text-white"}`}>
          {p.status}
        </span>
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-sm">
          <svg className="w-4 h-4 text-gray-500 hover:text-[#C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Price */}
        <p className="text-[18px] font-bold text-gray-900 mb-1">{p.price}</p>

        {/* Specs */}
        <p className="text-[13px] text-gray-700 mb-0.5">
          <span className="font-semibold">{p.beds}</span> bds &nbsp;|&nbsp;
          <span className="font-semibold">{p.baths}</span> ba &nbsp;|&nbsp;
          <span className="font-semibold">{p.sqft}</span> sqft
        </p>

        {/* Address */}
        <p className="text-[13px] text-gray-500 truncate">{p.address}</p>
        <p className="text-[13px] text-gray-500 truncate">{p.city}</p>

        {/* Days on market */}
        <p className="text-[11px] text-gray-400 mt-2">{p.daysOn}</p>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-bold text-gray-900">
            Homes for you
          </h2>
          <a href="#" className="text-[13px] font-semibold text-[#C00] hover:underline">
            See all homes
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
