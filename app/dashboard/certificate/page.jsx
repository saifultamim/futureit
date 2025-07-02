// import Link from "next/link";

// import { redirect } from "next/navigation";

// import Comingsoon from "@/components/ui/ComingSoon";
// import ManageExam from "@/features/dashboard/exam/components/ManageExam";

// const Breadcrumb = () => {
//   return (
//     <nav className="flex items-center space-x-1 text-sm text-gray-400 mb-8">
//       <Link
//         href="/student/dashboard"
//         className="hover:text-blue-600 transition-all"
//       >
//         Home
//       </Link>
//     </nav>
//   );
// };

// const CertificatePage = async () => {
//   const session = {user:{id:1}};
//   if (!session?.user) {
//     redirect("/login");
//   }

//   return (
//     <Comingsoon />
  
//   );
// };

// export default CertificatePage;




'use client'
import React, { useEffect, useState, useCallback, useRef } from "react";
import CertificateDesign from "@/features/dashboard/CertificateDesign";



export default function DownloadCertificate({ courses, studentId }) {
  const [formErrors, setFormErrors] = useState({});
  const [filterFormData, setFilterFormData] = useState({
    courseCode: "",
    batch: "",
    lesson: "",
    studentId: studentId,
  });
  const [batchData, setBatchData] = useState([]);
  const [lessons, setLesson] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_STUPORTAL_API_URL;

  const [certificateDataLength, setCertificateDataLength] = useState(0);
  const [certificateData, setCertificateData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState(true);

  const certificateRef = useRef(null);

  // When coursecode has in formdata then fetch course wise batch data.
  const fetchBatchData = async () => {
    if (filterFormData.courseCode) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseCode: filterFormData.courseCode,
          studentId: studentId,
          bizid: BIZID,
        }),
      };
      const response = await fetch(`${apiUrl}/course-wise-batch`, options);

      const batches = await response.json();
      setBatchData(batches.data);
    }
  };

  const fetchLesson = async () => {
    if (filterFormData.courseCode) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseCode: filterFormData.courseCode,
          bizid: BIZID,
        }),
      };

      const response = await fetch(`${apiUrl}/course-wise-lesson`, options);
      const data = await response.json();

      setLesson(data);
    }
  };

  useEffect(() => {
    fetchBatchData();
    fetchLesson();
  }, [filterFormData.courseCode]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fetch classes link data
  const searchCertificate = async (event) => {
    event.preventDefault();

    try {
      // validation
      const errors = validate(filterFormData, "certificate-search", false);
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
        setIsLoading(true);
        setNoData(false);

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filterFormData),
        };

        const res = await fetch(`${apiUrl}/certificate-list`, options);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(
            "Unable to connect to server. Please try again later."
          );
        }

        const length = data ? Object.keys(data).length : 0;
        if (length > 0) {
          setCertificateData(data);
          setNoData(false);
        } else {
          setNoData(true);
        }
      }
    } catch (error) {
      console.log("certificate feching error:", error.message);
      toast.error("Something went wrong. Try again later.!");
    } finally {
      setIsLoading(false);
    }
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCertificate = useCallback(async () => {
    setIsDownloading(true);

    const inputData = certificateRef.current;

    try {
      const canvas = await html2canvas(inputData, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("Certificate.pdf");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <>
      <div className="bg-white rounded-md">
        <div className="container py-4">
          <form className="mb-4" onSubmit={searchCertificate}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end p-2">
              <div className="form-group w-full">
                <strong className="block mb-2">
                  Courses <small>(Click to load)</small>
                </strong>
                <select
                  className={`border border-gray-400 focus:border-blue-500  rounded-md p-2 flex-1 w-full ${
                    formErrors.courseCode ? "border-red-500" : ""
                  }`}
                  name="courseCode"
                  value={filterFormData.courseCode}
                  onChange={handleChange}
                >
                  <option value="" defaultValue>
                    --select--
                  </option>
                  {courses &&
                    courses.length > 0 &&
                    courses?.map((course, index) => (
                      <option key={index} value={course.xitemcode}>
                        {course.xdesc}
                      </option>
                    ))}
                </select>
                <span className="text-red-500 font-semibold">
                  {formErrors.courseCode ? formErrors.courseCode : ""}
                </span>
              </div>
              <div className="form-group w-full">
                <strong className="block mb-2">
                  Batchs <small>(Click to load)</small>
                </strong>
                <select
                  className={`border border-gray-400 focus:border-blue-500  rounded-md p-2 flex-1 w-full ${
                    formErrors.batch ? "border-red-500" : ""
                  }`}
                  name="batch"
                  value={filterFormData.batch}
                  onChange={handleChange}
                >
                  <option value="" defaultValue>
                    --select--
                  </option>
                  {batchData &&
                    batchData?.map((batch, index) => (
                      <option key={index} value={batch.id}>
                        {batch.batch}
                      </option>
                    ))}
                </select>
                <span className="text-red-500 font-semibold">
                  {formErrors.batch ? formErrors.batch : ""}
                </span>
              </div>
              <div className="form-group w-full">
                <strong className="block mb-2">
                  Lessons <small>(Click to load)</small>
                </strong>
                <select
                  className={`border border-gray-400 focus:border-blue-500  rounded-md p-2 flex-1 w-full ${
                    formErrors.lesson ? "border-red-500" : ""
                  }`}
                  name="lesson"
                  value={filterFormData.lesson}
                  onChange={handleChange}
                >
                  <option value="" defaultValue>
                    --select--
                  </option>
                  {lessons &&
                    lessons.map((lesson, index) => (
                      <option key={index} value={lesson.xlesson}>
                        {lesson.xdesc}
                      </option>
                    ))}
                </select>
                <span className="text-red-500 font-semibold">
                  {formErrors.lesson ? formErrors.lesson : ""}
                </span>
              </div>
              <div className="form-group">
                <button
                  className="border py-2 rounded-lg px-4 bg-secondary text-white font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Searching..." : "Search"}
                </button>
              </div>
            </div>
          </form>

          {/* Certificate Table */}
          {isLoading ? (
            <p className="text-center my-2 text-gray-600">Loading...</p>
          ) : noData ? (
            <div className="text-center text-red-500 font-semibold w-full">
              Not data available
            </div>
          ) : (
            <>
              <div className="w-full overflow-x-scroll">
                <table className="border-collapse border w-full">
                  <thead className="text-left">
                    <tr>
                      <th className="border p-2">Course</th>
                      <th className="border p-2">Batch</th>
                      <th className="border p-2">Lesson</th>
                      <th className="border p-2">Passing Status</th>
                      <th className="border p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        {certificateData?.seitem?.xdesc}
                      </td>
                      <td className="border p-2">
                        {certificateData?.batch?.xbatchname}
                      </td>
                      <td className="border p-2">
                        {certificateData?.lesson?.xdesc}
                      </td>
                      <td className="border p-2">
                        {certificateData?.pass_status}
                      </td>
                      <td className="border p-2">
                        <button
                          className="bg-green-800 p-2 text-white font-semibold rounded-md"
                          type="button"
                          onClick={() => downloadCertificate()}
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                ref={certificateRef}
                style={{ position: "absolute", left: "-10000px", top: 0 }}
              >
                <CertificateDesign certificateData={certificateData} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}




