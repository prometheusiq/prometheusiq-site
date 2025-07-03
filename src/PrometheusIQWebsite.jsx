import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../public/logo.png";

const testimonials = [
  "PrometheusIQ saved me a lot of time and stress associated with an upcoming trial. I’m happy to recommend them to anyone.",
  "PrometheusIQ enabled me to work on other things and things that I do better than write.",
  "I was thoroughly impressed with the work of PrometheusIQ."
];

export default function PrometheusIQWebsite() {
  const [navOpen, setNavOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f0e9] text-gray-800 font-sans">
      {/* NAV + BANNER (unchanged) */}
      <nav className="w-full px-6 py-4 bg-[#f5f0e9] shadow-sm border-b border-gray-300 sticky top-0 z-50">
        {/* ...same as before... */}
      </nav>

      <header className="flex flex-col items-center justify-center text-center pt-6 pb-4 px-4">
        <div className="w-full max-w-[900px]">
          {/* Reduced logo size by 25% (now 75% width) */}
          <img
            src={logo}
            alt="PrometheusIQ logo"
            className="w-3/4 h-auto object-contain"
            style={{ maxHeight: "67.5vh" }}
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        {/* ...Who We Are, Our Services, Testimonials sections unchanged... */}
      </main>

      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
);
}
