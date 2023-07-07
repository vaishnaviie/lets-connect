import React, { useState } from "react";
import styles from "./Explore.module.css";
import PostCard from "../../components/postcard/PostCard";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Explore = () => {
  const { AuthState, postPost } = useAuth();
  const [selectedTag, setSelectedTag] = useState("Latest Posts");
  const [createPost, setCreatePost] = useState({
    proPic: AuthState?.user?.proPic,
    firstName: AuthState?.user?.firstName,
    lastName: AuthState?.user?.lastName,
    username: AuthState?.user?.username,
    content: "",
  });
  // console.log(createPost);
  const buttonClickHandler = async () => {
    try {
      // postPost({ content: createPost?.content });
      postPost(createPost);
    } catch (e) {
      console.log(e);
      toast("Something went wrong!");
    } finally {
      setCreatePost({
        firstName: "",
        lastName: "",
        username: "",
        content: "",
      });
    }
  };
  const isPostDisabled = !createPost?.content?.trim();

  const sortOptions = [
    { label: "Latest", value: "Latest Posts" },
    { label: "Oldest", value: "Oldest Posts" },
    { label: "Trending", value: "Trending Posts" },
  ];

  const getSortedPosts = (posts, sortBy) => {
    // console.log(selectedTag);
    switch (sortBy) {
      case "Latest Posts":
        return [...posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "Oldest Posts":
        return [...posts].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "Trending Posts":
        return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
      default:
        return [...posts];
    }
  };

  const postsOfFollowedPeople = AuthState?.getAllPostsArr?.filter(
    (post) =>
      AuthState?.user?.following?.some(
        ({ username }) => username === post.username
      ) || AuthState?.user?.username === post.username
  );

  const sortedPosts = getSortedPosts(AuthState?.getAllPostsArr, selectedTag);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <div className={styles.teaxtAreaContainer}>
          <textarea
            placeholder="What's on your mind?"
            className={styles.textArea}
            value={createPost?.content}
            onChange={(e) => {
              // setCreatePost((prev) => ({ ...prev, content: e.target.value }));

              setCreatePost((prev) => ({
                ...prev,
                proPic: AuthState?.user?.proPic,
                firstName: AuthState?.user?.firstName,
                lastName: AuthState?.user?.lastName,
                username: AuthState?.user?.username,
                content: e.target.value,
              }));
            }}
          ></textarea>
          <button
            className={styles.btnPlus}
            onClick={buttonClickHandler}
            disabled={isPostDisabled}
          >
            +
          </button>
        </div>

        <select
          className={styles.selectedTag}
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          {sortOptions?.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {sortedPosts?.map((post) => (
          <li
            style={{ listStyle: "none" }}
            key={post._id}
            className={styles.showPost}
          >
            <PostCard post={post} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Explore;
