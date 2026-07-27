import Container from "./Container";

export default function PageHero({
  title,
  description,
  background = "bg-[#0F2747]",
}) {
  return (
    <section className={`${background} py-24 text-white`}>
      <Container>
        <h1 className="font-serif text-5xl md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}