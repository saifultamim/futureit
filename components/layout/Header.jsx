"use client";
import React from "react";
import SocialIcons from "../ui/SocialIcons";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="bg-secondary hidden lg:block">
        <div className="container h-11 py-6 w-11/12 lg:px-6  mx-auto">
          <div className="flex items-center justify-between h-full leading-7">
            <div className="flex items-center space-x-8 text-white">
              <div className="text-base flex items-center space-x-1 leading-normal">
                <FaPhoneAlt className="text-sm" />
                <span className="pt-1 font-siliguri">01958-536790</span>
              </div>
              <div className="text-base flex items-center space-x-1 leading-normal">
                <FaEnvelope />
                <span className="pt-1 font-siliguri">
                  info.edufutureit@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 font-siliguri">
              <SocialIcons size="w-7 h-7" bgColor="bg-[#ffffff]" />

              <Link
                href="/login"
                className="block py-2 px-3.5 leading-normal bg-white rounded-md text-secondary text-sm font-semibold"
              >
                লগইন / রেজিস্ট্রার
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
