"use client";
import React, { useState } from "react";
import logo from "@/public/images/logo.png";
import menusvg from "@/public/images/menu.svg";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CourseSearch from "../ui/course/Search";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Responsive menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <div>
      <div className="shadow-lg bg-white py-4 md:py-3 z-40 w-full">
        <div className="container w-11/12 lg:px-6 mx-auto">
          <nav className="flex items-center justify-start md:justify-between h-full lg:space-x-5">
            <Link
              href="/"
              className="hidden md:block w-full max-w-[160px] logo"
            >
              <Image src={logo} alt="logo" width={800} height={500} priority />
            </Link>
            <CourseSearch />

            <div className="hidden md:block">
              <ul className="flex justify-between items-center space-x-6">
                <li>
                  <Link
                    href="/about"
                    className="font-siliguri text-base text-[#1F1E1E] leading-5"
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link
                    href="/success-story"
                    className="font-siliguri text-base text-[#1F1E1E] leading-5"
                  >
                    সাফল্যের গল্প
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-siliguri text-base text-[#1F1E1E] leading-5"
                  >
                    যোগাযোগ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="block md:hidden lg:hidden w-full">
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="font-siliguri text-[#1F1E1E] md:text-white border border-secondary
                  bg-transparent md:bg-secondary rounded-md font-bold text-lg flex items-center justify-center  py-3 px-4"
                >
                  <span className="uppercase leading-5 ">ব্রাউজ কোর্স</span>
                  <FaChevronDown className="ml-3 text-sm" />
                </Link>

                <button
                  className="flex-1 flex justify-end"
                  onClick={toggleMobileMenu}
                >
                  <Image
                    src={menusvg}
                    alt="menu"
                    className="w-full max-w-[35px] block md:hidden"
                  />
                </button>
              </div>
            </div>
          </nav>

          {/* mobile menu */}
          <nav
            className={`w-2/3 h-screen fixed top-0 left-0 bg-white z-40 p-6 shadow-4xl rounded-r-lg overflow-hidden  ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ul className="flex flex-col items-start space-y-4 w-full">
              <li className="w-full ">
                <Link
                  href="/about"
                  className="font-siliguri text-lg text-[#1F1E1E] font-semibold flex justify-between items-center"
                >
                  <span>লগইন করুন</span>
                  <FaChevronRight></FaChevronRight>
                </Link>
              </li>
              <li className="w-full border-b border-[#b9b8b8]"></li>
              <li>
                <Link href="/" className="font-siliguri text-lg text-[#1F1E1E]">
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-siliguri text-lg text-[#1F1E1E]"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="/success-story"
                  className="font-siliguri text-lg text-[#1F1E1E]"
                >
                  সাফল্যের গল্প
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-siliguri text-lg text-[#1F1E1E]"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </nav>

          {isMobileMenuOpen && (
            <div
              className="overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
