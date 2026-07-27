import events from "../../data/events.json";

import EventCard from "./EventCard";

import Container from "../common/Container";

export default function UpcomingEvents(){

return(

<section className="py-24">

<Container>

<h2 className="font-serif text-5xl">

Upcoming Events

</h2>

<div className="grid lg:grid-cols-2 gap-10 mt-12">

{

events.map(event=>(

<EventCard

key={event.id}

{...event}

/>

))

}

</div>

</Container>

</section>

)

}