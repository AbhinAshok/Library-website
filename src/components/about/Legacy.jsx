// components/about/Hero.jsx

import { motion } from "framer-motion";
import { asset } from "../../utils/asset";

export default function Hero() {
  return (
    <section className="bg-[#F8F6F2] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-[#0F2747]">
              Honoring a Legacy of Knowledge.
            </h1>

            <p className="mt-6 max-w-xl text-gray-600 text-base sm:text-lg leading-relaxed">
              The Dr. Sujathakumari Memorial Library stands as a testament to
              a life dedicated to literature, education, and community
              enlightenment. We bridge the historical depth of archives with
              the accessibility of modern digital resources.
            </p>
          </motion.div>

          {/* Right: Framed "document photo" card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-lg rounded-sm overflow-hidden"
          >
            {/* Top caption bar */}
            <div className="bg-[#1a1a1a] px-4 py-2">
              <span className="text-[10px] tracking-widest text-gray-300 uppercase">
                Documents Photo
              </span>
            </div>

            {/* Image */}
            <img
              src={asset("images/about/sujathakumari.jpg")}
              alt="Dr. Sujathakumari at her writing desk in the library"
              className="w-full h-[420px] object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/about/founder-fallback.jpg";
              }}
            />

            {/* Bottom exposure-info bar */}
            <div className="bg-[#F0EDE6] px-4 py-2 flex justify-end">
              <span className="text-[10px] tracking-wide text-gray-500">
                Dr. Sujatha Kumari
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}