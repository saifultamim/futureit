import React from "react";
import { cn } from "@/utils/tailwind-utils";

const CardHead = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-gray-100 px-4 py-3 rounded-t-lg border-b border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardHead;
