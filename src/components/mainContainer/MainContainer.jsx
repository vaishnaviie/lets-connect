import React from "react";
import styles from "./Maincontainer.module.css";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import FollowBar from "../followBar/FollowBar";
import LeftAside from "../aside/LeftAside";
import RightAside from "../aside/RightAside";

const MainContainer = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <LeftAside />
        <div>
          <Search />
          <div className={styles.childDiv}>{children}</div>
        </div>
        <RightAside />
      </div>
    </div>
  );
};

export default MainContainer;
