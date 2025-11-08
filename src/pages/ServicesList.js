import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import { Link } from "react-router-dom";

export default function ServicesList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/services/`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.results || [];
        setServices(data);
      })
      .catch((err) => console.error("Failed to fetch services", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 mt-20">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              <Link to={`/services/${service.slug}`} className="hover:underline">
                {service.title}
              </Link>
            </h2>
            <p className="text-gray-700 mb-4">
              {service.summary?.length > 120
                ? service.summary.slice(0, 120) + "…"
                : service.summary}
            </p>
            <Link
              to={`/services/${service.slug}`}
              className="text-blue-600 hover:underline text-sm"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
