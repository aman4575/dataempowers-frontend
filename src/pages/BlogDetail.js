import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../utils/helpers";
import Breadcrumbs from "../components/Breadcrumbs";




export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blogposts/${slug}/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Failed to fetch blog post", err));
  }, [slug]);

  if (!post) {
    return (
      <div className="mt-20 text-center text-gray-600">
        Loading blog post...
      </div>
    );
  }

  return (
    <div className="mt-20 max-w-4xl mx-auto px-6">
        
        <Breadcrumbs
        paths={[
            { label: "Home", to: "/" },
            { label: "Blog", to: "/blog" },
            { label: post.title }
        ]}
/>
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        By {post.author} • {new Date(post.created_at).toLocaleDateString()}
      </p>
      <div className="prose max-w-none text-gray-800">
        {post.content}
      </div>
    </div>
  );
}
