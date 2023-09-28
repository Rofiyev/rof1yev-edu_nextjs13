"use client";

import { StateContextProps } from "@/interface";
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext<StateContextProps | undefined>(undefined);

export const StateContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <MyContext.Provider value={{ showSidebar, toggleSidebar }}>
      {children}
    </MyContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext<StateContextProps | undefined>(MyContext);

  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider"
    );
  }

  const { showSidebar, toggleSidebar } = context;

  return { showSidebar, toggleSidebar };
};
