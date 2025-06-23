'use client'
import { CiLogin } from "react-icons/ci";
import Link from "next/link"

const ForgotPasswordPage = () => {
    const otpSendForm = () => {
        e.preventDefault()
    }
    return (
            <section className="bg-gray-50 pt-5 pb-10">

          <div className="rounded-2xl max-w-lg lg:max-w-2xl mx-auto p-5">

            <div className="text-center mb-8">
              <h2 className="font-bold text-3xl gradientText font-siliguri mb-3">
                পাসওয়ার্ড <span>পুনরুদ্ধার করুন</span>
              </h2>
              <p className='font-siliguri'>পাসওয়ার্ড রিসেট করতে আপনার নিবন্ধিত মোবাইল নম্বর জমা দিন।</p>
            </div>

          
              <form onSubmit={otpSendForm}>
                <div className="grid md:grid-cols-2">
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className=" text-black hover:text-hover font-medium text-md font-siliguri"
                    >
                      আপনার মোবাইল <span className="text-red-500"> *</span>
                    </label>
                    <input
                      className={`login-input border font-siliguri`}
                      type="tel"
                      name="xmobile"
                      placeholder="মোবাইল নম্বর লেখুন"
                    />
                  </div>
                </div>
                <div className='md:w-1/2  lg:flex justify-between items-cener '>
                  <button className="btn px-4  rounded-md" type="submit">
                  ওটিপি পাঠান
                </button>
                  <Link href='/login' className='btn border-none hover:bg-transparent text-[#002D74] hover:text-[#002D74] text rounded-full lg:mt-0 md:mt-3 mt-3  w-fit flex items-center gap-2'> <CiLogin /> লগইনে ফিরে যান</Link>
                </div>
              </form>
         
          </div>
        </section>
    ) 
}
export default ForgotPasswordPage