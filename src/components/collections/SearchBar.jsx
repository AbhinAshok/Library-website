import { FaSearch } from "react-icons/fa";

export default function SearchBar(){

return(

<div className="max-w-6xl mx-auto -mt-10 relative z-10">

<div className="bg-white rounded-xl shadow-lg flex">

<input

placeholder="Search books, authors..."

className="flex-1 p-5 outline-none"

/>

<button className="bg-[#0F2747] text-white px-8">

<FaSearch/>

</button>

</div>

</div>

)

}