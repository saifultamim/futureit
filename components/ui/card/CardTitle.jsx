import React from "react";
import { cn } from "@/utils/tailwind-utils";

const CardTitle = ({ children, className }) => {
  return (
    <div className={cn("text-2xl font-semibold text-gray-600", className)}>
      {children}
    </div>
  );
};

export default CardTitle;
