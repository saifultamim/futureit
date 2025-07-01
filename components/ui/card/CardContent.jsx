import React from "react";
import { cn } from "@/utils/tailwind-utils";

const CardContent = ({ children, className }) => (
  <div className={cn("p-4", className)}>{children}</div>
);

export default CardContent;
