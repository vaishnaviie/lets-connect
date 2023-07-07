import React from "react";
import styles from "./LikedPosts.module.css";
import { useAuth } from "../../context/AuthContext";
import PostCard from "../postcard/PostCard";

const LikedPosts = () => {
  const { AuthState } = useAuth();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        {AuthState?.likedArr?.length > 0 ? (
          AuthState?.likedArr?.map((post) => (
            <li key={post?._id} style={{ listStyle: "none" }}>
              <PostCard post={post} />
            </li>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>No liked post available</h3>
        )}
      </div>
    </div>
  );
};

export default LikedPosts;
