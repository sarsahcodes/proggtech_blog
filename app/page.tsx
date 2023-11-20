import React from "react";
import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured";
import Category from "./components/category/Category";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

function page() {
  return (
    <div className={styles.container}>
      <Featured />
      <Category />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default page;
