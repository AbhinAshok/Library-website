export default function FeaturedCollection() {
  return (
    <section className="mt-20 overflow-hidden rounded-2xl bg-[#0F2747] text-white">
      <div className="grid lg:grid-cols-2">

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

          <h2 className="font-serif text-4xl md:text-5xl text-[#D8B26A]">
            Malayalam Literature
          </h2>

          <p className="mt-8 text-base md:text-lg leading-relaxed text-gray-200">
            Discover first editions, rare manuscripts, and historical
            publications that preserve Kerala's rich literary heritage.
          </p>

          <button className="mt-8 w-fit rounded-lg bg-[#C8A35D] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-[#b8924d]">
            Explore Collection
          </button>

        </div>

        {/* Image */}
        {/* <div className="min-h-[300px]">
          <img
            src="/images/collections/featured.jpg"
            alt="Rare Malayalam Literature Collection"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div> */}

      </div>
    </section>
  );
}