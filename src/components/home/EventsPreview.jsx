import events from "../../data/events.json";
import EventCard from "./EventCard";

export default function EventsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2747]">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {events.map((item, index) => (
            <EventCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}