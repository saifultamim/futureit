import Image from "next/image";
import seminarImage from "@/public/images/seminer.png";

const Seminer = () => {
  const seminers = [];

  return (
    <>
      <section className="py-12 ">
        <div className="container w-11/12 lg:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-left leading-tight mb-8">
                <h2 className="font-siliguri text-3xl md:text-4xl font-bold text-[#1F1E1E] mb-3">
                  ফ্রি সেমিনারের সময়সূচী
                </h2>
                <p className="text-[#605F62] font-inter text-base">
                  কোন কোর্সে ভর্তি হবেন, সেই কোর্সে কাজের সুযোগ কেমন , সে বিষয়ে
                  বিস্তারিত জানতে জয়েন করুন আমাদের ফ্রি সেমিনারে
                </p>
              </div>

              {seminers?.length > 0 ? (
                <div>
                  <p>set the items</p>
                </div>
              ) : (
                <p className="block text-gray-700 text-xl bg-sky-600 bg-opacity-10 p-3 shadow-lg rounded-lg font-siliguri">
                  No seminers available at the moment.
                </p>
              )}
            </div>
            <div className="w-full h-auto lg-w-[564px] lg-h-[400px]">
              <Image
                src={seminarImage}
                width={564}
                height={400}
                alt="seminar"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Seminer;
