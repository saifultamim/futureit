import { milestones, Image } from ".";

const MileStones = () => {
  return (
    <section className="py-10">
      <div className="w-11/12 lg:px-6 mx-auto">
        <div className="text-center leading-tight mb-8">
          <h2 className="font-siliguri text-3xl md:text-4xl font-bold text-[#1F1E1E] mb-3">
            মাইলফলক
          </h2>
          <p className="text-gray-500 font-inter text-base">
            আমাদের উল্লেখযোগ্য সাফল্যের এক ঝলক
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/images/milestone.png"
            alt="Achievements Banner"
            width={558}
            height={374}
            className="w-full object-cover"
          />

          <div className="grid grid-cols-2 gap-4 md:gap-10">
            {milestones.map((achievement, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-center space-y-2 ${achievement.backgroundColor} rounded-lg py-4 md:py-0 px-4 md:px-8`}
              >
                <p className="text-black font-semibold text-xl lg:text-4xl font-siliguri">
                  {achievement.value}
                </p>

                <p className="text-gray-500 font-medium text-sm font-siliguri">
                  {achievement.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MileStones;
