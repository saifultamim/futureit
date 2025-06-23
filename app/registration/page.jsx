
export default function Registration() {
 
  return (

        <section className="bg-gray-50 pt-5 pb-10">
          {/* <!-- login container --> */}
          <div className="rounded-2xl max-w-lg lg:max-w-2xl mx-auto p-5">
            {/* <!-- form --> */}
            <div className="text-center">
              <h2 className="font-bold text-3xl gradientText font-siliguri mb-8">
                রেজিস্ট্রেশন <span>করুন</span>
              </h2>
            </div>

         
        
              {/* <form
                // onSubmit={inputHandler}
                className={`flex flex-col font-siliguri ${
                  verificationStatus == "verified" ? "block" : "hidden"
                }`}
              > */}
                 <form
              
               
              >
                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      আপনার মোবাইল <span className="text-red-500"> *</span>
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xmobile"
                      placeholder="যোগাযোগ নম্বর লেখুন"
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      আপনার নাম <span className="text-red-500"> *</span>
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xstuname"
                      placeholder="নাম লেখুন"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      {" "}
                      ইমেইল এড্রেস <span className="text-red-500"> *</span>
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xstuemail"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      পিতার নাম
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xfname"
                      placeholder="পিতার নাম লেখুন"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className="text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      বাবার যোগাযোগ নম্বর
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xfmobile"
                      placeholder="বাবার যোগাযোগ নম্বর লেখুন"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      অভিভাবকের নাম
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xguardian"
                      placeholder="অভিভাবকের নাম লেখুন"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      অভিভাবকের মোবাইল
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xgurdianmobile"
                      placeholder="অভিভাবকের মোবাইল লেখুন"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      অ্যাড্রেস{" "}
                    </label>
                    <textarea
                      className="border border-gray-300 focus:border-blue-500 px-4 rounded-sm focus:outline-none block w-full mt-2"
                      type="text"
                      name="xaddress"
                      placeholder="অ্যাড্রেস লেখুন"
                    ></textarea>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      এমপ্লয়ি আইডি <span className="text-red-500"> *</span>
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xrefno"
                      id="xrefno"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      এনআইডি নাম্বার{" "}
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xnid"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      ডিসট্রিক্ট{" "}
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xcity"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      দেশ{" "}
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="text"
                      name="xcountry"
                      value="Bangladesh"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      পাসওয়ার্ড দিন <span className="text-red-500"> *</span>
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="password"
                      name="xpassword"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
                    >
                      পাসওয়ার্ড নিশ্চিত করুন{" "}
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      className="login-input font-siliguri"
                      type="password"
                      name="xcpassword"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                  <button
                    className="btn px-10 py-2 rounded-full "
                    type="submit"
                  >
                    রেজিস্টার
                  </button>
                </div>
              </form>
         
          </div>
        </section>
     
  );
}
