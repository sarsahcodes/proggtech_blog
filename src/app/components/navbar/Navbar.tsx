import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

/* Social media images */
const facebook = "/images/facebook.png";
const instagram = "/images/instagram.png";
const tiktok = "/images/tiktok.png";
const youtube = "/images/youtube.png";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <div>
          <Image src={facebook} alt="facebook" width={24} height={24} />
        </div>
        <div>
          <Image src={instagram} alt="instagram" width={24} height={24} />
        </div>
        <div>
          <Image src={tiktok} alt="tiktok" width={24} height={24} />
        </div>
        <div>
          <Image src={youtube} alt="youtube" width={24} height={24} />
        </div>
      </div>
      <div className={styles.logo}>DGMTECH</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/">Contact</Link>
        <Link className={styles.link} href="/">About</Link>
        <AuthLinks/>
      </div>
    </nav>
  );
}

export default Navbar;
