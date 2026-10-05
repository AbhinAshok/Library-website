import Hero from "../components/home/Hero";
import Collections from "../components/home/Collections";
import Stats from "../components/home/Stats";
import FeaturedBooks from "../components/home/FeaturedBooks";
import BookOfMonth from "../components/home/BookOfMonth";
import EventsPreview from "../components/home/EventsPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import CTA from "../components/home/CTA";
import CelebrationBanner from "../components/home/CelebrationBanner";


export default function Home() {
  return (
    <>
      <Hero />
       
      
      
      <Collections />
      
      
      <FeaturedBooks />
      <BookOfMonth />
      <EventsPreview />
      
      
      
      <CTA />
    </>
  );
}