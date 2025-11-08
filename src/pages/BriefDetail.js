import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";




export default function BriefDetail() {
  const { id } = useParams();
  const [brief, setBrief] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/policybriefs/${id}/`)
      .then((res) => setBrief(res.data))
      .catch((err) => console.error("Failed to fetch policy brief", err));
  }, [id]);

  if (!brief) {
    return <div className="mt-20 text-center text-gray-600">Loading brief...</div>;
  }

  return (
    <div className="mt-20 max-w-4xl mx-auto px-6">
        
        <Breadcrumbs
        paths={[
            { label: "Home", to: "/" },
            { label: "Policy Briefs", to: "/portfolio" },
            { label: brief.title }
        ]}
        />
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{brief.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        Published {new Date(brief.created_at).toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-gray-800 mb-6">
        {brief.summary}
      </div>
      {brief.pdf && (
        <a
          href={brief.pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          📄 Download PDF
        </a>
      )}
    </div>
  );
}
