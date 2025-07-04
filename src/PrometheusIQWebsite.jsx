import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

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

      {/* HEADER with Logo */}
      <header className="flex flex-col items-center justify-center text-center pt-6 pb-4 px-4">
        <div className="w-full max-w-[900px]">
          <img
            src={logo}
            alt="PrometheusIQ logo"
            className="w-3/4 h-auto object-contain"
            style={{ maxHeight: "67.5vh" }}
          />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-4">
        <section className="pt-6 pb-12 border-b border-gray-300">
          <h2 className="text-3xl font-semibold mb-4 text-[#2f3639]">Who We Are</h2>
          <p className="text-lg leading-relaxed text-[#2f3639]">
            PrometheusIQ is a litigation support and legal strategy firm built for attorneys who demand more from their written advocacy.
            We specialize in high-impact brief writing, motion practice, appeals, and trial support, offering behind-the-scenes firepower
            for busy litigators and lean firms.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#2f3639]">
            Founded by seasoned trial lawyers and legal writers, PrometheusIQ brings a rare blend of tactical intelligence, writing clarity,
            and strategic judgment to every assignment. Whether you’re facing summary judgment, prepping for appeal, or mid-trial and
            stretched thin, we’re here to elevate your advocacy—quietly, powerfully, and precisely.
          </p>
        </section>

        <section className="py-12 border-b border-gray-300">
          <h2 className="text-3xl font-semibold mb-4 text-[#2f3639]">Our Services</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#2f3639]">
            <li>Motion and Brief Drafting</li>
            <li>Appellate Strategy and Support</li>
            <li>Trial Prep Materials and On-Call Drafting</li>
            <li>Paralegal Support and Research</li>
          </ul>
        </section>

        <section className="py-16 border-b border-gray-300 bg-[#fffaf3] text-center">
          <p className="text-xl italic max-w-3xl mx-auto text-[#2f3639] transition-opacity duration-700 ease-in-out">
            “{testimonials[testimonialIndex]}”
          </p>
          <p className="mt-4 text-sm text-[#2f3639]">— Anonymous Trial Lawyer</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}