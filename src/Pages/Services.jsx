import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className="hidden md:flex gap-6 text-[#2f3639] text-md font-medium">
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-600">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-600">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
          </ul>
        </div>
        {navOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 text-[#2f3639] text-md font-medium">
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-600">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-600">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
          </ul>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#2f3639]">Services</h1>

        {/* Placeholder for a services graphic */}
        <div className="w-full h-64 bg-gray-200 rounded mb-8 flex items-center justify-center">
          <span className="text-gray-500 italic">[Services Graphic Placeholder]</span>
        </div>

        {/* List of services */}
        <ul className="list-disc list-inside space-y-4 text-lg text-[#2f3639]">
          <li>
            <strong>Motion and Brief Drafting:</strong> High-impact legal briefs and motions tailored for trial and appellate courts.
          </li>
          <li>
            <strong>Appellate Strategy and Support:</strong> Comprehensive analysis, brief writing, and oral argument assistance for appellate matters.
          </li>
          <li>
            <strong>Trial Presentation Materials:</strong> Custom exhibits, demonstratives, and visual aids to support persuasive trial narratives.
          </li>
          <li>
            <strong>Issue Spotting and Case Strategy:</strong> Tactical guidance on narrowing issues and structuring cohesive litigation plans.
          </li>
          <li>
            <strong>On-Demand Legal Writing:</strong> Flexible co-counsel drafting and research support to meet tight deadlines.
          </li>
          <li>
            <strong>Paralegal and Research Services:</strong> Detailed legal research, document organization, and e-discovery support.
          </li>
        </ul>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}
