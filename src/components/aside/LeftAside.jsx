import React from "react";
import styles from "./LeftAside.module.css";
import { FaHome } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { MdOutlineBookmark } from "react-icons/md";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import PostModal from "../postModal/PostModal";
import logo from "../../assets/lc.png";

const LeftAside = () => {
  const {
    AuthState,
    logoutHandler,
    displaySingleUsersDetails,
    displaySingleUserPosts,
  } = useAuth();
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}> Let's Connect</div>
      {/* <img src={logo} height="50px" alt="logo " /> */}
      <div className={styles.subContainer}>
        <NavLink to={"/"} className={styles.individualContent}>
          <span>
            <FaHome className={styles.navbarEleLogo} />{" "}
          </span>
          <span className={styles.navbarElements}>Home</span>
        </NavLink>

        <NavLink to={"/explore"} className={styles.individualContent}>
          <span>
            <IoIosRocket className={styles.navbarEleLogo} />
          </span>
          <span className={styles.navbarElements}>Explore</span>
        </NavLink>

        <NavLink to={"/bookmark"} className={styles.individualContent}>
          <span>
            <MdOutlineBookmark className={styles.navbarEleLogo} />
          </span>
          <span className={styles.navbarElements}>Bookmarks</span>
        </NavLink>

        <NavLink to={"/likedPosts"} className={styles.individualContent}>
          <span>
            <BsSuitHeartFill className={styles.navbarEleLogo} />
          </span>
          <span className={styles.navbarElements}>Liked Posts</span>
        </NavLink>

        {/* <NavLink to={"/profile"} className={styles.individualContent}>
          <span>
            <MdAccountCircle className={styles.navbarEleLogo} />
          </span>
          <span className={styles.navbarElements}>Profile</span>
        </NavLink> */}

        {/* <button
          style={{ cursor: !AuthState?.isLoggedIn && "not-allowed" }}
          disabled={!AuthState?.isLoggedIn && true}
          onClick={() => setShowCreatePostModal((prev) => !prev)}
          className={styles.btnCreatePost}
        >
          create post
        </button> */}

        {/* <button
          className={styles.btnSignIn}
          onClick={() => navigate("/signIn")}
        >
          Sign In
        </button> */}

        <button className={styles.btnSignOut} onClick={logoutHandler}>
          Sign Out
        </button>

        <div>
          {showCreatePostModal && (
            <PostModal setShowCreatePostModal={setShowCreatePostModal} />
          )}
        </div>

        <div
          className={styles.UsersProPic}
          onClick={() => {
            displaySingleUsersDetails(AuthState?.user?._id);
            displaySingleUserPosts(AuthState?.user?.username);
            navigate(`/profile/${AuthState?.user?.username}`);
          }}
        >
          <img
            style={{
              cursor: "pointer",
              border: "1px solid blue",
              // margin: "1rem 1rem 0rem 1rem",
            }}
            src={
              AuthState?.user?.proPic ||
              "https://i.pinimg.com/236x/ac/6f/7f/ac6f7fda3d18c5ced8f660291a3f0921.jpg"
            }
            height={"50rem"}
            width={"50rem"}
            alt="pro pic"
          />
          {AuthState?.user?.firstName ? (
            <span
              style={{
                cursor: "pointer",
                fontFamily: "DM Serif Display",
                // margin: "0rem 1rem 1rem 1rem",
              }}
            >
              {AuthState?.user?.firstName} &nbsp;{AuthState?.user?.lastName}
            </span>
          ) : (
            "User"
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
