"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
