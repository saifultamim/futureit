import React from "react";
import { TabsContext } from "./tabs-context";

export const Tabs = ({
  defaultValue,
  children,
  className = "",
}) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};
