import {
  about,
  career,
  facilities,
  missionVision,
} from "@/utils/data/about/others";

export const About = () => {
  return (
    <div className="lg:mt-10 md:mt-8 mt-5 mb-16">
      <p className="text-lg lg:text-2xl font-medium text-[#4a4949] leading-normal font-siliguri">
        {about.title}
      </p>

      <div className="flex flex-col my-6 font-siliguri">
        <h3 className="text-xl">{about?.question}</h3>
        <small>{about?.desc}</small>

        <ul className="mt-4 space-y-3 font-siliguri">
          {about?.features?.map((feature, index) => (
            <li key={index}>● {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export const MissionVission = () => {
  return (
    <div className="lg:mt-5 md:mt-3 mb-11">
      {missionVision?.map((params, idx) => (
        <div key={idx} className="flex flex-col font-siliguri py-5">
          <h3 className="text-xl mb-4">{params?.title}</h3>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: params?.desc }}
          />
        </div>
      ))}
    </div>
  );
};

export const Facilities = () => {
  return (
    <div className="lg:mt-10 md:mt-8 mt-5 mb-16">
      <div className="flex flex-col font-siliguri">
        <h3 className="text-xl">{facilities?.coreTitle}</h3>
        <ul className="mt-4 space-y-3 list-disc ml-5">
          {facilities?.core.map((facility, index) => (
            <li key={index}>
              <span className="font-semibold">{facility?.title}: &nbsp;</span>
              <span>{facility?.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mt-10 font-siliguri">
        <h3 className="text-xl">{facilities?.mainCoursesTitle}</h3>
        <ul className="mt-4 space-y-3 list-disc ml-5">
          {facilities?.mainCourses.map((course, index) => (
            <li key={index}>
              <span className="font-semibold">{course?.name}: &nbsp;</span>
              <span>{course?.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Career = () => {
  return (
    <div className="lg:mt-10 md:mt-8 mt-5 mb-16 font-siliguri">
      <h3 className="text-xl mb-4">{career?.title}</h3>
      <p className="text-lg font-medium text-[#4a4949] leading-normal pb-1">
        {career?.desc}
      </p>
    </div>
  );
};
