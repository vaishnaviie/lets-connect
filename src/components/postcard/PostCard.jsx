import React from "react";
import styles from "./PostCard.module.css";
import { useAuth } from "../../context/AuthContext";
import { BsSuitHeartFill } from "react-icons/bs";
import { GoBookmarkFill } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ACTION } from "../../constant/constant";
import { useState } from "react";
import PostModal from "../postModal/PostModal";

const PostCard = ({ post }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { getSinglePost } = useAuth();
  const navigate = useNavigate();
  // console.log(post);
  const {
    AuthState,
    AuthDispatch,
    deletePost,
    editPost,
    likePost,
    disLikePost,
    bookmarkPost,
    removeBookmarkPost,
    isPostBookmarked,
    isPostLiked,
    removePostFromLikedArr,
  } = useAuth();
  // console.log(AuthState?.getAllPostsArr);
  // console.log(AuthState?.user);
  // console.log(new Date(post?.createdAt).toDateString());

  return (
    <div className={styles.mainContainer}>
      {/* {AuthState?.getAllPostsArr?.map((post) => (
        <li key={post.username} className={styles.showPost}> */}
      <div className={styles.postCard}>
        <div className={styles.editDelete}>
          {post.username === AuthState?.user?.username && (
            <BiDotsHorizontalRounded
              onClick={() => setShowOptions((prev) => !prev)}
              style={{ float: "right", fontSize: "1.2rem" }}
            />
          )}
          {showOptions && post.username === AuthState?.user?.username && (
            <div className={styles.editDeleteModal}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deletePost(post._id);
                  setShowOptions((prev) => !prev);
                }}
              >
                Delete
              </div>
              <hr />
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowOptions((prev) => !prev);
                  setShowEditModal((prev) => !prev);
                }}
              >
                Edit
              </div>
            </div>
          )}
        </div>
        <div className={styles.imgNameUserNameContainer}>
          <img
            className={styles.postProPic}
            src={
              post.proPic ||
              "https://i.pinimg.com/236x/ac/6f/7f/ac6f7fda3d18c5ced8f660291a3f0921.jpg"
            }
            height="50vh"
            width="50vw"
            alt="pro pic"
          />

          <div className={styles.nameUserNameContainer}>
            <span className={styles.name}>
              {post?.firstName} &nbsp;
              {post?.lastName}
            </span>
            <br />
            <small className={styles.userName}>@{post?.username}</small>
          </div>
          <span className={styles.date}>
            {new Date(post?.createdAt).toDateString()}
          </span>
        </div>
        <p
          className={styles.postContent}
          onClick={() => {
            getSinglePost(post?._id);
            navigate(`/post/${post?._id}`);
          }}
        >
          <div>{post?.content}</div>
        </p>
        <hr />
        <div className={styles.iconContainer}>
          <div className={styles.likes}>
            <span
              style={{
                fontSize: "1.1rem",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              {post?.likes?.likeCount === 0 ? "" : post?.likes?.likeCount}
            </span>
            &nbsp;
            <BsSuitHeartFill
              style={{ fontSize: "1.2rem" }}
              className={
                isPostLiked(AuthState?.likedArr, post._id)
                  ? `${styles.coloredLike}`
                  : `${styles.grayLike}`
              }
              onClick={() => {
                if (isPostLiked(AuthState?.likedArr, post._id)) {
                  removePostFromLikedArr(AuthState?.likedArr, post._id);
                  disLikePost(post._id);
                } else {
                  likePost(post._id, post);
                  // AuthDispatch({
                  //   type: ACTION.SET_LIKED_ARR,
                  //   payload: [...AuthState?.likedArr, post],
                  // });
                }
              }}
            ></BsSuitHeartFill>
          </div>

          <GoBookmarkFill
            style={{ fontSize: "1.2rem" }}
            className={
              isPostBookmarked(AuthState?.getAllBookmarkedArr, post._id)
                ? `${styles.coloredBookmark}`
                : `${styles.grayBookmark}`
            }
            onClick={() => {
              // if (AuthState?.isLoggedIn) {

              if (isPostBookmarked(AuthState?.getAllBookmarkedArr, post._id)) {
                removeBookmarkPost(post._id);
              } else {
                bookmarkPost(post._id, post);
              }

              // }
              // else {
              //   toast("please login to continue!");
              //   navigate("/signIn");
              // }
            }}
          ></GoBookmarkFill>
          <FiShare2
            onClick={() => toast("dummy shared!")}
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
          />
        </div>
        {/* {post.username === AuthState?.user?.username && (
          <div>
            <button onClick={() => deletePost(post._id)}>delete post</button>
            <button onClick={() => setShowEditModal((prev) => !prev)}>
              edit post
            </button>
          </div>
        )} */}
      </div>

      {showEditModal && (
        <PostModal post={post} setShowEditModal={setShowEditModal} />
      )}
    </div>
  );
};

export default PostCard;
