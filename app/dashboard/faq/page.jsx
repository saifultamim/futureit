'use client'
import { useState, useRef, useEffect } from "react";
import moment from "moment";


const FaqModal = ({ modalProps }) => {
  const {
    isOpen,
    onClose,
    onSubmit,
    handleChange,
    title,
    formData,
    formErrors,
    courses,
  } = modalProps;

  const isEditMode = title ? 1 : 0;

  return (
    isOpen && (
      <div className="fixed inset-0" style={{ zIndex: 9999 }}>
        <div className="min-height-100vh pt-4 px-2 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div className="inline-block align-center bg-white rounded-lg text-left shadow-xl transform  sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="bg-white">
              <form className="p-4" onSubmit={onSubmit}>
                <div className="mb-4">
                  <label
                    className="block font-bold text-gray-700 mb-2"
                    htmlFor="courseCode"
                  >
                    Name:
                  </label>
                  <select
                    className={`border border-gray-400 focus:border-blue-500 rounded-md p-2 flex-1 w-full ${
                      formErrors.courseCode ? "border-red-300" : ""
                    }`}
                    id="courseCode"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected defaultValue>
                      --select--
                    </option>
                    {courses.length > 0 &&
                      courses.map((course, index) => (
                        <option key={index} value={course.xitemcode}>
                          {course.xdesc}
                        </option>
                      ))}
                  </select>
                  {formErrors.courseCode && (
                    <span className="text-red-500 font-semibold">
                      {formErrors.courseCode}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block font-bold text-gray-700 mb-2"
                    htmlFor="quesTitle"
                  >
                    Question Title:
                  </label>
                  <input
                    className={`border border-gray-400 focus:border-blue-500 rounded-md p-2 flex-1 w-full ${
                      formErrors.quesTitle ? "border-red-300" : ""
                    }`}
                    type="text"
                    id="quesTitle"
                    name="quesTitle"
                    placeholder="Question Title"
                    value={formData.quesTitle}
                    onChange={handleChange}
                  />
                  {formErrors.quesTitle && (
                    <span className="text-red-500 font-semibold">
                      {formErrors.quesTitle}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block font-bold text-gray-700 mb-2"
                    htmlFor="quesDesc"
                  >
                    Message:
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-28"
                    id="quesDesc"
                    name="quesDesc"
                    placeholder="Question Desc."
                    value={formData.quesDesc}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    type="submit"
                  >
                    {isEditMode ? "Update" : "Submit"}
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default function FAQ() {
  const [formErrors, setFormErrors] = useState({});
//   const [supportDtls, setSupportDtls] = useState([]);
  const currentDate = new Date();
  const localTime = new Date().toLocaleTimeString();
  const selectRef = useRef(null);
  const [editedData, setEditedData] = useState({});
  const [formData, setFormData] = useState({
    courseCode: "",
    quesTitle: "",
    quesDesc: "",
    batch: "",
    student: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_STUPORTAL_API_URL;
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    isEditModel: false,
    title: "",
  });

  const setModal = (isOpen, isEditModel, editedData = null, title) => {
    setModalConfig({ isOpen, isEditModel, title });
    setFormData((prev) => ({
      ...prev,
      batch: courses && courses[0] ? courses[0].xbatch : "",
      student: 1,
      date: currentDate,
      time: currentDate,
    }));
    if (isEditModel) {
      setEditedData(editedData);
    }
    setFormErrors({});
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      courseCode: editedData.xitemcode,
      quesTitle: editedData.xtitle,
      quesDesc: editedData.xdescription,
    }));
  }, [modalConfig.isEditModel]);
  // Select box value changes and set in formdata state.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const courseWiseFAQ = (e) => {
 e.preventDefault()   
}
  const courses = [{xitemcode:'1001',xdesc:'xdesc1'},{xitemcode:"1002",xdesc:"xdesc2"}]
 const supportDtls = [{xdate:'2025-08-12',xdescription:'xdescription',xtitle:'xtitle',xanswer:'xanswer',}] 

  return (
    <>
      <div className="bg-white rounded-md p-4">
        <div className="">
          {/* Create FAQ button */}
          <div className="form-group text-right mb-5">
            <button
              className="border py-2 rounded-lg px-2 bg-[#6366F1] text-white font-semibold"
              onClick={() => setModal(true)}
            >
              Create Question
            </button>
          </div>

          {/* FAQ search button */}
          <form className="mb-4" onSubmit={courseWiseFAQ}>
            <div className="flex justify-center items-end w-full gap-5">
              <div className="form-group w-1/2">
                <strong className="block mb-2">
                  Courses <small>(Click to load)</small>
                </strong>
                <select
                  className="border border-gray-400 focus:border-blue-500  rounded-md p-2 flex-1 w-full"
                  ref={selectRef}
                >
                  <option value="" disabled selected>
                    --select--
                  </option>
                  {courses.length > 0 &&
                    courses.map((course, index) => (
                      <option key={index} value={course.xitemcode}>
                        {course.xdesc}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group flex-none">
                <button className="border py-2 rounded-lg px-4 bg-[#6366F1] text-white font-semibold">
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Faq Table */}
          {isLoading ? (
            <p className="text-center my-2 text-gray-600">Loading...</p>
          ) : noData ? (
            <div className="text-center text-red-500 font-semibold">
              Not data available
            </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <table className="border-collapse border w-full">
                <thead className="text-left">
                  <tr>
                    <th className="border p-2">SL.</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Answer</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {supportDtls?.length > 0 &&
                    supportDtls.map((supportDtl, index) => (
                      <tr key={index}>
                        <td className="border p-2">{++index}</td>
                        <td className="border p-2">
                          {supportDtl.xdate
                            ? moment(supportDtl.xdate).format("DD-MM-YYYY")
                            : ""}
                        </td>
                        <td className="border p-2">{supportDtl.xtitle}</td>
                        <td className="border p-2">
                          {supportDtl.xdescription}
                        </td>
                        <td className="border p-2">{supportDtl.xanswer}</td>
                        <td className="border p-2">
                          <button
                            className="border-2 border-blue-500 py-1 px-2 text-gray-600 font-semibold rounded-lg"
                            onClick={() =>
                              setModal(true, true, supportDtl, "update")
                            }
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
          {/* FAQ Add  Modal */}
          <FaqModal
            modalProps={{
              isOpen: modalConfig.isOpen,
              onClose: () => setModal(false, false, ""),
              onSubmit: (event) =>
                modalConfig.isEditModel
                  ? handleFormSubmit(
                      event,
                      "PUT",
                      `/support/${editedData.xquesid}`
                    )
                  : handleFormSubmit(event, "POST", "/support/create"),
              handleChange: handleChange,
              title: modalConfig.title,
              formData: formData,
              formErrors: formErrors,
              courses: courses,
            }}
          ></FaqModal>
        </div>
      </div>
    </>
  );

 }

