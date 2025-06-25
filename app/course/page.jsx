
import { CourseCart, courses } from "@/features/web/home";
import { getPageTitle } from "@/utils/MetaData";

export const generateMetadata = () => ({
  title: getPageTitle("course"),
});

const CoursePage = () => {
  return (
    <div>
      <section className="bg-hero">
        <div className="container px-3">
          <div className="flex flex-col flex-wrap justify-center items-center py-14  px-8 font-siliguri text-center">
            <h2 className="text-lg md:text-5xl font-semibold text-[#050400]">
              আপকামিং লাইভ ব্যাচ
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#FDFCF6] py-8">
        <div className="container   font-siliguri w-11/12 lg:px-6 mx-auto">
          <div className="text-left leading-tight mb-8">
            <h2 className="font-siliguri text-3xl font-bold text-[#1F1E1E] mb-3 md:text-start text-center">
              কোর্স সমূহ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
            {courses?.map((course, idx) => (
              <CourseCart key={idx} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default CoursePage;
