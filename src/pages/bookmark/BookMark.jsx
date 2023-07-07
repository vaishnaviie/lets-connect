import React from "react";
import styles from "./BookMark.module.css";
import LeftAside from "../../components/aside/LeftAside";
import RightAside from "../../components/aside/RightAside";
import PostCard from "../../components/postcard/PostCard";
import { useAuth } from "../../context/AuthContext";

const BookMark = () => {
  const { AuthState } = useAuth();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        {AuthState?.newBookmarkedArr?.length > 0 ? (
          AuthState?.newBookmarkedArr?.map((post) => (
            <li key={post?._id} style={{ listStyle: "none" }}>
              <PostCard post={post} />
            </li>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>No bookmarks available </h3>
        )}
      </div>
    </div>
  );
};

export default BookMark;
