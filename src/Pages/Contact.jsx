import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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

      {/* LEAD-IN AND EMAIL LINK */}
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#2f3639]">Contact Us</h2>
        <p className="text-lg mb-6 text-[#2f3639]">
          We look forward to working with you. Please contact us with any questions or requests.
        </p>
        <a
          href="mailto:PrometheusIQRVA@gmail.com"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition"
        >
          Email
        </a>

        {/* MAP EMBED: Richmond, VA */}
        <div className="mt-10">
          <iframe
            title="Richmond, Virginia Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31152.192089276174!2d-77.48295895602913!3d37.53171921422927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b112f07cc6c16b%3A0x73c6ad72037d627a!2sRichmond%2C%20VA!5e0!3m2!1sen!2sus!4v1615470164275!5m2!1sen!2sus"
            className="w-full h-64 md:h-96 rounded"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}