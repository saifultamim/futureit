import React from "react";
import { TabsContext } from "./tabs-context";

export const TabsContent = ({ value, children, className = "" }) => {
  const { value: selectedValue } = React.useContext(TabsContext);
  const isSelected = value === selectedValue;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? "active" : "inactive"}
      className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  );
};
