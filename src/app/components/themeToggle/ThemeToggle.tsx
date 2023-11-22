"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/src/context/ThemeContext";

const moon = "/images/crescent-moon.png";
const sun = "/images/sun.png";
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={
        theme === "dark"
          ? { left: 1, backgroundColor: "white" }
          : { left: 1, backgroundColor: "#0f172a" }
      }
      className={styles.container}
      onClick={toggleTheme}
    >
      <Image src={moon} alt="moon" width={14} height={14} />
      <div
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
        className={styles.ball}
      ></div>
      <Image src={sun} alt="sun" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
