"use client";
import { Icons } from "@/components/Icon";
import React, { useState } from "react";
import { UserProfileDropdown } from "./components/UserProfileDropdown";
import { useSidebar } from "@/contexts/SidebarContext";
import logo from '@/public/images/logo.png'
import Image from "next/image";

export const NavigationButton = ({ onClick, ariaControls, children }) => (
  <button
    onClick={onClick}
    aria-controls={ariaControls}
    type="button"
    className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white border border-secondary "
  >
    {/* <p>EduFuturesss</p> */}
    {/* <Image src={logo} alt='logo' /> */}
        <div className="flex-1 flex justify-center ">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={1000}
                  height={100}
                  className="max-w-28"
                />
              </div>
    {children}
  </button>
);

export const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    />
  </svg>
);

const AppHeader = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200  shadow-lg">
      <div className="px-4 sm:px-10">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <NavigationButton
              onClick={toggleSidebar}
              ariaControls="logo-sidebar"
            >
              <span className="sr-only">Toggle sidebar</span>
              <Icons.leftArrow size={16} className="text-black" />
            </NavigationButton>
          </div>
          <div className="flex items-baseline gap-8 leading-normal">
            {/* <NotificationDropdown /> */}
            {/* <MessageDropdown /> */}
            <UserProfileDropdown />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
