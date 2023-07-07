import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { signupHandler } = useAuth();
  const [userDetail, setuserDetail] = useState({
    _id: uuid(),
    firstName: "",
    lastName: "",
    username: "",
    bio: "",
    link: "",
    password: "",
    confirmPassword: "",
  });
  const signUpHandlerr = (e) => {
    e.preventDefault();
    if (userDetail?.password !== userDetail?.confirmPassword) {
      alert("password and confirm password should be same");
    } else {
      signupHandler(userDetail);
    }
  };
  return (
    <div>
      <div className={styles.sign_up_container}>
        <div className={styles.sign_up_sub_container}>
          <h2>Sign Up</h2>
          <form onSubmit={(e) => signUpHandlerr(e)}>
            <label htmlFor="firstName">
              {/* First Name */}
              <input
                className={styles.sign_up_input}
                type="text"
                id="firstName"
                placeholder="first name"
                value={userDetail.firstName}
                onChange={(e) =>
                  setuserDetail((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label htmlFor="lastName">
              {/* Last Name */}
              <input
                className={styles.sign_up_input}
                type="text"
                id="lastName"
                placeholder="last name"
                value={userDetail.lastName}
                onChange={(e) =>
                  setuserDetail((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label htmlFor="username">
              {/* Email address */}
              <input
                className={styles.sign_up_input}
                type="text"
                id="username"
                placeholder="username"
                value={userDetail.username}
                onChange={(e) =>
                  setuserDetail((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label htmlFor="bio">
              {/* Email address */}
              <input
                className={styles.sign_up_input}
                type="text"
                id="bio"
                placeholder="bio"
                value={userDetail.bio}
                onChange={(e) =>
                  setuserDetail((prev) => ({
                    ...prev,
                    bio: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label htmlFor="link">
              {/* Email address */}
              <input
                className={styles.sign_up_input}
                type="text"
                id="link"
                placeholder="link"
                value={userDetail.link}
                onChange={(e) =>
                  setuserDetail((prev) => ({
                    ...prev,
                    link: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label htmlFor="password">
              {/* Password */}
              <input
                className={styles.sign_up_input}
                type="password"
                id="password"
                placeholder="password"
                value={userDetail.password}
                onChange={(e) =>
                  setuserDetail((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                required
              />
            </label>
            <label htmlFor="confirmPassword">
              {/* Confirm Password */}
              <input
                className={styles.sign_up_input}
                type="password"
                id="confirmPassword"
                placeholder="confirm password"
                value={userDetail.confirmPassword}
                onChange={(e) =>
                  setuserDetail((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                required
              />
            </label>
            <br />
            <button className={styles.btn_sign_up} type="submit">
              Sign up
            </button>
            {/* <Link to={"/signIn"}>Already have an account ?</Link> */}
            <p
              className={styles.already_account}
              onClick={() => navigate("/signIn")}
            >
              Already have an account ?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
