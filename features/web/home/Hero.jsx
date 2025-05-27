import { React, Image, heroImage } from "../home";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 relative py-5 lg:py-0 w-11/12 lg:px-6 mx-auto  h-fit">
          <div className="space-y-3 lg:space-y-4 my-auto ">
            <h1 className="text-[28px] lg:text-[65px] font-siliguri font-medium leading-[140%]">
              পূরণ করতে লক্ষ্য
              <br />
              <span className="text-secondary text-[39px] lg:text-[90px]">
                হতে হবে দক্ষ
              </span>
            </h1>
            <div className="font-siliguri text-sm lg:text-base text-black lg:leading-[28px] whitespace-pre-line">
              স্কিল ডেভেলপমেন্ট করবো - দক্ষতার মাধ্যমে সমৃদ্ধ হবো
            </div>
            <button className="font-siliguri text-white w-40 pt-3 pb-2 bg-secondary rounded-lg font-medium text-xl flex items-center justify-center">
              আরো দেখুন
            </button>
          </div>

          <div className="hidden md:block h-fit -mt-5">
            <Image
              src={heroImage}
              alt="imageAlt"
              placeholder="blur"
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
