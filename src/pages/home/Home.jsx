import React, { useState } from "react";
import styles from "./Home.module.css";
import LeftAside from "../../components/aside/LeftAside";
import RightAside from "../../components/aside/RightAside";
import { useAuth } from "../../context/AuthContext";
import PostCard from "../../components/postcard/PostCard";
import { toast } from "react-toastify";
import { BsFilePlus } from "react-icons/bs";

const Home = () => {
  const { AuthState, postPost } = useAuth();
  const [selectedTag, setSelectedTag] = useState("Latest Posts");
  const [createPost, setCreatePost] = useState({
    proPic: AuthState?.user?.proPic,
    firstName: AuthState?.user?.firstName,
    lastName: AuthState?.user?.lastName,
    username: AuthState?.user?.username,
    content: "",
  });

  // console.log(AuthState?.user);
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

  const sortedPosts = getSortedPosts(postsOfFollowedPeople, selectedTag);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <div className={styles.teaxtAreaContainer}>
          {/* <input
            type="text"
            placeholder="What's on your mind?"
            className={styles.textArea}
            value={createPost?.content}
            onChange={(e) =>
              setCreatePost((prev) => ({ ...prev, content: e.target.value }))
            }
          />

          <button onClick={buttonClickHandler} disabled={isPostDisabled}>
            post
          </button> */}

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
        {/* <h3>sort by</h3> */}

        <select
          className={styles.selectedTag}
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option
              key={option.label}
              value={option.value}
              style={{ cursor: "pointer" }}
            >
              {option.label}
            </option>
          ))}
        </select>

        {sortedPosts?.length > 0 ? (
          sortedPosts?.map((post) => (
            <li
              key={post._id}
              style={{ listStyle: "none" }}
              className={styles.showPost}
            >
              <PostCard post={post} />
            </li>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>
            follow people to see their posts
          </h3>
        )}
      </div>
    </div>
  );
};

export default Home;
