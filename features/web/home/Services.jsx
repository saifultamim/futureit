"use client";

import { useState } from "react";
import { React,Video,servicesIcon,Image } from "./";

const Services = () => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(
    "https://www.youtube.com/embed/gScdRiOngAQ?si=CfYu-KYq1k_4RK2L"
  );




  return (
    <section className="bg-services py-10">
      <div className="w-11/12 lg:px-6 mx-auto">
        <div className="text-left leading-tight mb-8">
          <h2 className="font-siliguri text-3xl md:text-4xl font-bold text-[#1F1E1E] mb-3">
            আমাদের বিশেষ সেবা সমূহ
          </h2>
          <p className="text-[#605F62] font-inter text-base">
            আমাদের কোর্সগুলোতে জয়েন করে আপনার পেশাদার এবং ব্যক্তিগত বিকাশে গভীর
            উন্নতির অভিজ্ঞতা নিন।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <ul className="flex flex-col space-y-3 w-full lg:w-[330px] md:w-5/6">
            {servicesIcon?.map((item, idx) => (
              <li
                key={item?.id}
                className={`flex items-center space-x-2 rounded-md py-1.5 px-3 border cursor-pointer bg-secondary  `}
              >
                {/* Display only the icon for this specific item */}
                {item?.image && ( // Use the index to cycle through the icons
                  <div className="w-8 h-8">
                    <Image
                      src={item?.image} // Show the icon based on the index
                      alt="icon"
                      width={32}
                      height={32}
                    />
                  </div>
                )}

                <h4
                  className={`font-siliguri lg:text-lg md:text-base text-sm "text-black"`}
                >
                  {/* {item.xtitle} */} আমাদের বিশেষ সেবা সমূহ
                </h4>
              </li>
            ))}
          </ul>

          <div className="mt-6 lg:ml-16 md:mt-0 col-span-2">
            {selectedVideoUrl && <Video videoUrl={selectedVideoUrl} />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
