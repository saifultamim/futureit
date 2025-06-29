import React from "react";


export const TabsList = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}
      role="tablist"
      aria-orientation="horizontal"
    >
      {children}
    </div>
  );
};
