import React from "react";
import styles from "./Landing.module.css";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}></div>
      <div>
        <button
          className={styles.btn_sign_up}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <Link
          to="/signin"
          className={styles.already_account}
          // onClick={() => navigate("/signin")}
        >
          already have an accout?
        </Link>
      </div>
    </div>
  );
};

export default Landing;
