import CourseAlert from "@/features/dashboard/recorded-video/components/CourseAlert";
 import CourseCart from "@/features/dashboard/recorded-video/components/CourseCart";





// export default function RecordedVideo({ courses=[{xitemcode:"1001",xdesc:'xdesc1'}] }) {
export default function RecordedVideo({ courses }) {
  if (!courses || courses.length === 0) {
    return (
      <div className="max-w-screen-lg ml-4 mb-6 md:ml-4 lg:mx-auto bg-white shadow-lg rounded-lg px-5 py-5">
        <div className="flex flex-wrap gap-6">
          <div className="w-full mb-6">
            <CourseAlert />
          </div>
          <div
            className="flex-1 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold text-lg">No course found</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg ml-4 mb-6 md:ml-4 lg:mx-auto bg-white shadow-lg rounded-lg px-5 py-5">
      <div className="flex flex-wrap gap-6">
        <div className="w-full mb-6">
          <CourseAlert />
        </div>

        {/* Ribbon Section: "Your Access Courses" */}
        <div className="w-full text-center">
          <div className="relative inline-block bg-[#EE2C73] text-white py-2 px-4 text-center font-semibold rounded-t-lg mb-4 shadow-md">
            Your Access {courses?.length === 1 ? "Course" : "Courses"}
            <div className="absolute top-full left-0 w-0 h-0 border-t-[12px] border-t-[#EE2C73] border-l-[12px] border-l-transparent"></div>
            <div className="absolute top-full right-0 w-0 h-0 border-t-[12px] border-t-[#EE2C73] border-r-[12px] border-r-transparent"></div>
          </div>
        </div>

        <div className="w-full">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center`}
          >
            {courses?.map((course) => (
              <div key={course?.xitemcode} className="max-w-xs mx-auto w-full">
                <CourseCart course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   const apiUrl = process.env.NEXT_PUBLIC_STUPORTAL_API_URL;

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   try {
//     const loggedInStudentId = session.user.id;

//     const response = await fetch(
//       `${apiUrl}/recorded-video-course?studentId=${loggedInStudentId}`
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const courses = await response.json();
//     return {
//       props: {
//         courses,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {},
//     };
//   }
// }
