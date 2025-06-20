import { courses, teaching, facilities } from "./";
const Overview = () => {
  return (
    <div>
      <section className="font-siliguri py-10">
        <div className="container text-center">
          <h3 className="text-4xl font-semibold text-[#4a4949] mb-2">
            {courses.title}
          </h3>
          <p className="max-w-3xl mx-auto leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-center">
            {courses.desc}
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-inside text-[#605f62]">
            {courses?.courseName?.map((course, idx) => (
              <li
                key={idx}
                className={`shadow-lg py-3 px-2 md:px-8 border text-sm self-center md:text-base font-medium cursor-pointer rounded flex items-center justify-center ${
                  idx == 0
                    ? "bg-secondary text-white"
                    : "hover:bg-secondary text-[#605f62]"
                } text-[#4a4949]  transform duration-300  hover:text-white h-full`}
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="font-siliguri py-10 bg-sky-100 bg-opacity-30">
        <div className="container">
          <h3 className="text-4xl font-semibold text-[#4a4949] mb-3">
            {teaching.title}
          </h3>
          <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
            {teaching.introduction}
          </p>
          <ul className="list-disc list-inside text-[#605f62] space-y-2">
            {teaching?.features?.map((feature, idx) => (
              <li key={idx} className="leading-normal md:leading-7 font-medium text-justify">
                <strong>{feature?.title}</strong> {feature?.desc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="font-siliguri bg-primary py-10">
        <div className="container px-3 mx-auto">
          <div className="">
            <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3 md:mb-6">
              {facilities?.title}
            </h3>
            <p className="leading-normal md:leading-7 font-medium text-justify text-[#605f62] mb-5">
              {facilities?.desc}
            </p>
            <ul className="list-disc list-inside text-[#605f62] mb-8 space-y-2">
              {facilities?.features?.map((feature, idx) => (
                <li key={idx} className="leading-normal md:leading-7 font-medium text-justify">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
