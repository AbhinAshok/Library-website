import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contact from "../../data/contact.json";
import ContactCard from "./ContactCard";
import Container from "../common/Container";

export default function ContactCards() {
  return (
    <section className="py-20 bg-[#F8F6F2]">
      <Container>

        <div className="grid md:grid-cols-3 gap-8">

          <ContactCard
            icon={<FaPhoneAlt />}
            title="Phone"
            value={contact.phone}
          />

          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value={contact.email}
          />

          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Address"
            value={contact.address}
          />

        </div>

      </Container>
    </section>
  );
}