import React from "react";
import styles from "./RightAside.module.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RightAside = () => {
  const navigate = useNavigate();
  const {
    AuthState,
    displaySingleUserPosts,
    followUserFunc,
    unFollowUserFunc,
    isAlreadyFollowed,
    displaySingleUsersDetails,
  } = useAuth();

  const PeopleUMayKnow = AuthState?.peopleYouMayKnowArr?.filter(
    (peeps) => peeps?._id !== AuthState?.user?._id
  );

  // console.log(PeopleUMayKnow);
  // console.log(AuthState?.user);
  // console.log("followers", AuthState?.user?.followers);
  // console.log("following", AuthState?.user?.following);
  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.UsersProPic}>
        <img
          style={{
            cursor: "pointer",
            border: "1px solid blue",
            margin: "1rem 1rem 0rem 1rem",
          }}
          onClick={() => {
            displaySingleUsersDetails(AuthState?.user?._id);
            displaySingleUserPosts(AuthState?.user?.username);
            navigate(`/profile/${AuthState?.user?.username}`);
          }}
          src={
            AuthState?.user?.proPic ||
            "https://i.pinimg.com/236x/ac/6f/7f/ac6f7fda3d18c5ced8f660291a3f0921.jpg"
          }
          height={"50rem"}
          width={"50rem"}
          alt="pro pic"
        />
        <span
          style={{
            cursor: "pointer",
            fontFamily: "DM Serif Display",
            margin: "0rem 1rem 1rem 1rem",
          }}
        >
          {AuthState?.user?.firstName}
        </span>
      </div> */}
      <span className={styles.PYMK}>people you may know...</span>
      <div className={styles.allUser}>
        {PeopleUMayKnow?.length > 0 ? (
          PeopleUMayKnow?.map((user) => (
            <li key={user._id}>
              <div className={styles.individualUser}>
                <div className={styles.dpNname}>
                  <img
                    className={styles.allUsersProPic}
                    src={user.proPic}
                    height="37px"
                    width="37px"
                    alt="proPic"
                    onClick={() => {
                      displaySingleUsersDetails(user?._id);
                      displaySingleUserPosts(user?.username);
                      navigate(`/profile/${user?.username}`);
                    }}
                  />
                  <div className={styles.nameUsernameContainer}>
                    <span
                      className={styles.name}
                      onClick={() => {
                        displaySingleUsersDetails(user?._id);
                        displaySingleUserPosts(user?.username);
                        navigate(`/profile/${user?.username}`);
                      }}
                    >
                      {user?.firstName} &nbsp;
                      {user?.lastName}
                    </span>{" "}
                    <br />
                    <small className={styles.userName}>@{user?.username}</small>
                  </div>
                </div>
                <button
                  className={styles.btnFollow}
                  onClick={() => {
                    if (
                      isAlreadyFollowed(AuthState?.user?.following, user._id)
                    ) {
                      unFollowUserFunc(user._id, user?.firstName, user);
                    } else {
                      followUserFunc(user._id, user?.firstName);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {isAlreadyFollowed(AuthState?.user?.following, user?._id)
                    ? `Unfollow`
                    : `Follow`}
                </button>
              </div>
            </li>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>Empty</h3>
        )}
      </div>
    </div>
  );
};

export default RightAside;
