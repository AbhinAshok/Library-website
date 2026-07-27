import {
FaCalendarAlt,
FaMapMarkerAlt
} from "react-icons/fa";

export default function EventCard({

title,

date,

location,

image

}){

return(

<div className="rounded-xl overflow-hidden bg-white shadow">

<img

src={image}

className="h-60 w-full object-cover"

/>

<div className="p-6">

<h2 className="font-serif text-2xl">

{title}

</h2>

<div className="mt-4 flex items-center gap-2">

<FaCalendarAlt/>

{date}

</div>

<div className="mt-2 flex items-center gap-2">

<FaMapMarkerAlt/>

{location}

</div>

<button className="mt-6 bg-[#0F2747] text-white px-6 py-3 rounded">

Read More

</button>

</div>

</div>

)

}