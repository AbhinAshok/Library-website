import Container from "../common/Container";

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-100">
      <Container>

        <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-[#0F2747]">
          Find Us
        </h2>

        <p className="mb-8 text-gray-600">
          Rajagiri road Mancode, Pathanamthitta District, Kerala, India
        </p>

        <iframe
          title="Library Location"
          src="https://www.google.com/maps/embed?pb=PASTE_YOUR_ACTUAL_EMBED_STRING_HERE"
          className="w-full h-[400px] sm:h-[500px] rounded-xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

      </Container>
    </section>
  );
}