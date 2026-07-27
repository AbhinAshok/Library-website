import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="mx-auto flex max-w-4xl overflow-hidden rounded-md bg-white shadow-xl">

      <div className="flex items-center px-5 text-gray-500">
        <FaSearch />
      </div>

      <input
        type="text"
        placeholder="Search catalog for books, authors or subjects..."
        className="flex-1 p-5 outline-none"
      />

      <button className="bg-[#0F2747] px-8 text-white transition hover:bg-[#183C6B]">
        SEARCH
      </button>

    </div>
  );
}