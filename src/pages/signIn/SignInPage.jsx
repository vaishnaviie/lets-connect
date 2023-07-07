import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const guestUserData = {
    username: "adarshbalika",
    password: "adarshBalika123",
  };
  const { authState, signInHandler } = useAuth();
  // console.log(authState);
  const loginHandler = (e) => {
    e.preventDefault();
    signInHandler(userData);
  };

  const loginAsGuestHandler = (e) => {
    e.preventDefault();
    setUserData(guestUserData);
    signInHandler(guestUserData);
  };
  return (
    <form>
      <div className={styles.sign_in_container}>
        <div className={styles.sign_in_sub_container}>
          <h2 className={styles.sign_in_heading}>Sign In</h2>
          <label htmlFor="username">
            {/* Email address */}
            <input
              className={styles.sign_in_email}
              type="text"
              id="username"
              placeholder="username"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, username: e.target.value }))
              }
              required
            />
            {/* {userData.email} */}
          </label>
          <br />
          <label htmlFor="password">
            {/* Password */}
            <input
              className={styles.sign_in_password}
              type="password"
              id="password"
              placeholder="*******"
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            {/* {userData.password} */}
          </label>
          <br />
          <button
            className={styles.sign_in_button}
            onClick={(e) => loginHandler(e)}
          >
            Sign in
          </button>
          <br />
          <button
            className={styles.sign_in_guest_button}
            onClick={(e) => loginAsGuestHandler(e)}
          >
            Sign in as Guest
          </button>
          {/* <Link to={"/signUp"}>Create an account</Link> */}
          <p className={styles.account} onClick={() => navigate("/SignUp")}>
            Create an account
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignInPage;
