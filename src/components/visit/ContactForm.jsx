import Container from "../common/Container";

export default function ContactForm() {
  return (
    <section className="py-20">
      <Container>

        <h2 className="font-serif text-5xl mb-10">
          Send us a Message
        </h2>

        <form className="space-y-6 max-w-3xl">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border p-4"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full rounded-lg border p-4"
          />

          <button
            className="rounded-lg bg-[#0F2747] px-8 py-4 text-white hover:bg-[#183C6B]"
          >
            Send Message
          </button>

        </form>

      </Container>
    </section>
  );
}