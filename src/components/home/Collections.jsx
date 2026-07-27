import { useState } from "react";
import { asset } from "../../utils/asset";

export default function Collections() {
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  return (
    <>
      <section className="bg-[#F8F6F2] py-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2747]">
              Curated Collections
            </h2>

            <button
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#C8A35D] hover:text-[#a88645] transition-colors"
            >
              Browse All <span>→</span>
            </button>
          </div>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Featured */}
            <div className="relative md:col-span-2 rounded-2xl overflow-hidden shadow group min-h-[260px]">
              <img
                src={asset("images/collections/neermathalam3.jpg")}
                alt="Malayalam Literature"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="mb-3 inline-block rounded bg-[#C8A35D] px-3 py-1 text-xs font-bold text-white">
                  FEATURED
                </span>

                <h3 className="font-serif text-2xl text-white">
                  Malayalam Literature
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  Classical texts, poetry, and modern fiction celebrating Kerala's
                  literary heritage.
                </p>
              </div>
            </div>

            {/* Academic */}
            <div className="rounded-2xl bg-[#EAE9F5] p-6 flex flex-col justify-center min-h-[260px]">
              <h3 className="font-serif text-2xl text-[#0F2747]">
                Academic Reference
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Scholarly journals, encyclopedias, and university-level texts
                across disciplines.
              </p>
            </div>

            {/* Children's Corner */}
            <div className="rounded-2xl bg-white shadow flex items-center gap-4 p-5">
              <img
                src={asset("images/collections/balabhumi1.jpg")}
                alt="Children's Corner"
                className="h-16 w-16 rounded-lg object-cover"
                loading="lazy"
              />

              <div>
                <h3 className="font-serif text-lg text-[#0F2747]">
                  Children's Corner
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Fostering a love for reading with illustrated tales and
                  educational resources.
                </p>
              </div>
            </div>

            {/* Digital Archives */}
            <button
              onClick={() => setShowArchiveModal(true)}
              className="relative rounded-2xl bg-[#0F2747] p-6 flex flex-col justify-between min-h-[160px] text-left overflow-hidden group transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl text-[#C8A35D]">📖</span>

                <span className="text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg text-white">
                  Digital Archives
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  Browse digitized books, rare manuscripts, photographs, and archival collections from our library in future updates.
                </p>
              </div>
            </button>

            {/* Optional Image */}
            <div className="rounded-2xl overflow-hidden shadow min-h-[160px]">
              <img
                src={asset("images/collections/academic2.jpg")}
                alt="Library Collection"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Modal */}
      {showArchiveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">

            <div className="text-center text-5xl">📚</div>

            <h3 className="mt-4 text-center font-serif text-3xl text-[#0F2747]">
              Digital Archives
            </h3>

            <p className="mt-5 text-center leading-relaxed text-gray-600">
              Our Digital Archives are currently under development and will be
              available in the next version of the website.
            </p>

            <div className="mt-6 rounded-xl bg-[#F8F6F2] border border-[#C8A35D]/30 p-5">
              <h4 className="font-semibold text-[#0F2747]">
                📖 Physical Archives Available
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Visitors can access rare books, manuscripts, newspapers,
                magazines, and historical documents by visiting the library
                during working hours.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Please contact the <strong>Library Committee Members</strong>
                {" "}for assistance in accessing the archive collection.
              </p>
            </div>

            <button
              onClick={() => setShowArchiveModal(false)}
              className="mt-8 w-full rounded-lg bg-[#0F2747] py-3 font-semibold text-white hover:bg-[#173964] transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}