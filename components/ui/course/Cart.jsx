import Link from "next/link";
import ImageComponent from "../Image";

const CourseCart = ({ course }) => {
  // const imgUrl = "/images/courses";

  return (
    <div
      className="border border-[#0000001A] rounded-3xl relative"
      key={course?.id}
    >
      <Link href={`/course/${course.xitemcode}`}>
        <ImageComponent imgUrl={course?.img} itemId={course.id} />
      </Link>
      <div className="bg-white rounded-b-3xl pt-2 px-6 pb-6">
        <Link
          href='#'
          className="flex items-start justify-between font-hindSliguri font-bold text-md text-[#1F1E1E] pt-2 pb-2 h-14 leading-[100%]"
        >
          {course?.title}
          <img src="/images/icons/arrow-up-right.png" alt="arrow" className="ml-2" />
        </Link>

        <div className="flex items-start">
          <div className="text-xl text-[#EE3373] font-extrabold text-right -mb-[5px]">
            টাকা
            <span className="pl-3">{course?.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
