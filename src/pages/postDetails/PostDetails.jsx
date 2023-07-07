import React from "react";
import styles from "./PostDetails.module.css";
import { useAuth } from "../../context/AuthContext";
import PostCard from "../../components/postcard/PostCard";

const PostDetails = () => {
  const { AuthState } = useAuth();
  return (
    <div>
      <PostCard post={AuthState?.singlePostDetails} />
    </div>
  );
};

export default PostDetails;
