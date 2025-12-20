import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Data & AI Empowers</h3>
          <p className="text-blue-200 text-sm">
            Empowering Governments, Businesses & Education 
            with Responsible Data & AI Strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/publications" className="hover:text-white">Publications</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-blue-200 text-sm">
            📧 <a href="mailto:muhammad_aman1@yahoo.com" className="hover:text-white">muhammad_aman1@yahoo.com</a>
          </p>
          <p className="text-blue-200 text-sm">🌍 Islamabad, Pakistan</p>
        </div>

        {/* Newsletter (optional future feature) */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
          <p className="text-blue-200 text-sm mb-3">
            Get updates on AI strategies, research, and publications.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-blue-800 text-white border border-blue-700 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-primary hover:bg-brand-dark rounded-r"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 text-center text-blue-300 text-sm py-4">
        © {new Date().getFullYear()} Data & AI Empowers | Led by Dr. Muhammad Aman
      </div>
    </footer>
  );
}
