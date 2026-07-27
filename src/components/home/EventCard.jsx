import { asset } from "../../utils/asset";

export default function EventCard({ title, date, image }) {
  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">

      <div className="p-6">
        <h3 className="font-serif text-2xl text-[#0F2747]">
          {title}
        </h3>

        <p className="text-[#C8A35D] mt-3">
          {date}
        </p>
      </div>

      <img
        src={asset(image)}
        alt={title}
        className="w-full h-56 object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = asset("images/events/placeholder.jpg");
        }}
      />

    </div>
  );
}