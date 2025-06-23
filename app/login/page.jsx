"use client";
import Link from "next/link";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="bg-gray-50 py-8">
        <div className="rounded-2xl max-w-lg mx-auto px-5">
          <div className="text-center">
            <h2 className="font-bold text-3xl gradientText font-siliguri mb-10">
              লগইন <span>করুন</span>
            </h2>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col font-siliguri">
            <div className="mb-5">
              <label htmlFor="" className="text-md font-semibold opacity-95">
                আপনার মোবাইল <span className="text-red-500"> *</span>
              </label>
              <input
                className="login-input"
                type="tel"
                name="mobile"
                placeholder="018XXXXXXX"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-md font-semibold opacity-95">
                পাসওয়ার্ড দিন <span className="text-red-500"> *</span>
              </label>
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="btn px-10  rounded-full">লগইন</button>
              <div className=" text-xs text-[#002D74]">
                <Link href="/forgot-password">
                  <span className="text-sm font-semibold">
                    Forget your password?
                  </span>
                </Link>
              </div>
            </div>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm font-siliguri">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p className="text-sm font-semibold font-siliguri">
              একটিও অ্যাকাউন্ট নেই?
            </p>
            <Link href="/registration" className="btn px-10  rounded-full">
              রেজিস্ট্রার
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
