"use client";

import { useDropdown } from "@/hooks/useDropdown";
import { Dropdown } from "@/components/common/Dropdown";
import Link from "next/link";
// import { signOut } from "next-auth/react";
import Image from "next/image";
// import { useSession } from "next-auth/react";



export const UserProfileDropdown = () => {
  const { isOpen, toggle, close } = useDropdown();

  // const { data: session } = useSession();
  const menuItems = [
    { label: "My Profile", href: "/student/profile" },
    { label: "Settings", href: "#" },
    { label: "Home", href: "/" },
  ];

  const handleLogout = async () => {
    // await signOut({ redirectTo: "/" });
  };

  const trigger = (
    <button
      type="button"
      onClick={toggle}
      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    >
      <span className="sr-only">Open user menu</span>
      <Image
        className="w-8 h-8 rounded-full"
        src="/images/avatar.png"
        alt="user photo"
        width={100}
        height={100}
      />
    </button>
  );

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={close}
      trigger={trigger}
      className="w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
        <p className="text-sm text-gray-900 dark:text-white">
          {/* {session?.user?.name || "Neil Sims"} */}
          Neil Sims
        </p>
        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
          {/* {session?.user?.email || "neil.sims@flowbite.com"} */}
             "neil.sims@flowbite.com
        </p>
      </div>
      <ul className="py-1">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="border-t border-gray-200 dark:border-gray-600">
          <form action={handleLogout}>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left font-semibold">
              Log Out
            </button>
          </form>
        </li>
      </ul>
    </Dropdown>
  );
};
