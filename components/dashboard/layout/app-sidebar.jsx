"use client";

// import Logo from "@/public/images/logo.png";
import { useSidebar } from "@/contexts/SidebarContext";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
 import { Icons } from "@/components/Icon";
import { dashboardMenuItems } from "@/utils/data/constant";
import { MenuItem } from "@/components/MenuItem";
import Image from "next/image";

export const AppSidebar = () => {
  const [openMenus, setOpenMenus] = useState(new Set());
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const pathname = usePathname();
  const toggleMenu = (menuId, parentId) => {
    setOpenMenus((prev) => {
      const newSet = new Set(prev);

      if (!parentId) {
        if (newSet.has(menuId)) {
          return new Set();
        }
        return new Set([menuId]);
      }

      if (newSet.has(menuId)) {
        newSet.delete(menuId);
      } else {
        newSet.add(menuId);
      }

      return newSet;
    });
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform 
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
         bg-white border-r border-gray-200 sm:translate-x-0  shadow-lg`}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between px-4 py-3.5 ">
          {/* Logo Area */}
          <div className="flex-1 flex justify-center ">
            {/* <Logo className="text-xl" /> */}
            <Image
              src="/images/logo.png"
              alt="logo"
              width={1000}
              height={100}
              className="max-w-28"
            />
          </div>

          <button
            onClick={toggleSidebar}
            className="focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
                 <Icons.rightArrow size={24} className='text-gray-800'/>

            ) : (
                 <Icons.leftArrow size={24} className='text-gray-800' />
            
            )}
          </button>
        </div>

        <div className="h-[calc(100%-80px)] px-3 pt-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2 font-medium">
            {dashboardMenuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={pathname.startsWith(item.href || "#")}
                openMenus={openMenus}
                onToggle={toggleMenu}
              />
            ))}
          </ul>
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-100 opacity-50 z-30 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default AppSidebar;
