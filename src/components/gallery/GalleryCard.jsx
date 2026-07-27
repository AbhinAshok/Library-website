import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { asset } from "../../utils/asset";

export default function GalleryCard({ images = [], title }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-100 flex items-center justify-center h-72">
              <img
                src={asset(src)}
                alt={`${title} photo ${i + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = asset("images/gallery/placeholder.jpg");
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-5">
        <h3 className="font-serif text-xl text-[#0F2747]">{title}</h3>
      </div>

    </div>
  );
}