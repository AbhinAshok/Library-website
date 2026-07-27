import categories from "../../data/categories.json";

export default function FilterBar(){

return(

<div className="flex flex-wrap gap-4 mt-12">

{

categories.map(category=>(

<button

key={category.id}

className="px-6 py-3 rounded-full border hover:bg-[#0F2747] hover:text-white transition"

>

{category.name}

</button>

))

}

</div>

)

}