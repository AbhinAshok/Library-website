import { motion } from "framer-motion";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="bg-[#0F2747] py-24 text-white">
      <Container>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-6xl"
          style={{ color: "#D8B26A" }}
        >
          Visit Our Library
        </motion.h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          We'd love to welcome you. Explore our collections,
          reading spaces, and community events.
        </p>

      </Container>
    </section>
  );
}