import news from "../../data/news.json";
import Container from "../common/Container";

export default function NewsSection() {
  return (
    <section className="py-24 bg-[#F8F6F2]">
      <Container>

        <h2 className="font-serif text-5xl">
          Latest News
        </h2>

        <div className="mt-12 space-y-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white p-6 shadow"
            >
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.summary}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}