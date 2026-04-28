const testimonials = [
  {
    id: 1,
    name: "Sarah & James Chen",
    role: "First-Time Home Buyers",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b7?w=100&q=80",
    quote:
      "Prestige Realty made our dream of owning a home a reality. Our agent was patient, knowledgeable, and found us the perfect home in our budget. We couldn't be happier!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    quote:
      "I've worked with several agencies over the years, but none compare. Their market analysis was spot-on and I've seen 22% ROI on the portfolio they helped me build.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amara Williams",
    role: "Luxury Home Seller",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
    quote:
      "They sold my estate above asking price in just 11 days. The marketing photography and virtual tour were stunning. Professional team from start to finish.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#c9a84c]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-2">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real experiences from real people who found their perfect property
            with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-[#c9a84c]/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <StarRating count={t.rating} />
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[#0f1f3d] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
