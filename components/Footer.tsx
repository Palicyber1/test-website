const footerLinks = {
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Properties: ["Buy", "Rent", "Sell", "New Developments"],
  Services: [
    "Property Management",
    "Mortgage Advisory",
    "Investment Consulting",
    "Relocation",
  ],
  Support: ["FAQ", "Privacy Policy", "Terms of Service", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Prestige<span className="text-[#c9a84c]">Realty</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner in real estate. We help families and
              investors find exceptional properties across the country.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#c9a84c] hover:text-white transition-all text-xs font-bold uppercase"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/90 font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2026 PrestigeRealty. All rights reserved.</p>
          <p>Designed for demo purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
