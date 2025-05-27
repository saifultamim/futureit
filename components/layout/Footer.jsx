import Link from "next/link";
import { FOOTER_DATA } from "@/utils/data/constant";
import SocialIcons from "../ui/SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-[#050506]">
      <div className="top-footer py-10 w-11/12 lg:px-6 mx-auto">
        <div className="container">
          <div className="flex flex-wrap lg:flex-row lg:space-x-12 sm:gap-x-10 gap-y-10">
            <div className="text-white lg:flex-1">
              <img src={FOOTER_DATA.logoSrc} alt="Logo" />
              <p className="text-sm font-normal text-justify text-[#BDBCBC] py-6 font-siliguri">
                {FOOTER_DATA.description}
              </p>

              <SocialIcons size="w-8 h-8" bgColor="bg-[#ffffff]" />
            </div>

            <div className="text-white">
              <div className="font-siliguri text-[21px] mb-6">
                {FOOTER_DATA.contact.title}
              </div>
              <ul className="text-sm text-[#FFFFFF] flex flex-col space-y-3 sm:space-y-4 font-noto">
                {FOOTER_DATA.contact.address.map((item, index) => {
                  return (
                    <li key={index} className="flex items-start space-x-4">
                      <div>
                        <p className="font-bold  mb-1">{item.lines[0]}</p>
                        {item.lines.slice(1).map((line, idx) => (
                          <p
                            key={idx}
                            className="text-xs text-gray-200 leading-normal"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-white sm:flex-1">
              <div className="font-siliguri text-[21px] mb-6">
                {FOOTER_DATA.popularCourses.title}
              </div>
              <ul className="text-sm text-[#FFFFFF] flex flex-col space-y-3 sm:space-y-4 font-siliguri">
                {FOOTER_DATA.popularCourses.courses.map((course, index) => (
                  <li key={index}>
                    <Link href={course.url}>{course.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-white sm:flex-1">
              <div className="font-siliguri text-[21px] mb-6">
                {FOOTER_DATA.others.title}
              </div>
              <ul className="text-sm text-[#FFFFFF] flex flex-col space-y-3 sm:space-y-4">
                {FOOTER_DATA.others.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-900">
        <div className="container text-white pt-3 pb-2 text-center text-base">
          copyright ©edufuture
        </div>
      </div>
    </footer>
  );
};
export default Footer;
