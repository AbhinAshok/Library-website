import Container from "../common/Container";

export default function Hero() {
    return (
        <section className="bg-[#0F2747] text-white py-24">

            <Container>

                <h1 className="font-serif text-6xl"  style={{ color: "#D8B26A" }}>

                    Gallery

                </h1>

                <p className="mt-6 max-w-2xl text-lg text-gray-300">

                    Explore moments from our events,
                    community programs,
                    and reading activities.

                </p>

            </Container>

        </section>
    );
}