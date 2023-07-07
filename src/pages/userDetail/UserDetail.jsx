import React, { useEffect } from "react";
import styles from "./UserDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { ACTION } from "../../constant/constant";
import PostCard from "../../components/postcard/PostCard";
import { useState } from "react";
import EditProfileModal from "../../components/editProfileModal/EditProfileModal";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const UserDetail = () => {
  // const { userId } = useParams();
  const { AuthState, followUserFunc, unFollowUserFunc, isAlreadyFollowed } =
    useAuth();
  const [editProfileModal, setEditProfileModal] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.hr}>
        <div className={styles.userDetailContainer}>
          {AuthState?.displaySingleUsersDetailsInfo?.firstName ===
          AuthState?.user?.firstName ? (
            <BiDotsHorizontalRounded
              onClick={() => setEditProfileModal((prev) => !prev)}
              style={{
                float: "right",
                fontSize: "1.2rem",
                margin: "1rem 1rem 0rem 0rem",
              }}
            />
          ) : (
            <button
              className={styles.btnFollow}
              onClick={() => {
                if (
                  isAlreadyFollowed(
                    AuthState?.user?.following,
                    AuthState?.displaySingleUsersDetailsInfo?._id
                  )
                ) {
                  unFollowUserFunc(
                    AuthState?.displaySingleUsersDetailsInfo?._id,
                    AuthState?.displaySingleUsersDetailsInfo?.firstName
                  );
                } else {
                  followUserFunc(
                    AuthState?.displaySingleUsersDetailsInfo?._id,
                    AuthState?.displaySingleUsersDetailsInfo?.firstName
                  );
                }
              }}
              style={{ cursor: "pointer" }}
            >
              {isAlreadyFollowed(
                AuthState?.user?.following,
                AuthState?.displaySingleUsersDetailsInfo?._id
              )
                ? `Unfollow`
                : `Follow`}
            </button>
          )}

          <div className={styles.userAboutContainer}>
            <img
              className={styles.userProPic}
              src={
                AuthState?.displaySingleUsersDetailsInfo?.proPic ||
                "https://i.pinimg.com/236x/ac/6f/7f/ac6f7fda3d18c5ced8f660291a3f0921.jpg"
              }
              height="80px"
              width="80px"
              alt="pic"
            />
            <div className={styles.textDetail}>
              <div className={styles.nameUserNameContainer}>
                <span className={styles.name}>
                  {AuthState?.displaySingleUsersDetailsInfo?.firstName} &nbsp;
                  {AuthState?.displaySingleUsersDetailsInfo?.lastName}
                </span>
                <br />
                <small className={styles.userName}>
                  @{AuthState?.displaySingleUsersDetailsInfo?.username}
                </small>
              </div>
              <div className={styles.bioNlink}>
                <span className={styles.bio}>
                  {AuthState?.displaySingleUsersDetailsInfo?.bio}
                </span>{" "}
                <br />
                <a
                  className={styles.link}
                  href={AuthState?.displaySingleUsersDetailsInfo?.link}
                >
                  {AuthState?.displaySingleUsersDetailsInfo?.link}
                </a>
                {/* <span className={styles.link}>
                  {AuthState?.displaySingleUsersDetailsInfo?.link}
                </span> */}
              </div>
            </div>
          </div>
          <div className={styles.PFFContainer}>
            <span style={{ fontSize: "17px" }}>
              {AuthState?.displaySingleUserPostsArr?.length} posts
            </span>
            <span style={{ fontSize: "17px" }}>
              {AuthState?.displaySingleUsersDetailsInfo?.followers?.length}{" "}
              followers
            </span>
            <span style={{ fontSize: "17px" }}>
              {AuthState?.displaySingleUsersDetailsInfo?.following?.length}{" "}
              following
            </span>

            {/* {AuthState?.user?._id ===
              AuthState?.displaySingleUsersDetails?._id && (
              <button onClick={() => setEditProfileModal((prev) => !prev)}>
                edit profile{" "}
              </button>
            )} */}
          </div>
        </div>
      </div>
      {/* </div> */}

      {editProfileModal && (
        <EditProfileModal setEditProfileModal={setEditProfileModal} />
      )}

      {AuthState?.displaySingleUserPostsArr?.map((post) => (
        <li key={post._id} style={{ listStyle: "none" }}>
          {<PostCard post={post} />}
        </li>
      ))}
      {/* {AuthState?.displayUser?.firstName}
      <br />
      <b>Follwers</b>
      {AuthState?.displayUser?.followers?.map((e) => (
        <li>{e?.firstName}</li>
      ))}
      <b>Follwing</b>
      {AuthState?.displayUser?.following?.map((e) => (
        <li>{e?.firstName}</li>
      ))} */}
    </div>
  );
};

export default UserDetail;
