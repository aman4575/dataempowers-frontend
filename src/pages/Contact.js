// src/pages/Contact.js
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.title = "Contact | Data & AI Empowers";
  }, []);


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    axios
      .post(`${API_BASE}/api/contact/`, formData)
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send. Please try again later.");
      });
  };

  const statusColor =
    status.startsWith("✅")
      ? "text-brand-primary"
      : status.startsWith("❌")
      ? "text-red-600"
      : "text-gray-500";

  return (
    <main className="mt-20 bg-white">
      <section className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-primary uppercase">
            Contact
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a question, collaboration idea, or project related to
            responsible AI, data governance, or NLP for policy and education?
            Use the form below or email directly.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm rounded-xl p-6 md:p-8 border border-gray-100 space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Share a bit about your question, context, or project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg h-32 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary text-white px-6 py-3 rounded-full shadow hover:bg-brand-dark transition text-sm font-semibold"
          >
            Send message
          </button>
        </form>

        {/* Status message */}
        {status && (
          <p className={`mt-4 text-center text-sm ${statusColor}`}>{status}</p>
        )}

        {/* Direct Email as Backup */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            Or reach out directly at:
          </p>
          <a
            href="mailto:muhammad_aman1@yahoo.com"
            className="text-brand-primary font-semibold hover:underline"
          >
            muhammad_aman1@yahoo.com
          </a>
        </div>
      </section>
    </main>
  );
}
