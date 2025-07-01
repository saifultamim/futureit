import { cn } from "@/utils/tailwind-utils";
import React from "react";
import { Icons } from "../Icon";

const DashboardModal = ({
  isOpen,
  onClose,
  title,
  children,
  isFooter = true,
  size = "md",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const sizes = {
    sm: "max-w-[500px] mx-auto  overflow-y-auto",
    md: "max-w-[700px] mx-auto  overflow-y-auto",
    lg: "max-w-[900px] mx-auto  overflow-y-auto",
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          "bg-white w-full rounded-lg shadow-lg overflow-hidden",
          sizes[size]
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-600 uppercase">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {/* &times; */}{" "}
            <Icons.closeOutline className="text-4xl text-red-400 hover:text-red-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-180" />
          </button>
        </div>

        <div className="p-4">{children}</div>

        {isFooter && (
          <div className="flex justify-end p-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardModal;
