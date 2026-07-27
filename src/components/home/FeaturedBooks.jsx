import books from "../../data/books.json";

import BookCard from "./BookCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function FeaturedBooks() {

    return (

        <section className="py-24 bg-[#F8F6F2]">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="font-serif text-5xl text-[#0F2747]">

                    New Arrivals

                </h2>

                {/* <SectionHeader
                    title="New Arrivals"
                    subtitle="Browse the newest additions to our library."
                    actionLabel="View All"
                    actionLink="/collections"
                /> */}

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 }
                    }}
                    className="mt-12"
                >

                    {
                        books.map((book, index) => (

                            <SwiperSlide key={index}>

                                <BookCard {...book} />

                            </SwiperSlide>

                        ))
                    }

                </Swiper>

            </div>

        </section>

    )

}