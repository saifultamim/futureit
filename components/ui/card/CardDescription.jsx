import React from "react";
import { cn } from "@/utils/tailwind-utils";


const CardDescription = ({
  children,
  className,
}) => {
  return (
    <div className={cn("text-sm text-gray-600", className)}>
      {children}
    </div>
  );
};

export default CardDescription;
