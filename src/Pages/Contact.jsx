import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f0e9] text-gray-800 font-sans">
      {/* NAV + BANNER */}
      <nav className="w-full px-6 py-4 bg-[#f5f0e9] shadow-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-[#2f3639]">Prometheus</span><span className="text-orange-600">IQ</span>
          </div>
          {/* Add nav links or mobile toggle if needed */}
        </div>
      </nav>

      <header className="flex flex-col items-center justify-center text-center pt-6 pb-4 px-4">
        <img
          src="/logo.png" // use public asset path directly
          alt="PrometheusIQ logo"
          className="w-3/4 h-auto object-contain"
          style={{ maxHeight: "67.5vh" }}
        />
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#2f3639]">Contact Us</h2>
        <p className="text-lg mb-6 text-[#2f3639]">
          Reach out to us at <a href="mailto:prometheusiqrva@gmail.com" className="text-orange-600 hover:underline">prometheusiqrva@gmail.com</a>
        </p>
        <form className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full p-3 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded"
            rows="5"
            placeholder="Tell us about your needs..."
          ></textarea>
          <button
            className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </main>

      <footer className="text-center py-8 text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}