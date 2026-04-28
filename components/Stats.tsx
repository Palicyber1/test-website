const stats = [
  { value: "12,000+", label: "Properties Listed", icon: "🏠" },
  { value: "$4.2B+", label: "Total Sales Value", icon: "💰" },
  { value: "8,500+", label: "Happy Clients", icon: "😊" },
  { value: "150+", label: "Expert Agents", icon: "🤝" },
];

export default function Stats() {
  return (
    <section className="bg-[#0f1f3d] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className="text-3xl font-bold text-[#c9a84c] mb-1">
                {s.value}
              </div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
