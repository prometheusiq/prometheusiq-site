import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f0e9] text-gray-800 font-sans">
      {/* NAV + BANNER */}
      <nav className="w-full px-6 py-4 bg-[#f5f0e9] shadow-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-[#2f3639]">Prometheus</span><span className="text-orange-600">IQ</span>
          </div>
          <button className="md:hidden text-[#2f3639]" onClick={() => setNavOpen(!navOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

      {/* Embeded PDF */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#2f3639]">Our Portfolio</h1>
        <div className="border rounded overflow-hidden">
          <iframe
            src="/portfolio.pdf"
            title="PrometheusIQ Portfolio"
            className="w-full h-[800px] md:h-[1000px]"
            style={{ border: 0 }}
          />
        </div>
        <p className="mt-4 text-sm text-[#2f3639]">
          <a href="/portfolio.pdf" className="text-orange-600 hover:underline">
            Download the PDF
          </a> if you can’t see the preview.
        </p>
      </main>

      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}