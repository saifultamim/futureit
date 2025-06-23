"use client";
const VerifyOtp = () => {
  const handleSubmit = () => {
    e.preventDefault();
    console.log("provide otp");
  };
  const otpVerifyForm = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2">
        <div className="mb-5">
          <label
            htmlFor=""
            className=" text-[#1F1E1E] font-medium text-md font-siliguri"
          >
            ওটিপি
            <span className="text-red-500"> *</span>
          </label>

          <span className="block text-md text-[#1F1E1E] mt-3 font-siliguri">
            <span className="text-[#096909]">01847265473</span> নাম্বারে পাঠানো
            ৪ সংখ্যার কোডটি লিখুন
          </span>

          <input
            className="login-input font-siliguri"
            type="tel"
            name="otp"
            placeholder="ওটিপি নাম্বার লিখুন"
          />
        </div>
      </div>
      <div className="flex justify-between items-center md:w-80 pr-2 text-right">
        <button
          className="btn px-4 py-2 rounded-md disabled:bg-opacity-50 "
          type="button"
          onClick={otpVerifyForm}
        >
          যাচাই করুন
        </button>

        <p className="text-blue-800 font-siliguri">ওটিপি প্রদান সময় 6s</p>
      </div>
    </form>
  );
};
export default VerifyOtp;
