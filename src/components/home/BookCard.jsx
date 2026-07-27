import { asset } from "../../utils/asset";

export default function BookCard({ title, author, cover, category }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
        src={asset(cover)}
        alt={`Cover of ${title} by ${author}`}
        className="h-72 w-full object-cover bg-gray-100"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = asset("images/books/literature4.jpg");
        }}
      />

      <div className="p-5">
        <h3 className="font-serif text-xl text-[#0F2747]">{title}</h3>
        <p className="text-gray-600">{author}</p>
        <span className="text-sm text-[#C8A35D]">{category}</span>
      </div>
    </div>
  );
}