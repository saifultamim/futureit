
import Link from "next/link";

export default function login() {


  return (
    <>
 

        <section className="bg-gray-50 py-8">
          {/* <!-- login container --> */}
          <div className="rounded-2xl max-w-lg mx-auto px-5">
            {/* <!-- form --> */}
            <div className="text-center">
              <h2 className="font-bold text-3xl gradientText font-siliguri mb-10">
                লগইন <span>করুন</span>
              </h2>

              {/* {errMsg && <p className="text-red-500">{errMsg}</p>} */}
            </div>

            <form
            //   onSubmit={handleLogin}
              className="flex flex-col font-siliguri"
            >
              <div className="mb-5">
                <label htmlFor="" className="text-md font-semibold opacity-95">
                  আপনার মোবাইল <span className="text-red-500"> *</span>
                </label>
                <input
                  className="login-input"
                  type="tel"
                  name="mobile"
                //   value={formData.xmobile}
                //   onChange={(event) =>
                //     setFormData({ ...formData, xmobile: event.target.value })
                //   }
                  placeholder="018XXXXXXX"
                />
                {/* <span className="text-red-700">formErrors.xmobile</span> */}
              </div>
              <div className="mb-5">
                <label htmlFor="" className="text-md font-semibold opacity-95">
                  পাসওয়ার্ড দিন <span className="text-red-500"> *</span>
                </label>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                //   value={formData.xpassword}
                //   onChange={(event) =>
                //     setFormData({ ...formData, xpassword: event.target.value })
                //   }
                  placeholder="Password"
                />
                {/* <span className="text-red-700">formErrors.xpassword</span> */}
              </div>
              <div className="flex items-center justify-between">
                <button className="btn px-10 py-1 rounded-full">লগইন</button>
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
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p className="text-sm font-semibold font-siliguri">
                একটিও অ্যাকাউন্ট নেই?
              </p>
              <Link
                href="/registration"
                className="btn px-10 py-2 rounded-full"
              >
                রেজিস্ট্রার
              </Link>
            </div>
          </div>
        </section>
   
    </>
  );
}