export default function GalleryPreview(){

const images=[

"/images/gallery/1.jpg",

"/images/gallery/2.jpg",

"/images/gallery/3.jpg",

"/images/gallery/4.jpg"

]

return(

<section className="py-24 bg-[#F8F6F2]">

<div className="max-w-7xl mx-auto">

<h2 className="font-serif text-5xl">

Gallery

</h2>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

{

images.map((img,index)=>(

<img

key={index}

src={img}

className="rounded-xl hover:scale-105 duration-300 cursor-pointer"

/>

))

}

</div>

</div>

</section>

)

}