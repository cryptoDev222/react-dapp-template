import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderContent } from "./components";
import styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <HeaderContent />
      <div className={styles.pageContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default Main;
