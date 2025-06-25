import { courses, teaching, facilities } from "..";
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
                  idx == 0 || idx == 1 || idx == 2
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

      <section className="font-siliguri py-5 md:py-10 bg-sky-100 bg-opacity-30 container px-5 grid md:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-16">
        <div className="">
          <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3">
            {teaching.title}
          </h3>
          <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
            {teaching.introduction}
          </p>
          <ul className="list-disc list-inside text-[#605f62] space-y-2">
            {teaching?.features?.map((feature, idx) => (
              <li
                key={idx}
                className="leading-normal md:leading-7 font-medium text-justify"
              >
                <strong>{feature}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mt-0 mt-9">
          <h3 className="text-xl md:text-4xl font-semibold text-[#4a4949] mb-3">
            {facilities.title}
          </h3>
          <p className="leading-normal md:leading-7 font-medium text-[#605f62] mb-8 text-justify">
            {facilities.introduction}
          </p>
          <ul className="list-disc list-inside text-[#605f62] space-y-2">
            {facilities?.features?.map((feature, idx) => (
              <li
                key={idx}
                className="leading-normal md:leading-7 font-medium text-justify"
              >
                <strong>{feature}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Overview;
