import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f0e9] text-gray-800 font-sans">
      {/* NAV + BANNER (same as above) */}
      <nav className="w-full px-6 py-4 bg-[#f5f0e9] shadow-sm border-b border-gray-300 sticky top-0 z-50">
        {/* …navigation code identical to other pages… */}
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#2f3639]">Our Portfolio</h1>

        {/* PDF embed */}
        <div className="border rounded overflow-hidden">
          <iframe
            src="/portfolio.pdf"
            title="PrometheusIQ Portfolio"
            className="w-full h-[800px] md:h-[1000px]"
            style={{ border: 0 }}
          />
        </div>
      </main>

      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}
