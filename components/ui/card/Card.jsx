import React from "react";
import { cn } from "@/utils/tailwind-utils";

const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
