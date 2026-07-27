import { useState } from "react";

import gallery from "../../data/gallery.json";

import GalleryCard from "./GalleryCard";

import CategoryFilter from "./CategoryFilter";

import Container from "../common/Container";

export default function GalleryGrid(){

const [selected,setSelected]=useState("All");

const filtered=

selected==="All"

?gallery

:gallery.filter(

item=>item.category===selected

);

return(

<section className="py-24">

<Container>

<CategoryFilter

selected={selected}

setSelected={setSelected}

/>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

{

filtered.map(image=>(

<GalleryCard

key={image.id}

{...image}

/>

))

}

</div>

</Container>


</section>

)

}