// src/components/Navbar.js
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    [
      "text-sm md:text-base px-2 md:px-3 py-1 border-b-2 transition-colors",
      isActive
        ? "border-brand-accent text-brand-primary font-semibold"
        : "border-transparent text-gray-700 hover:text-brand-primary",
    ].join(" ");

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 min-h-[72px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Data & AI Empowers"
            className="h-11 md:h-12 w-auto"
          />
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-6">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={linkClasses}>
            Portfolio
          </NavLink>
          <NavLink to="/blog" className={linkClasses}>
            Blog
          </NavLink>
          <NavLink to="/publications" className={linkClasses}>
            Publications
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
          <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
