import { useState } from "react";

const categories = [
    "All",
    "Events",
    "Activities",
    // "Programs"
];

export default function CategoryFilter({

selected,

setSelected

}){

return(

<div className="flex gap-4 flex-wrap">

{

categories.map(category=>(

<button

key={category}

onClick={()=>setSelected(category)}

className={`px-5 py-2 rounded-full border

${selected===category

?"bg-[#0F2747] text-white"

:"bg-white"

}

`}

>

{category}

</button>

))

}

</div>

)

}