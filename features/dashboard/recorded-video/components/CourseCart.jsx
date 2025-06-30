import Link from "next/link";
// import { ROUTE_CLAIM_CERTIFICATE } from "@/app/constant";
import { FiArrowRight } from "react-icons/fi";

const CourseCart = ({ course }) => {
  return (
    <div className="flex flex-col h-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15),0_15px_20px_rgba(0,0,0,0.15),0_25px_30px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden transition-transform transform ">
      <Link
        className="block focus:outline-none focus-visible:ring-2 border-b"
        href={`/stuportal/recorded-video/${course?.xitemcode}`}
      >
        <figure className="relative h-0 pb-[56.25%] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-contain"
            src="/images/logo.png"
            width="320"
            height="180"
            alt="Course"
          />
        </figure>
      </Link>
      <div className="flex-grow flex flex-col p-5">
        <div className="flex-grow">
          <header className="mb-6">
            <Link
              className="block focus:outline-none focus-visible:ring-2"
              href={`/stuportal/recorded-video/${course?.xitemcode}`}
            >
              <h3 className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold leading-snug transition duration-150 ease-in-out hover:text-blue-600">
                {course?.xdesc ?? ""}
              </h3>
            </Link>
          </header>
        </div>
        <div className="flex justify-end space-x-2">
          <Link
            className="text-sm inline-flex items-center justify-center gap-2 px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-[#EE2C73] focus:outline-none focus-visible:ring-2 hover:bg-[#EE2C73]/80 text-white font-bold"
            href={`/stuportal/recorded-video/${course?.xitemcode}`}
          >
            Continue Learning
            <FiArrowRight className="mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
