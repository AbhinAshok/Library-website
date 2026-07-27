import { useState } from "react";

export default function CTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="bg-[#0F2747] py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="font-serif text-5xl text-[#D8B26A]">
            Become A Library Member
          </h2>

          <p className="mt-6 text-lg">
            Enjoy access to thousands of books, research resources, and cultural
            events.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-10 rounded bg-[#C8A35D] px-8 py-4 font-semibold text-black transition hover:bg-[#b78f4d]"
          >
            Join Today
          </button>
        </div>
      </section>

      {/* Modal */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">

      <div className="mb-4 text-5xl">📚</div>

      <h3 className="font-serif text-2xl text-[#0F2747]">
        Membership Registration
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Online membership registration is currently under development and will
        be available in the next version of our website.
      </p>

      <div className="mt-6 rounded-xl border border-[#C8A35D]/30 bg-[#F8F6F2] p-4">
        <p className="font-semibold text-[#0F2747]">
          ✅ Offline Registration is Now Open
        </p>

        <p className="mt-2 text-sm text-gray-600">
          You can visit the library and complete your membership registration
          offline. Please contact any of our committee members for assistance
          and further details.
        </p>
      </div>

      <button
        onClick={() => setShowModal(false)}
        className="mt-8 rounded-lg bg-[#0F2747] px-6 py-3 text-white transition hover:bg-[#15345f]"
      >
        Close
      </button>

    </div>
  </div>
)}
    </>
  );
}