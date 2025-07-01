"use client";

import { useDropdown } from "@/hooks/useDropdown";
import { Dropdown } from "@/components/common/Dropdown";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/Icon";

export const UserProfileDropdown = () => {
  const { isOpen, toggle, close } = useDropdown();
  const menuItems = [
    {
      label: "My Profile",
      href: "/dashboard/profile",
      icons: <Icons.eye size={18} />,
    },
    { label: "Home", href: "/", icons: <Icons.logout size={15} /> },
  ];
  const handleLogout = async () => {};
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
      className="w-48 bg-white rounded-lg shadow-xl  ring-opacity-5"
    >
      <div className="px-4 py-3 border-b text-gray-900 border-gray-200 dark:border-gray-600">
        <p className="text-sm text-gray-90 ">Neil Sims</p>
        <p className="text-sm font-medium text-gray-900 truncate ">
          neilsims@flowbite.com
        </p>
      </div>
      <ul className="py-1">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex items-center row-re px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-gray-600 dark:hover:text-white gap-2"
            >
              {item?.icons}
              {item.label}
            </Link>
          </li>
        ))}
        <li className="border-t border-gray-200 dark:border-gray-600">
          <form action={handleLogout}>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-gray-600 dark:hover:text-white w-full text-left font-semibold">
              Log Out
            </button>
          </form>
        </li>
      </ul>
    </Dropdown>
  );
};
