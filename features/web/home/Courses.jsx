import { CourseCart,courses} from "./";

export default function Courses() {
  const courseLength = courses ? Object.keys(courses).length : 0;


  const displayedCourses = courses ? courses.slice(0,6) : "";

  return (
    <>
      <section className="bg-white py-10 md:py-16">
        <div className="container w-11/12 lg:px-6 mx-auto">
          <div className="text-center">
            <h2 className="font-siliguri text-3xl md:text-4xl font-bold text-[#1F1E1E] mb-3">
              জনপ্রিয় কোর্সসমূহ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {displayedCourses.length > 0 &&
              displayedCourses.map((course, index) => (
                <CourseCart key={index} course={course} />
              ))}
          </div>

          {courseLength > 6 ? (
            <div className="text-center mt-3">
              <button
                className="btn py-1 mt-5"
                onClick={() => router.push("/course")}
              >
                {" "}
                View More{" "}
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
