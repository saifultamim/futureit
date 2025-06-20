import Link from "next/link";
import ImageComponent from "../Image";
import arrow from "@/public/images/icons/arrow-up-right.png";
import Image from "next/image";

const CourseCart = ({ course }) => {
  return (
    <div
      className="border border-[#0000001A] rounded-3xl relative"
      key={course?.id}
    >
      <Link href={`/course/${course?.id}`}>
        <ImageComponent imgUrl={course?.img} itemId={course.id} />
      </Link>
      <div className="bg-white rounded-b-3xl pt-2 px-6 pb-6">
        <Link
          href={`/course/${course?.id}`}
          className="flex items-start justify-between font-siliguri font-bold text-md text-[#1F1E1E] pt-2 pb-2 h-14 leading-[100%]"
        >
          {course?.title}
          <Image src={arrow} alt="arrow" className="ml-2" />
        </Link>

        <div className="flex items-start font-siliguri cursor-default">
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
