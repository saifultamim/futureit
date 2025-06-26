import { cn } from "@/utils/tailwind-utils";
import React from "react";



const DashboardModal = ({ isOpen, onClose, title, children, isFooter = true, size = 'md' }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizes = {
    sm: 'max-w-[500px] mx-auto  overflow-y-auto',
    md: 'max-w-[700px] mx-auto  overflow-y-auto',
    lg: 'max-w-[900px] mx-auto  overflow-y-auto',
}

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      {/* Modal container */}
      <div className={cn("bg-white w-full rounded-lg shadow-lg overflow-hidden", sizes[size])}>
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Modal content */}
        <div className="p-4">{children}</div>

        {/* Modal footer */}
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
