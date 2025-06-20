import { courseLessons, courseVideo } from "@/utils/data/courseLessons";
import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
const SpecificCourse = () => {

  return (
    <div>
      <section className=" bg-white py-6">
        <div className="containe w-11/12 lg:px-6 mx-auto">
          <div className="flex flex-wrap md:flex-nowrap space-y-5 md:space-y-0 md:space-x-5 py-6">
            <div className="w-full md:w-2/3">
              <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl leading-[120%] text-[#101828] mb-2 font-siliguri">
                Mastering Digital Marketing (Offline) Course
              </h1>
              <div
                className="font-normal text-sm md:text-base text-[#1d2939] font-siliguri leading-[164.3%]"
                dangerouslySetInnerHTML={{
                  __html: "Mastering Digital Marketing (Offline) Course",
                }}
              ></div>

              <div className="w-full mt-10 mb-8">
                <h3 className="font-siliguri text-xl md:text-2xl font-semibold text-[#1F1E1E]">
                  স্টাডি প্ল্যান
                </h3>
                <div className="border-b border-gray-200 py-[6px] mb-6"></div>
                <ul>
                  {courseLessons?.map((content) => (
                    <li
                      className="flex items-center mb-4 cursor-pointer font-roboto text-gray-800 text-sm md:text-base"
                      key={content.xlesson}
                    >
                      <FaRegDotCircle className="inline-block text-xs md:text-sm mr-2" />

                      <span
                        className="text-xs md:text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: content.xdesc,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full mt-10 mb-8">
                <h3 className="font-siliguri text-xl md:text-2xl font-semibold text-[#1F1E1E]">
                  প্রজেক্টস
                </h3>
                <div className="border-b border-gray-200 py-[6px] mb-6"></div>
              </div>

              <div className="w-full mb-20">
                <h3 className="font-siliguri text-xl md:text-2xl font-semibold text-[#1F1E1E]">
                  ইন্সট্রাক্টর
                </h3>
                <div className="border-b border-gray-200 py-[8px] mb-6"></div>
              </div>
            </div>

            <div className="w-full md:flex-1">
              <div className="bg-white overflow-hidden relative pt-[56.25%] mb-4">
                <iframe
                  src={courseVideo?.xvideo_link || ""}
                  className="w-full absolute top-0 left-0 bottom-0 right-0 h-full border-none rounded-lg bg-gray-100"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col space-y-2 w-full font-siliguri">
                <p className="text-xl md:text-2xl font-semibold">৳ 27500</p>
                <button className="font-siliguri text-white w-full leading-normal py-3 bg-secondary rounded-lg font-bold text-lg">
                  ব্যাচে ভর্তি হোন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecificCourse;
