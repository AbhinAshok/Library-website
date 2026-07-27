import contact from "../../data/contact.json";
import Container from "../common/Container";

export default function OpeningHours() {
  return (
    <section className="py-20">
      <Container>

        <h2 className="font-serif text-5xl">
          Opening Hours
        </h2>

        <div className="mt-8 rounded-xl bg-[#0F2747] p-10 text-white">

          <div className="flex justify-between">
            <span>{contact.workingDays}</span>
            <span>{contact.hours}</span>
          </div>

        </div>

      </Container>
    </section>
  );
}