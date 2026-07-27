export default function CollectionCard({
    title,
    description,
    icon
}){

return(

<div className="rounded-lg border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<div className="text-3xl mb-4">

{icon}

</div>

<h3 className="font-serif text-2xl text-[#0F2747]">

{title}

</h3>

<p className="mt-3 text-gray-600">

{description}

</p>

</div>

)

}