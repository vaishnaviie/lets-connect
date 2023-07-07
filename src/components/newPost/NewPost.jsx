import React, { useState } from "react";
import styles from "./NewPost.module.css";
import { v4 as uuid } from "uuid";
import { useAuth } from "../../context/AuthContext";

const NewPost = () => {
  const { AuthState, postPost } = useAuth();
  const [newPost, setNewPost] = useState({
    _id: "",
    content: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: AuthState?.user?.firstName,
  });

  const submitHandler = (data) => {
    data.preventDefault();
    postPost(newPost);
  };
  console.log(newPost);
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="what's on your mind?"
          id="content"
          value={newPost?.content}
          onChange={(e) =>
            setNewPost((prev) => ({
              ...prev,
              content: e.target.value,
              _id: uuid(),
            }))
          }
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPost;
