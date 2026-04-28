"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-6">
              Let&apos;s Find Your Perfect Property
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Whether you&apos;re buying, selling, or investing — our expert
              agents are ready to guide you. Reach out and we&apos;ll get back
              to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
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
                  ),
                  label: "Address",
                  value: "1234 Prestige Blvd, Beverly Hills, CA 90210",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+1 (310) 555-0192",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@prestigerealty.com",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0f1f3d]/5 flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-[#0f1f3d] font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f1f3d] mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  One of our agents will reach out within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      interest: "",
                      message: "",
                    });
                  }}
                  className="mt-6 text-sm text-[#c9a84c] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#0f1f3d] mb-6">
                  Send Us a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#c9a84c] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#c9a84c] bg-white transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#c9a84c] bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">
                    I&apos;m Interested In
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#c9a84c] bg-white transition-colors text-gray-700"
                  >
                    <option value="">Select an option</option>
                    <option>Buying a Property</option>
                    <option>Selling a Property</option>
                    <option>Renting a Property</option>
                    <option>Property Management</option>
                    <option>Investment Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#c9a84c] bg-white transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0f1f3d] text-white rounded-xl font-semibold hover:bg-[#1a3260] transition-colors mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
