import React from "react";

export default function PrometheusIQWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-wide">PrometheusIQ</h1>
        <p className="text-lg text-orange-600 mt-2">Intelligence Behind Every Argument</p>
      </header>

      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="mb-6">
          PrometheusIQ is a litigation support and legal strategy firm built for attorneys who demand more from their written advocacy. We specialize in high-impact brief writing, motion practice, appeals, and trial support, offering behind-the-scenes firepower for busy litigators and lean firms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Motion and Brief Drafting</li>
          <li>Appellate Strategy and Support</li>
          <li>Trial Prep Materials and On-Call Drafting</li>
          <li>Paralegal Support and Research</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why PrometheusIQ?</h2>
          <p>
            We combine litigation experience, strategic thinking, and clean, impactful writing. Our work is efficient, cost-effective, and tailored to the moments that matter—from dispositive motions to last-minute trial filings.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          Ready to elevate your litigation game? Reach out to discuss how PrometheusIQ can support your practice.
        </p>
        <form className="space-y-4">
          <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Name" />
          <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Email" />
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="5" placeholder="Tell us about your needs..."></textarea>
          <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700" type="submit">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} PrometheusIQ. All rights reserved.
      </footer>
    </div>
  );
}
