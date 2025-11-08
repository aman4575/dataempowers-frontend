import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    axios
      .post(`${API_BASE}/api/contact/`, formData)
      .then(() => setStatus("✅ Message sent successfully!"))
      .catch(() => setStatus("❌ Failed to send. Please try again later."));
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 mt-20">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg h-32"
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}

      {/* Direct Email as Backup */}
      <div className="mt-10 text-center">
        <p className="text-gray-600">Or reach me directly at:</p>
        <a
          href="mailto:muhammad_aman1@yahoo.com"
          className="text-blue-600 font-semibold hover:underline"
        >
          muhammad_aman1@yahoo.com
        </a>
      </div>
    </div>
  );
}
