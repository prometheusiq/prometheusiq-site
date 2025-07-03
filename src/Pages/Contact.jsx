// src/pages/Contact.jsx
import React from 'react';
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-[#2f3639]">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">Reach out to discuss how PrometheusIQ can support your next case.</p>
      <form className="space-y-4">
        <input className="w-full p-3 border border-gray-300 rounded" type="text" placeholder="Name" />
        <input className="w-full p-3 border border-gray-300 rounded" type="email" placeholder="Email" />
        <textarea className="w-full p-3 border border-gray-300 rounded" rows="5" placeholder="Tell us about your needs..."></textarea>
        <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}