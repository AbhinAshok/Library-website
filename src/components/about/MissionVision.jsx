import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision(){

return(

<section className="py-24">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

<div className="bg-white p-10 rounded-xl shadow">

<FaBullseye className="text-4xl text-[#C8A35D]"/>

<h2 className="font-serif text-4xl mt-6">

Our Mission

</h2>

<p className="mt-6 text-gray-600">

Provide inclusive access to knowledge,
preserve literature,
and cultivate lifelong learning.

</p>

</div>

<div className="bg-white p-10 rounded-xl shadow">

<FaEye className="text-4xl text-[#C8A35D]"/>

<h2 className="font-serif text-4xl mt-6">

Our Vision

</h2>

<p className="mt-6 text-gray-600">

Become one of Kerala's leading
community knowledge centres.

</p>

</div>

</div>

</section>

)

}