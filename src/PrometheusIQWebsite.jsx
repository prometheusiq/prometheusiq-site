import React from "react";
import logo from "../public/logo.png";

export default function PrometheusIQWebsite() {
  return (
    <div className="min-h-screen bg-[#f5f0e9] text-gray-800 font-sans">
      <nav className="w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-[#f5f0e9] shadow-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-wide text-orange-600 mb-2 md:mb-0">PrometheusIQ</div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-[#2f3639] text-md font-medium">
          <li className="hover:text-orange-600 cursor-pointer transition">Home</li>
          <li className="hover:text-orange-600 cursor-pointer transition">About</li>
          <li className="hover:text-orange-600 cursor-pointer transition">Services</li>
          <li className="hover:text-orange-600 cursor-pointer transition">Contact</li>
        </ul>
      </nav>

      <header className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img src={logo} alt="PrometheusIQ logo" className="w-full max-w-4xl h-auto" />
        <p className="text-xl text-orange-600 mt-6 tracking-wide uppercase font-medium">
          Intelligence Behind Every Argument
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <section className="py-12 border-b border-gray-300">
          <h2 className="text-3xl font-semibold mb-4 text-[#2f3639]">Who We Are</h2>
          <p className="text-lg leading-relaxed text-[#2f3639]">
            PrometheusIQ is a litigation support and legal strategy firm built for attorneys who demand more from their written advocacy.
            We specialize in high-impact brief writing, motion practice, appeals, and trial support, offering behind-the-scenes firepower
            for busy litigators and lean firms.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#2f3639]">
            Founded by seasoned trial lawyers and legal writers, PrometheusIQ brings a rare blend of tactical intelligence, writing clarity,
            and strategic judgment to every assignment. Whether you’re facing summary judgment, prepping for appeal, or mid-trial and
            stretched thin, we’re here to elevate your advocacy—quietly, powerfully, and surgically.
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

        <section className="py-12 border-b border-gray-300">
          <h2 className="text-3xl font-semibold mb-4 text-[#2f3639]">Contact Us</h2>
          <p className="text-lg mb-6 text-[#2f3639]">
            Ready to elevate your litigation game? Reach out to discuss how PrometheusIQ can support your practice.
          </p>
          <form className="space-y-4">
            <input className="w-full p-3 border border-gray-300 rounded" type="text" placeholder="Name" />
            <input className="w-full p-3 border border-gray-300 rounded" type="email" placeholder="Email" />
            <textarea className="w-full p-3 border border-gray-300 rounded" rows="5" placeholder="Tell us about your needs..."></textarea>
            <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}
