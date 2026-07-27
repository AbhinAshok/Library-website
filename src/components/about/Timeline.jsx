import timeline from "../../data/timeline.json";

export default function Timeline(){

return(

<section className="py-24 bg-[#F8F6F2]">

<div className="max-w-5xl mx-auto">

<h2 className="font-serif text-5xl text-center mb-16">

Library Journey

</h2>

<div className="space-y-10">

{

timeline.map((item,index)=>(

<div

key={index}

className="border-l-4 border-[#C8A35D] pl-8"

>

<h3 className="font-bold text-2xl">

{item.year}

</h3>

<h4 className="text-xl mt-2">

{item.title}

</h4>

<p className="text-gray-600 mt-3">

{item.description}

</p>

</div>

))

}

</div>

</div>

</section>

)

}