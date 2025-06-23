"use client";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";

const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
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
        <div className="lg:mb-5 ">
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
        <div className="lg:mb-5">
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
        <div className="lg:mb-5">
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
        <div className="lg:mb-5">
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
        <div className="lg:mb-5">
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
            placeholder=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:mb-5">
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
            পাসওয়ার্ড নিশ্চিত করুন <span className="text-red-500"> *</span>
          </label>
          <input
            className="login-input font-siliguri"
            type="password"
            name="xcpassword"
            placeholder=""
          />
        </div>
      </div>
      <div className="md:mt-3 text-xs md:flex grid  justify-between items-center text-[#002D74]">
        <button className="btn px-10  rounded-full w-fit " type="submit">
          রেজিস্টার
        </button>
        <Link href='/login' className='btn border-none hover:bg-transparent text-[#002D74] hover:text-[#002D74] text rounded-full md:mt-0 mt-3 w-fit flex items-center gap-2'> <CiLogin /> লগইনে ফিরে যান</Link>
      </div>
    </form>
  );
};
export default Registration;
