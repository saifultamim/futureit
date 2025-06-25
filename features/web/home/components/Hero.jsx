import { React, Image, heroImage } from "../";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="container grid grid-cols-1 lg:grid-cols-2 relative py-5 lg:py-0  w-11/12 lg:px-6 mx-auto h-fit">
          <div className="space-y-3 lg:space-y-4 my-auto lg:mx-0 md:mx-auto mx-auto">
            {/* <h1 className="text-[28px] lg:text-[65px] font-siliguri font-medium leading-[140%]"> */}
             <h1 className="text-[28px] lg:text-[65px] font-siliguri font-medium md:leading-[45px] leading-8">
              পূরণ করতে লক্ষ্য 
             <span className='lg:block md:hidden '><br /></span>
              {/* <span className="text-secondary text-[39px] lg:text-[90px]"> */}
                <span className="text-secondary text-[28px] lg:text-[90px] ml-2">
                হতে হবে দক্ষ
              </span>
            </h1>
            <div className="font-siliguri text-sm lg:text-base text-black lg:leading-[28px] whitespace-pre-line lg:text-start md:text-center text-center">
             Your Future. Your Skills. Your Way.
            </div>
            <button className="font-siliguri text-white px-4 pt-3 pb-2 bg-secondary rounded-lg font-medium text-xl flex items-center justify-center lg:mx-0 md:mx-auto mx-auto ">
              Decode Your Success
            </button>
          </div>

          <div className="hidden md:block h-fit -mt-5">
            <Image
              src={heroImage}
              alt="imageAlt"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
