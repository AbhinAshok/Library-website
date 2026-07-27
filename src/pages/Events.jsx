import Hero from "../components/events/Hero";
import UpcomingEvents from "../components/events/UpcomingEvents";
import NewsSection from "../components/events/NewsSection";
import CTA from "../components/home/CTA";

export default function Events() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <NewsSection />
      <CTA />
    </>
  );
}