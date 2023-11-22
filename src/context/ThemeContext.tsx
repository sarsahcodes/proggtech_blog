"use client"

import { ThemeTypes } from "@/src/types/baseTypes";
import React, { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeTypes.LIGHT,
  toggleTheme: () => {}, // Provide a default empty function
});

interface Props {
  children: React.ReactNode;
}

const getFromLocalStorage = (): ThemeContextType => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return { theme: value || ThemeTypes.LIGHT, toggleTheme: () => {} };
  }
  return { theme: ThemeTypes.LIGHT, toggleTheme: () => {} };
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContextType>(() => {
    return getFromLocalStorage();
  });

  useEffect(() => {
    localStorage.setItem("theme", theme.theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme =
      theme.theme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT;
    setTheme({ ...theme, theme: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
