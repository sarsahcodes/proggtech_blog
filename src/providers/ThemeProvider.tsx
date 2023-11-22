"use client";

import { ThemeContext } from "@/src/context/ThemeContext";
import React, { useContext, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
