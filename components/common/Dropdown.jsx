"use client";

import { ReactNode, useEffect, useRef } from "react";



export const Dropdown = ({
  isOpen,
  onClose,
  trigger,
  children,
  align = "right",
  className = "",
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      {trigger}
      {isOpen && (
        <div
          className={`absolute z-50 mt-2 w-60 sm:w-80 ${
            align === "right" ? "right-0" : "left-0"
          } ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
