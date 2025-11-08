import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow p-4 flex justify-between items-center z-50">
      {/* Brand */}
      <h1 className="font-bold text-blue-700 text-xl">Data & AI Empowers</h1>

      {/* Navigation */}
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>

      </div>
    </nav>
  );
}
