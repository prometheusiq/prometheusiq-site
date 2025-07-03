import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f0e9] text-gray-800 font-sans">
      {/* NAV + BANNER */}
      <nav className="w-full px-6 py-4 bg-[#f5f0e9] shadow-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-[#2f3639]">Prometheus</span>
            <span className="text-orange-600">IQ</span>
          </div>
          <button className="md:hidden text-[#2f3639]" onClick={() => setNavOpen(!navOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className="hidden md:flex gap-6 text-[#2f3639] text-md font-medium">
            <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-600 transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-600 transition">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600 transition">Contact</Link></li>
          </ul>
        </div>
        {navOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 text-[#2f3639] text-md font-medium">
            <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-600 transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-600 transition">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600 transition">Contact</Link></li>
          </ul>
        )}
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#2f3639]">About PrometheusIQ</h1>

        {/* Placeholder for founders graphic */}
        <div className="w-full h-64 bg-gray-200 rounded mb-8 flex items-center justify-center">
          <span className="text-gray-500 italic">[Founders Graphic Placeholder]</span>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-[#2f3639]">
          <p>
            PrometheusIQ is a litigation support and appellate services boutique that was founded to serve lawyers
            and law firms in drafting compelling legal writing, refining case strategy, crafting trial presentation
            materials, and co-counseling or taking the lead in appellate matters.
          </p>
          <p>
            PrometheusIQ founders Seth Carroll and Isaac McBeth have significant expertise in legal writing, case
            presentation, issue narrowing, argument, and appellate advocacy. Together they form a team that performs
            at all levels of practice—in state and federal courts, including state and federal appellate courts.
          </p>
          <p>
            PrometheusIQ is intended to free litigators to focus on critical aspects of case preparation, development,
            and trial presentation—with high-level, on-demand legal analysis, writing, and advocacy support behind the
            scenes.
          </p>
          <p>
            Our goal is to deploy powerful, efficient argument that will match or outperform even the highest-level
            adversaries.
          </p>
        </div>
      </main>

      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}
