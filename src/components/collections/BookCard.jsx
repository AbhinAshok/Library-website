export default function BookCard({

title,

author,

category,

cover,

status

}){

return(

<div className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-xl duration-300">

<img

src={cover}

className="h-72 w-full object-cover group-hover:scale-105 duration-500"

/>

<div className="p-6">

<span className="text-sm text-[#C8A35D]">

{category}

</span>

<h3 className="font-serif text-2xl mt-2">

{title}

</h3>

<p className="text-gray-500">

{author}

</p>

<span className={`mt-4 inline-block rounded-full px-3 py-1 text-sm ${
status==="Available"
?"bg-green-100 text-green-700"
:"bg-red-100 text-red-600"
}`}>

{status}

</span>

</div>

</div>

)

}