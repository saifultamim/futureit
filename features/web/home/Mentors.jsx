"use client";
import { useState, React } from "react";
import Image from "next/image";
import Link from "next/link";
import { mentors, MentorsModal } from ".";
const Mentors = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section className="bg-[#FCFCF5] py-10">
        <div className="container w-11/12 lg:px-6 mx-auto">
          <div className="text-center leading-tight mb-8">
            <h2 className="font-siliguri text-3xl md:text-4xl font-bold text-[#1F1E1E] mb-3">
              আমাদের মেন্টরগণ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {mentors.length > 0 &&
              mentors?.map((mentor, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="block relative h-fit md:h-80 w-full md:w-64 border border-[#afacac33] shadow-lg rounded-lg"
                >
                  <div className="relative w-full md:w-[239px] mx-auto px-2 pt-3.5">
                    {mentor?.img ? (
                      <Image
                        src={mentor?.img}
                        width={239}
                        height={240}
                        alt={mentor?.name}
                        className="z-50 w-full rounded-lg"
                      />
                    ) : (
                      <Image
                        src="/images/no.jpg"
                        width={200}
                        height={200}
                        alt={mentor?.name}
                        className="z-50 w-full rounded-lg"
                      />
                    )}
                    <div className="bg-white flex flex-col items-center justify-center mt-[-16px] relative md:rounded-t-xl rounded-b-md text-center w-full p-2.5">
                      <h4
                        className={`font-inter text-[#1D2026]  ${
                          mentor?.name.length > 24 ? "text-sm" : "text-base"
                        } leading-5 font-semibold mb-1`}
                      >
                        {mentor?.name}
                      </h4>
                      <p
                        className="text-[#8C94A3] font-normal text-sm flex h-10 font-siliguri"
                        dangerouslySetInnerHTML={{
                          __html: mentor?.desc,
                        }}
                      ></p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="flex flex-wrap justify-start md:justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-3 font-siliguri">
            <p className="font-normal text-sm text-[#6E7485]">
              প্রশিক্ষকের অপেক্ষায় হাজার হাজার শিক্ষার্থী। এখন শেখানো শুরু করুন
              এবং উপার্জন শুরু করুন!
            </p>
            <button
              className="px-4 h-[32px] leading-[32px] flex items-center justify-center bg-[#EE3373] rounded-xl text-white font-medium text-sm"
              onClick={openModal}
            >
              প্রশিক্ষক হতে চান
              <i className="fa-solid fa-arrow-right ml-3 text-lg"></i>
            </button>
          </div>

          <MentorsModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </section>
    </>
  );
};
export default Mentors;
