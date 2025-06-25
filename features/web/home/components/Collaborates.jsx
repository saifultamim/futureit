// const Collaborates = () => {
//   return (
//     <section className="bg-[#FDFCF6] py-8">
//       <div className="container w-11/12 lg:px-6 mx-auto ">
//         <fieldset className="border-2 border-[#EE3373] rounded-lg px-6 relative py-5">
//           <legend className="text-xl md:text-3xl font-semibold text-black font-siliguri pl-5 md:pl-8 pr-5 md:pr-6 relative inline-block">
//             Collaboration with
//             <span className="absolute top-3.5 left-0 w-2.5 h-2.5 bg-[#EE3373] rounded-full hidden md:inline-block"></span>
//             <span className="absolute top-3 right-0 w-2.5 h-2.5 bg-[#EE3373] rounded-full hidden md:inline-block"></span>
//           </legend>

//         </fieldset>
//       </div>
//     </section>
//   );
// };

// export default Collaborates;

"use client";

import img1 from "@/public/images/partners/brack.jpg";
import img2 from "@/public/images/partners/dbsl_logo.png";
import img3 from "@/public/images/partners/dg-bd.jpg";
import img4 from "@/public/images/partners/sl1.png";
import img5 from "@/public/images/partners/sl2.png";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Collaborates = () => {
  const partners = [
    { title: "brack", img: img1 },
    { title: "dbsl", img: img2 },
    { title: "dg-bd", img: img3 },
    { title: "sl1", img: img4 },
    { title: "sl2", img: img5 },
    { title: "dbsl", img: img2 },
    { title: "dg-bd", img: img3 },
    { title: "sl1", img: img4 },
  ];
  return (
    <section className="bg-[#FDFCF6] py-8">
      <div className="container w-11/12 lg:px-6 mx-auto ">
        <fieldset className="border-2 border-[#EE3373] rounded-lg px-6 relative py-5">
          <legend className="text-xl md:text-3xl font-semibold text-black font-siliguri pl-5 md:pl-8 pr-5 md:pr-6 relative inline-block">
            Collaboration with
            <span className="absolute top-3.5 left-0 w-2.5 h-2.5 bg-[#EE3373] rounded-full hidden md:inline-block"></span>
            <span className="absolute top-3 right-0 w-2.5 h-2.5 bg-[#EE3373] rounded-full hidden md:inline-block"></span>
          </legend>
          {/* ============================================== */}
          <div className="py-3 lg:py-5 w-60 h-auto lg:w-[1010px] md:w-[650px] mx-auto md:block">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={4}
              // =============
              //  centeredSlides={true}
              // navigation
              autoplay={{ delay: 5000 }}
              // ===============
              className="w-full"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 0 },
                400: { slidesPerView: 1, spaceBetween: 0 },
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 6, spaceBetween: 40 },
                1024: { slidesPerView: 6, spaceBetween: 50 },
              }}
            >
           
                {partners?.map((partner,idx) => (
                <SwiperSlide
                  key={idx}
                  className="my-auto h-full"
                >
                  <Image
                    src={partner?.img}
                    alt={partner?.title}
                    // placeholder="blur"
                    className="p-7 md:p-0 object-cover mx-auto"
                    width={200}
                    height={200}
                  />
                </SwiperSlide>
              ))}
          
            </Swiper>
          </div>

          {/* ============================================== */}
        </fieldset>
      </div>
    </section>
  );
};

export default Collaborates;
