// Base API URL (read from .env or fallback to local Django server)
export const API_BASE =
  process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

// Converts relative paths (/media/...) into full URLs (http://127.0.0.1:8000/media/...)
export function toUrl(pathOrUrl) {
  if (!pathOrUrl) return null;
  return pathOrUrl.startsWith("http")
    ? pathOrUrl
    : `${API_BASE}${pathOrUrl}`;
}
