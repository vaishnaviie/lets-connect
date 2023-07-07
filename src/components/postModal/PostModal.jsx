import React from "react";
import styles from "./PostModal.module.css";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

const PostModal = ({ post, setShowEditModal, setShowCreatePostModal }) => {
  const [updatedPost, setUpdatedPost] = useState(post || {});

  const { editPost, postPost } = useAuth();

  const isPostDisabled = !updatedPost?.content?.trim();

  const buttonClickHandler = async () => {
    if (post) {
      try {
        editPost(post._id, { content: updatedPost?.content });
        toast("Edited post successfully!");
      } catch (e) {
        console.log(e);
        toast("Something went wrong!");
      } finally {
        setUpdatedPost({});
        setShowEditModal(false);
      }
    } else {
      try {
        postPost({ content: updatedPost?.content });
        toast("Added new post successfully!");
      } catch (e) {
        console.log(e);
        toast("Something went wrong!");
      } finally {
        setUpdatedPost({});
        setShowCreatePostModal(false);
      }
    }
  };

  return (
    <div className={styles.editPostModalContainer}>
      <div className={styles.editPostModal}>
        <div className={styles.editPostModalHeader}>
          {post ? <h1>Edit Post</h1> : <h1>Create Post</h1>}
          <RxCross2
            className={styles.cross}
            onClick={() =>
              post ? setShowEditModal(false) : setShowCreatePostModal(false)
            }
          >
            X
          </RxCross2>
        </div>
        <textarea
          className={styles.textarea}
          value={updatedPost?.content}
          onChange={(e) =>
            setUpdatedPost((prev) => ({ ...prev, content: e.target.value }))
          }
        ></textarea>
        <button
          className={styles.btnPostUpdate}
          onClick={buttonClickHandler}
          disabled={isPostDisabled}
        >
          {post ? "Update" : "Post"}
        </button>
      </div>
    </div>
  );
};

export default PostModal;
