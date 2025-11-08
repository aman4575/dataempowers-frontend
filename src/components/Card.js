export default function Card({ title, content, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-blue-700 mb-3">{title}</h3>
      <p className="text-gray-700 flex-grow mb-4">{content}</p>
      <div className="mt-auto">{children}</div>
    </div>
  );
}
