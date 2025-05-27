import { aboutUs, mission, vision, motive, coreValues } from ".";
const AboutSection = () => {
  return (
    <div>
      {/* about us */}
      <section className="font-siliguri py-10 bg-sky-100 bg-opacity-30">
        <div className="container px-5">
          <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
            {aboutUs.title}
          </h3>
          <p className="leading-normal md:leading-7 font-medium text-[#747374] text-justify">
            {aboutUs.desc}
          </p>
        </div>
      </section>

      {/* mission, vission and motive */}
      <section className="font-siliguri py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-10">
            <div className="md:col-span-2 p-6 shadow-lg rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {/* <FaBullseye className="text-6xl text-blue-500 mb-3 mx-auto animate-pulse" /> */}
              {mission.icon}
              <h4 className="text-3xl font-bold text-blue-800 mb-3">
                {mission.title}
              </h4>
              <p className="leading-relaxed md:leading-8 font-medium text-[#747374] text-justify">
                {mission.desc}
              </p>
            </div>
            <div className="md:col-span-2 p-6 shadow-lg rounded-lg bg-gradient-to-r from-green-50 to-green-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {/* <FaLightbulb className="text-6xl text-green-500 mb-3 mx-auto animate-pulse" /> */}
              {vision.icon}
              <h4 className="text-3xl font-bold text-green-800 mb-3">
                {vision.title}
              </h4>
              <p className="leading-relaxed md:leading-8 font-medium text-[#747374] text-justify">
                {vision.desc}
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="p-6 shadow-lg rounded-lg bg-gradient-to-r from-red-50 to-red-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                {/* <FaHandHoldingHeart className="text-6xl text-red-500 mb-3 mx-auto animate-pulse" /> */}
                {motive.icon}
                <h4 className="text-3xl font-bold text-red-800 mb-3">
                  {motive.title}
                </h4>
                <p className="leading-relaxed md:leading-8 font-medium text-[#747374] text-justify">
                  {motive.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* core values */}
      <section className="font-siliguri py-10 bg-sky-100 bg-opacity-30">
        <div className="container">
          <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
            Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* =========================================== */}
            {coreValues?.map((coreValue, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="flex items-center justify-start mb-4">
                  <div
                    className={`w-16 h-16 ${coreValue.bgColor} rounded-full flex items-center justify-center`}
                  >
                    {/* <FaStar className="text-4xl text-yellow-500" /> */}
                    {coreValue.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {coreValue.title}
                </h4>
                <p className="text-gray-600 text-justify">{coreValue.desc}</p>
              </div>
            ))}
            {/* ================================================ */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
