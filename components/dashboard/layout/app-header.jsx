// // "use client";

// // // import { Icons } from "@/components/Icon";
// // // import { useSidebar } from "@/contexts/SidebarContext";
// // import React, { useState } from "react";
// // // import { MessageDropdown } from "./_components/MessageDropdown";
// // // import { NotificationDropdown } from "./_components/NotificationDropdown";
// // // import { UserProfileDropdown } from "./_components/UserProfileDropdown";



// // export const NavigationButton= ({
// //   onClick,
// //   ariaControls,
// //   children,
// // }) => (
// //   <button
// //     onClick={onClick}
// //     aria-controls={ariaControls}
// //     type="button"
// //     className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// //   >
// //     {children}
// //   </button>
// // );

// // export const MenuIcon = () => (
// //   <svg
// //     className="w-6 h-6"
// //     aria-hidden="true"
// //     fill="currentColor"
// //     viewBox="0 0 20 20"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       clipRule="evenodd"
// //       fillRule="evenodd"
// //       d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
// //     />
// //   </svg>
// // );

// // const AppHeader= () => {
// // //   const { toggleSidebar } = useSidebar();

// //   return (
// //     <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
// //       <div className="px-4 sm:px-10">
// //         <nav className="flex items-center justify-between py-3 text-white">
// //           {/* Left Side: Menu Toggle and Search (Desktop Only) */}aslfasdfasd
// //           <div className="flex items-center">
// //             <NavigationButton
// //             //   onClick={toggleSidebar}
// //               ariaControls="logo-sidebar"
// //             >
// //               <span className="sr-only">Toggle sidebar</span>
// //               {/* <MenuIcon /> */}
// //             </NavigationButton>
// //           </div>

// //           {/* Right Side Actions */}
// //           <div className="flex items-baseline gap-8 leading-normal">
// //             {/* <NotificationDropdown /> */}
// //             {/* <MessageDropdown /> */}
// //             {/* <UserProfileDropdown /> */}
// //           </div>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default AppHeader;



// // ======================================================================================
// "use client";

// // import { Icons } from "@/components/Icon";
// import { useSidebar } from "@/contexts/SidebarContext";
// import React, { useState } from "react";
// // import { MessageDropdown } from "./_components/MessageDropdown";
// // import { NotificationDropdown } from "./_components/NotificationDropdown";
// import { UserProfileDropdown } from "./components/UserProfileDropdown";
// import { Icons } from "@/components/Icon";




// export const NavigationButton = ({
//   onClick,
//   ariaControls,
//   children,
// }) => (
//   <button
//     onClick={onClick}
//     aria-controls={ariaControls}
//     type="button"
//     className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//   >
//     {children}
//   </button>
// );

// export const MenuIcon = () => (
//   <svg
//     className="w-6 h-6"
//     aria-hidden="true"
//     fill="currentColor"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       clipRule="evenodd"
//       fillRule="evenodd"
//       d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//     />
//   </svg>
// );

// const AppHeader = () => {
//   const { toggleSidebar } = useSidebar();

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//       <div className="px-4 sm:px-10">
//         <nav className="flex items-center justify-between py-3">
//           {/* Left Side: Menu Toggle and Search (Desktop Only) */}
//           <div className="flex items-center border border-red-600">
//             <NavigationButton
//               onClick={toggleSidebar}
//               ariaControls="logo-sidebar"
//             >
//               <span className="sr-only">Toggle sidebar</span>
//               <Icons.menuICon className='w-6 h-6 bg-red-600' />
//             </NavigationButton>
//           </div>

//           {/* Right Side Actions */}
//           <div className="flex items-baseline gap-8 leading-normal border border-red-600">
//             {/* <NotificationDropdown /> */}
//             {/* <MessageDropdown /> */}
//             <UserProfileDropdown />  
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default AppHeader;
"use client";

import { Icons } from "@/components/Icon";

import React, { useState } from "react";
// import { MessageDropdown } from "./_components/MessageDropdown";
// import { NotificationDropdown } from "./_components/NotificationDropdown";
import { UserProfileDropdown } from "./components/UserProfileDropdown";
import { useSidebar } from "@/contexts/SidebarContext";




export const NavigationButton = ({
  onClick,
  ariaControls,
  children,
}) => (
  <button
    onClick={onClick}
    aria-controls={ariaControls}
    type="button"
    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <p>navigation button</p>
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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-4 sm:px-10">
        <nav className="flex items-center justify-between py-3">
          {/* Left Side: Menu Toggle and Search (Desktop Only) */}
          
          <div className="flex items-center">
            <NavigationButton
              onClick={toggleSidebar}
              ariaControls="logo-sidebar"
            >
              <span className="sr-only">Toggle sidebar</span>
              <Icons.leftArrow />
            
            </NavigationButton>
          </div>
<p>faasdfjalsdfasdf</p>
          {/* Right Side Actions */}
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
