import Hero from "../components/visit/Hero";
import ContactCards from "../components/visit/ContactCards";
import OpeningHours from "../components/visit/OpeningHours";
import MapSection from "../components/visit/MapSection";
import ContactForm from "../components/visit/ContactForm";
import CTA from "../components/home/CTA";

export default function Visit() {
  return (
    <>
      <Hero />
      <ContactCards />
      <OpeningHours />
      <MapSection />
      <ContactForm />
      
      <CTA />
    </>
  );
}