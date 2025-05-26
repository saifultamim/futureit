const CallToUs = () => {
  return (
    <>
      <section className="lg:py-10">
        <div className="container lg:w-11/12 mx-auto bg-callToUs rounded-none lg:rounded-lg py-6 px-5 lg:px-16">
          <div className="flex flex-wrap items-center justify-between text-white">
            <p className="font-hindSliguri font-medium text-lg lg:text-[24px] flex flex-col mb-4 lg:mb-0">
              আমাদের কোর্স সম্পর্কে বিস্তারিত জানতে আমাদের কল করুন
              <span className="font-normal text-base text-[#FFFFFFCC]">
                সকাল ৯ টা থেকে রাত ৮ টা পর্যন্ত
              </span>
            </p>
            <button className="bg-contactNumber p-4 md:p-5 leading-[10px] lg:leading-[6px] rounded-xl text-lg font-medium">
              {/* <i className="fa-solid fa-phone pr-1"></i> */}
              01958-536790
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default CallToUs;
