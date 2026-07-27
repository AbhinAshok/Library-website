import {
FaBook,
FaFlask,
FaPalette,
FaDatabase
} from "react-icons/fa";

import CollectionCard from "./CollectionCard";

export default function Collections(){

const collections=[

{
title:"Literature & History",
description:"Classical texts and historical archives.",
icon:<FaBook/>
},

{
title:"Sciences",
description:"Research journals and textbooks.",
icon:<FaFlask/>
},

{
title:"Arts & Culture",
description:"Visual arts and cultural collections.",
icon:<FaPalette/>
},

{
title:"Digital Archives",
description:"Digitized manuscripts and online resources.",
icon:<FaDatabase/>
}

]

return(

<section className="bg-[#F8F6F2] py-24">

<div className="mx-auto max-w-7xl px-6">

<h2 className="font-serif text-5xl text-[#0F2747]">

Curated Collections

</h2>

<div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

{

collections.map((item,index)=>(

<CollectionCard

key={index}

{...item}

/>

))

}

</div>

</div>

</section>

)

}