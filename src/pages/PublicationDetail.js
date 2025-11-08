import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";




export default function PublicationDetail() {
  const { id } = useParams();
  const [publication, setPublication] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/publications/${id}/`)
      .then((res) => setPublication(res.data))
      .catch((err) => console.error("Failed to fetch publication", err));
  }, [id]);

  if (!publication) {
    return <div className="mt-20 text-center text-gray-600">Loading publication...</div>;
  }

  return (
    <div className="mt-20 max-w-4xl mx-auto px-6">
        
        <Breadcrumbs
        paths={[
            { label: "Home", to: "/" },
            { label: "Publications", to: "/publications" },
            { label: publication.title }
        ]}
        />
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{publication.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {publication.year} • Published {new Date(publication.created_at).toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-gray-800 mb-6">
        {publication.summary}
      </div>
      {publication.pdf && (
        <a
          href={publication.pdf}
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
