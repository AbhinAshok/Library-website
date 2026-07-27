import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/library-hero4.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6">
        <div className="mx-auto w-full max-w-5xl text-center">

          {/* English Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-serif
              leading-tight
              text-[#ffff]
              text-2xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Welcome to the Archives of Knowledge
          </motion.h1>

          {/* Malayalam Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mt-8
              font-bold
              leading-snug
              text-[#E5C88B]
              text-4xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              text-[#D8B26A]
            "
          >
            ഡോ. സുജാതകുമാരി മെമ്മോറിയൽ ഗ്രന്ഥശാല
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="
              mx-auto
              mt-8
              max-w-2xl
              px-2
              text-base
              sm:text-lg
              lg:text-xl
              leading-relaxed
              text-gray-200
            "
          >
            A scholarly haven dedicated to the preservation of literature,
            history and academic excellence.
          </motion.p>

        </div>
      </div>
    </section>
  );
}