import Link from "next/link";
import React from "react";
import styles from "./authLinks.module.css";

const status = "notAuthenticated";
function AuthLinks() {
  return (
    <>
      {status != "notAuthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
}

export default AuthLinks;
