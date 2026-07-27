// components/about/Hero.jsx

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="bg-[#F8F6F2] py-28">

            <div className="max-w-7xl mx-auto px-6">

                <motion.h1
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    className="font-serif text-6xl text-[#0F2747]"
                >
                    About Our Library
                </motion.h1>

                <p className="mt-6 max-w-3xl text-gray-600 text-lg">
                    Preserving knowledge, inspiring generations,
                    and building a stronger reading community.
                </p>

            </div>

        </section>
    );
}