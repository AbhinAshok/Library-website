import Hero from "../components/collections/Hero";
import SearchBar from "../components/collections/SearchBar";
import FilterBar from "../components/collections/FilterBar";
import FeaturedCollection from "../components/collections/FeaturedCollection";
import BookGrid from "../components/collections/BookGrid";
import Pagination from "../components/collections/Pagination";
import BorrowGuide from "../components/collections/BorrowGuide";
import CTA from "../components/home/CTA";

export default function Collections() {
  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-6">
        {/* <SearchBar /> */}

        <FilterBar />

        <FeaturedCollection />

        <BookGrid />

        {/* <Pagination /> */}
      </div>

      {/* <BorrowGuide /> */}

      <CTA />
    </>
  );
}