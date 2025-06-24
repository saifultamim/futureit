import { mentors } from "@/utils/data/home/mentors";
import Image from "next/image";
const Teacher = ({ params }) => {
  console.log("teacher params : ", params);
  const mentor = mentors.find((m) => m.id.toString() === params.id);
  console.log('find teacher ',mentor)
  return (
    <>
      <section className="course-details-wrap bg-white md:py-10 ">
      <div className="container md:w-11/12 mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap lg:gap-16 md:gap-5 md:py-6">
          <div className="lg:flex-1 mx-auto">
            <div className="bg-white overflow-hidden relative mb-4">
              <Image
                src={mentor?.img}
                width={2000}
                height={2000}
                alt={mentor?.id}
                className="z-50 w-full rounded-lg  mx-auto"
              />
            </div>

            {/* <div className="flex flex-col space-y-2 w-full font-siliguri border border-red-600"></div> */}
          </div>
          <div className="lg:w-2/3 md:w-3/4">
            <h1 className="font-semibold text-5xl  text-[#101828] mb-3 font-siliguri">
              {mentor?.name}
            </h1>
            <div
              className="font-normal text-base color-[#1d2939] font-siliguri"
              dangerouslySetInnerHTML={{
                __html: mentor?.desc,
              }}
            ></div>

            <div className="w-full mt-10 mb-8">
              <h3 className="font-siliguri text-xl font-semibold text-[#1F1E1E]">
                About {mentor?.name}
              </h3>
              <div className="border-b border-gray-200 py-1 mb-6"></div>
              <div
                className="font-siliguri text-gray-600 "
                dangerouslySetInnerHTML={{
                  __html: mentor?.desc2,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Teacher;
