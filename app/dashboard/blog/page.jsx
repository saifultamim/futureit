'use client'
import { useState } from "react";

import Image from "next/image";
import { BLOG_CATEGORY_OPTIONS } from "@/utils/data/constant";



export default function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const apiUrl = process.env.NEXT_PUBLIC_STUPORTAL_API_URL;

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  // Form fields
  const [formData, setFormData] = useState({
    // bizid: BIZID,
    category: "",
    title: "",
    blog: "",
    xreadnum: 0,
    xreview: 0,
    xtype: "Student",
    image: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [blogData, setBlogData] = useState([ {
        xsl: 1,
        xtitle: "How to Learn React",
        xcategory: selectedCategory,
        xstatus: "Published",
      },
      {
        xsl: 2,
        xtitle: "Benefits of Tailwind CSS",
        xcategory: selectedCategory,
        xstatus: "Draft",
      }]);

  // Reset form
  const resetForm = () => {
    setFormData({ ...formData, category: "", title: "", blog: "" });
    setFormErrors({});
    setPreviewUrl(null);
  };

  // Select box value changes and set in formdata state.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFileUploadChange = (e) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      toast.warning("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      toast.warning("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    if (!file.type.startsWith("image")) {
      toast.warning("Please select a valide image");
      return;
    }

    setImage(file);
    // setFormData({...formData, image: file}); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file));
  };

  const onCancelFile = (e) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setImage(null);
    setPreviewUrl(null);
  };

  // Store the form data
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const errors = validate(formData);
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
        if (image) {
          const blogFormData = new FormData();
          blogFormData.append("image", image);

          const response = await fetch(`${apiUrl}/file/upload`, {
            method: "POST",
            body: blogFormData,
          });

          const { imageUrl } = await response.json();

          formData.image = imageUrl;
        }

        const createResponse = await fetch(`${apiUrl}/blog/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await createResponse.json();

        if (!createResponse.ok) {
          throw new Error("Something went wrong");
        }
        // toast.success("Blog created successfully!");
        setIsModalOpen(false);
        resetForm();
      }
    } catch (error) {
      console.log("Blog store error fetch:", error.message);
    //   toast.error("Something went wrong");
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setNoData(false);

    try {
      if (!selectedCategory) {
        // toast.warning("Please select a category");
        return;
      }

      const response = await fetch(
        `${apiUrl}/blog/list?category=${selectedCategory}`
      );
      const blogData = await response.json();
      if (blogData.data.length == 0) {
        setNoData(true);
      } else {
        setBlogData(blogData.data);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error.message);
    //   toast.warning("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white  rounded-md p-4">
        <div className="">
          {/* Create blog button */}
          <div className="form-group text-right mb-5">
            <button
              className="border py-2 rounded-lg px-2 bg-[#6366F1] text-white font-semibold"
              onClick={() => setIsModalOpen(true)}
            >
              Create Blog
            </button>
          </div>

          {/* blog Add  Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 overflow-y-auto"
              style={{ zIndex: 9999 }}
            >
              <div className="min-height-100vh pt-4 px-2 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                  &#8203;
                </span>

                <div className="inline-block align-center bg-white rounded-lg text-left shadow-xl transform  sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                  <form className="p-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block font-bold text-gray-700 mb-2"
                        htmlFor="category"
                      >
                        Blog Category:
                      </label>
                      <select
                        className={`border border-gray-400 focus:border-blue-500 rounded-md p-2 flex-1 w-full ${
                          formErrors.category ? "border-red-300" : ""
                        }`}
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        {BLOG_CATEGORY_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {formErrors.category && (
                        <span className="text-red-500 font-semibold">
                          {formErrors.category}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block font-bold text-gray-700 mb-2"
                        htmlFor="title"
                      >
                        Title:
                      </label>
                      <input
                        className={`border border-gray-400 focus:border-blue-500 rounded-md p-2 flex-1 w-full ${
                          formErrors.title ? "border-red-300" : ""
                        }`}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Blog Title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                      {formErrors.title && (
                        <span className="text-red-500 font-semibold">
                          {formErrors.title}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block font-bold text-gray-700 mb-2"
                        htmlFor="blog"
                      >
                        Description:
                      </label>

                      <textarea
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          formErrors.blog ? "border-red-300" : ""
                        }`}
                        id="blog"
                        name="blog"
                        placeholder="Blog Desc."
                        value={formData.blog}
                        onChange={handleChange}
                      ></textarea>

                      {formErrors.blog && (
                        <span className="text-red-500 font-semibold">
                          {formErrors.blog}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-2">
                        Blog Image
                      </label>
                      <div className="flex flex-col md:flex-row gap-1.5 md:py-4">
                        <div className="flex-grow">
                          {previewUrl ? (
                            <div className="mx-auto w-80">
                              <Image
                                alt="file uploader preview"
                                src={previewUrl}
                                width={180}
                                height={200}
                              />
                            </div>
                          ) : (
                            <label className="flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-14 h-14"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                />
                              </svg>
                              <strong className="text-sm font-medium">
                                {" "}
                                Select an image{" "}
                              </strong>
                              <input
                                className="block w-0 h-0"
                                name="file"
                                type="file"
                                onChange={onFileUploadChange}
                              />
                            </label>
                          )}
                        </div>
                        {formErrors.image && (
                          <span className="text-red-500 font-semibold">
                            {formErrors.image}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        type="submit"
                      >
                        Submit
                      </button>

                      <button
                        disabled={!previewUrl}
                        onClick={onCancelFile}
                        className={`bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 ${
                          image ? "block" : "hidden"
                        }`}
                      >
                        Cancel file
                      </button>

                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => {
                          setIsModalOpen(false);
                          resetForm();
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* blog search button */}
          <form className="mb-4" onSubmit={handleSearch}>
            <div className="flex justify-center items-end w-full gap-5">
              <div className="form-group w-1/2">
                <strong className="block mb-2">
                  Category <small>(Click to load)</small>
                </strong>
                <select
                  className="border border-gray-400 focus:border-blue-500  rounded-md p-2 flex-1 w-full"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {BLOG_CATEGORY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
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

          {/* blog Table */}
          {isLoading ? (
            <p className="text-center my-2 text-gray-600">Loading...</p>
          ) : noData ? (
            <div className="text-center text-red-500 font-semibold">
              Not data available
            </div>
          ) : (
            <div className="w-full overflow-x-scroll">
              <table className="border-collapse border w-full">
                <thead className="text-left">
                  <tr>
                    <th className="border p-2">SL.</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {blogData?.map((blog, index) => (
                    <tr key={index}>
                      <td className="border p-2">11</td>
                      <td className="border p-2">xtitle</td>
                      <td className="border p-2">xcategory</td>
                      <td className="border p-2">xstatus</td>
                    </tr>   
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


