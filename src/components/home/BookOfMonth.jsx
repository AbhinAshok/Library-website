export default function BookOfMonth() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">

        <img
          src="/images/books/Wings_of_fire_2.png"
          alt="Cover of Wings of Fire"
          className="rounded-xl shadow-xl w-full h-auto object-cover"
          loading="lazy"
        />

        <div>
          <h4 className="uppercase tracking-widest text-[#C8A35D] text-sm font-semibold">
            Editor's Pick
          </h4>

          <h2 className="font-serif text-4xl sm:text-5xl mt-4 text-[#0F2747]">
            Book Of The Month
          </h2>

          <p className="mt-6 text-gray-600 max-w-md">
            Discover a timeless literary masterpiece selected by our librarians.
          </p>

          <button className="mt-8 bg-[#0F2747] text-white px-6 py-3 rounded hover:bg-[#0a1c33] transition-colors">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}