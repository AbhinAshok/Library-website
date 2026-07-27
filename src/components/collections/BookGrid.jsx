import books from "../../data/books.json";

import BookCard from "./BookCard";

export default function BookGrid(){

return(

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

{

books.map(book=>(

<BookCard

key={book.id}

{...book}

/>

))

}
<p className="mt-16 text-center text-gray-600 font-serif text-lg">
  For more books, visit our library.
</p>

</div>

)

}