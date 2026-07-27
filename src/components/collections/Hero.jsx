import { motion } from "framer-motion";

export default function Hero() {

return(

<section className="bg-[#0F2747] py-24 text-white">

<div className="max-w-7xl mx-auto px-6">

<motion.h1

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

className="font-serif text-6xl"

style={{ color: "#D8B26A" }}

>

Library Collections

</motion.h1>

<p className="mt-6 max-w-2xl text-lg">

Explore thousands of books, journals and digital resources.

</p>

</div>

</section>

)

}