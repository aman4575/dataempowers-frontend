import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";




export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/services/${slug}/`)
      .then((res) => setService(res.data))
      .catch((err) => console.error("Failed to fetch service", err));
  }, [slug]);

  if (!service) {
    return <p className="text-center mt-20 text-gray-500">Loading…</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-20">
        
        <Breadcrumbs
        paths={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: service.title }
        ]}
        />
      <h1 className="text-3xl font-bold text-blue-800 mb-6">{service.title}</h1>
      <p className="text-gray-700 mb-8">{service.description}</p>

      {service.pdf && (
        <a
          href={service.pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          📄 Download Service Brief
        </a>
      )}
    </div>
  );
}
