
"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "@/utils/data/home/testimonial";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="py-16 bg-testimonial">
      <div className="container w-11/12 lg:px-6 mx-auto">
        <div className="text-center leading-tight mb-8">
          <h2 className="font-siliguri text-3xl md:text-4xl font-bold text-[#1F1E1E] mb-3">
            শিক্ষার্থীরা যা বলেছেন
          </h2>
          <p className="text-[#605F62] font-inter text-base">
            আমাদের শিক্ষার্থীদের কাছ থেকে শুনুন ফিউচার আইটিতে সম্পর্কে তাদের
            অভিজ্ঞতা।
          </p>
        </div>

        <div
          className="bg-white shadow-xl py-4 rounded-lg relative"
          id="testimonial"
        >
          {/* Prev Button */}
          <button
            className={`swiper-button-prev-custom absolute md:left-2 left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#f26f9d] text-white hover:bg-secondary shadow md:-mt-0 -mt-4 ${
              isBeginning ? "opacity-40 cursor-not-allowed" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <IoIosArrowBack size={24} />
          </button>

          {/* Next Button */}
          <button
            className={`swiper-button-next-custom absolute md:right-2 right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#f26f9d] text-white hover:bg-secondary shadow md:-mt-0 -mt-4 ${
              isEnd ? "opacity-40 cursor-not-allowed" : ""
            }`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <IoIosArrowForward size={24} />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            centeredSlides
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
            className="p-5 lg:p-10 w-10/12 mx-auto"
          >
            {testimonials?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-wrap lg:flex-nowrap justify-start items-center h-auto lg:h-[400px]">
                  <div className="w-full lg:w-72 h-64 lg:h-full flex justify-center items-center mb-4 lg:mb-0">
                    {testimonial?.ximage ? (
                      <Image
                        src={testimonial?.ximage}
                        alt="testimonial"
                        width={288}
                        height={288}
                        className="w-64 h-full lg:w-full rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-64 h-full lg:w-full bg-gray-200 rounded-lg"></div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center py-2 px-2 md:px-[28px] relative">
                    <i className="fa-solid fa-quote-left bg-[#FDE9CA] rounded-full p-3 absolute top-3"></i>
                    <p
                      className="font-inter text-sm font-semibold text-gray-800/90 lg:leading-[26px] pt-3 mb-6 indent-14"
                      dangerouslySetInnerHTML={{
                        __html: testimonial?.xdescription,
                      }}
                    ></p>
                    <div className="mt-auto">
                      <strong className="font-hindSliguri font-semibold text-[23px]">
                        {testimonial?.xtitle ?? ""}
                      </strong>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
