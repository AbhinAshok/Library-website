export default function EventCard({title,date,image}){

return(

<div className="rounded-xl overflow-hidden shadow">



<div className="p-6">

<h3 className="font-serif text-2xl">

{title}

</h3>

<p className="text-[#C8A35D] mt-3">

{date}

</p>

<img src={image}/>

</div>

</div>

)

}