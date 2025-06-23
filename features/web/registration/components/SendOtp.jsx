"use client";
const SendOtp = () => {
  const otpSendForm = (e) => {
    e.preventDefault();
    console.log("otp send ");
  };
  return (
    <form onSubmit={otpSendForm}>
      <div className="grid md:grid-cols-2">
        <div className="mb-5">
          <label
            htmlFor=""
            className=" text-[#1F1E1E] hover:text-hover font-medium text-md font-siliguri"
          >
            আপনার মোবাইল <span className="text-red-500"> *</span>
          </label>
          <input
            className={`login-input border font-siliguri`}
            type="tel"
            name="xmobile"
            placeholder="মোবাইল নম্বর লিখুন"
          />
        </div>
      </div>
      <button className="btn px-4 py-2 rounded-md" type="submit">
        ওটিপি পাঠান
      </button>
    </form>
  );
};

export default SendOtp;
