import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthInitialState } from "../reducer/AuthReducer";
import { AuthReducer } from "../reducer/AuthReducer";
import { ACTION } from "../constant/constant";
import { ToastContainer, toast } from "react-toastify";

const AuthContextProvider = createContext();
const encodedToken = localStorage.getItem("token");
export const useAuth = () => useContext(AuthContextProvider);

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  const [AuthState, AuthDispatch] = useReducer(AuthReducer, AuthInitialState);
  // console.log(AuthState?.getAllBookmarkedArr);
  // console.log(AuthState?.likedArr);
  // console.log(AuthState?.getAllBookmarkedArr);
  // console.log(AuthState?.getAllPostsArr);
  // console.log(AuthState?.userList);
  // console.log(AuthState?.peopleYouMayKnowArr);
  console.log(AuthState?.userList);

  const setingHomePostArrFunc = (userName) => {
    const posts = AuthState?.getAllPostsArr?.filter(
      (post) => post?.username === userName
    );
    console.log(posts);
  };

  const removebookmarkFunc = (ID) => {
    const newArr = AuthState?.newBookmarkedArr?.filter(
      (post) => post._id !== ID
    );
    AuthDispatch({
      type: ACTION.NEW_BOOKMARKED_ARR,
      payload: newArr,
    });
  };

  const signupHandler = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(`/api/auth/signup`, userData);
      // console.log(data);
      // console.log(data?.createdUser);
      localStorage.setItem("token", data?.encodedToken);
      AuthDispatch({ type: ACTION.IS_SIGNED_IN, payload: true });
      AuthDispatch({ type: ACTION.SET_USER, payload: data?.createdUser });
      AuthDispatch({ type: ACTION.SET_TOKEN, payload: data?.encodedToken });
      AuthDispatch({
        type: ACTION.SET_USERLIST,
        payload: [...AuthState?.userList, userData],
      });
      toast("sign up successfull !");
      // alert("sign up");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
      // alert("something went wrong");
    }
  };

  const signInHandler = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(`/api/auth/login`, userData);
      // console.log(data);
      // console.log(data.createdUser);
      AuthDispatch({ type: ACTION.IS_SIGNED_IN, payload: true });
      AuthDispatch({ type: ACTION.SET_USER, payload: data?.foundUser });
      AuthDispatch({ type: ACTION.SET_TOKEN, payload: data?.encodedToken });
      toast(" login successful !");
      // alert("login");
      console.log(data?.encodedToken);
      localStorage.setItem("token", data?.encodedToken);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log("vava");
      toast("something went wrong !");
      // alert("something went wrong");
    }
  };

  const logoutHandler = () => {
    localStorage.setItem("token", "");
    AuthDispatch({ type: ACTION.IS_SIGNED_IN, payload: false });
    AuthDispatch({ type: ACTION.SET_USER, payload: {} });
    AuthDispatch({ type: ACTION.SET_TOKEN, payload: "" });
    toast("You are logged out !");
    // alert("You are logged out");
    navigate("/");
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get(`/api/users`);
      // console.log(data?.users);
      AuthDispatch({ type: ACTION.SET_USERLIST, payload: data?.users });
      AuthDispatch({
        type: ACTION.SET_PEOPLE_YOU_MAY_KNOW,
        payload: data?.users,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const displaySingleUsersDetails = async (userId) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}`);
      // console.log(data?.user);
      AuthDispatch({
        type: ACTION.DISPLAY_SINGLE_USERS_DETAILS,
        payload: data?.user,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getAllPost = async () => {
    try {
      const { data } = await axios.get(`/api/posts`);
      // console.log(data);
      AuthDispatch({ type: ACTION.GET_ALL_POSTS, payload: data?.posts });
      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };
  const postPost = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(
        `/api/posts`,
        {
          postData: userData,
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      console.log(data?.posts);

      AuthDispatch({
        type: ACTION.CREATE_POST,
        payload: data?.posts,
      });

      toast("Added new post successfully !");
      // alert("sign up");
      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
      // alert("something went wrong");
    }
  };
  // console.log(AuthState?.getAllPostsArr);

  const deletePost = async (postId) => {
    // console.log(postId);
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      });

      // console.log(data?.posts);

      AuthDispatch({
        type: ACTION.DELETE_POST,
        payload: data?.posts,
      });

      toast("post deleted successfully !");

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const editPost = async (postId, post) => {
    console.log(postId);
    try {
      const { data } = await axios.post(
        `/api/posts/edit/${postId}`,
        {
          postData: post,
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      console.log(data?.posts);

      AuthDispatch({
        type: ACTION.EDIT_POST,
        payload: data?.posts,
      });

      // toast("post deleted successfully !");

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const likePost = async (postId, post) => {
    console.log(postId);
    post.likes.likeCount = post.likes.likeCount + 1;
    console.log(post?.likes?.likeCount);
    try {
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      console.log(data?.posts);

      // const likedPostDetail = data?.posts?.find((post) => post?._id === postId);
      // console.log(likedPostDetail);

      AuthDispatch({
        type: ACTION.LIKE_POST,
        payload: data?.posts,
      });

      AuthDispatch({
        type: ACTION.SET_LIKED_ARR,
        payload: [...AuthState?.likedArr, post],
      });

      // console.log(AuthState?.getAllPostsArr);

      toast("post liked successfully !");

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const disLikePost = async (postId) => {
    // console.log(postId);
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      console.log(data?.posts);

      AuthDispatch({
        type: ACTION.DISLIKE_POST,
        payload: data?.posts,
      });

      // console.log(AuthState?.getAllPostsArr);

      toast("post disLiked successfully !");

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const bookmarkPost = async (postId, post) => {
    console.log(postId);
    console.log(post);
    try {
      const { data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      console.log(data?.bookmarks);

      AuthDispatch({
        type: ACTION.GET_ALL_BOOKMARKED_POST,
        payload: data?.bookmarks,
      });

      AuthDispatch({
        type: ACTION.NEW_BOOKMARKED_ARR,
        payload: [...AuthState?.newBookmarkedArr, post],
      });

      console.log(data?.bookmarks);
      // getAllBookmarkedPost();
      toast("added to bookmark successfully !");

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const removeBookmarkPost = async (postId) => {
    // console.log(postId);
    try {
      const { data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      AuthDispatch({
        type: ACTION.GET_ALL_BOOKMARKED_POST,
        payload: data?.bookmarks,
      });

      removebookmarkFunc(postId);

      console.log(data?.bookmarks);

      toast("removed from bookmark successfully !");

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const getAllBookmarkedPost = async () => {
    try {
      const { data } = await axios.get(`/api/users/bookmark`, {
        headers: { authorization: encodedToken },
      });

      console.log(data?.bookmarks);

      AuthDispatch({
        type: ACTION.GET_ALL_BOOKMARKED_POST,
        payload: data?.bookmarks,
      });

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const isPostBookmarked = (data, ID) =>
    data?.find((post) => post?._id === ID) ? true : false;

  const isPostLiked = (data, ID) =>
    data?.find((post) => post?._id === ID) ? true : false;

  const isAlreadyFollowed = (data, ID) => {
    return data?.find((person) => person?._id === ID) ? true : false;
  };

  const removePostFromLikedArr = (data, ID) => {
    const newArr = data?.filter((post) => post?._id !== ID);

    AuthDispatch({
      type: ACTION.SET_LIKED_ARR,
      payload: newArr,
    });

    toast("post unliked successfully !");
  };

  const updateUserList = (ID) => {
    return AuthState?.peopleYouMayKnowArr?.filter(
      (person) => person?._id !== ID
    );
  };

  const followUserFunc = async (followUserId, userName) => {
    console.log(userName);
    try {
      const { data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      // console.log(data);

      toast(`you followed ${userName} !`);

      AuthDispatch({
        type: ACTION.SET_USER,
        payload: data?.user,
      });

      const list = updateUserList(followUserId);

      // AuthDispatch({
      //   type: ACTION.SET_USERLIST,
      //   payload: list,
      // });

      AuthDispatch({
        type: ACTION.SET_PEOPLE_YOU_MAY_KNOW,
        payload: list,
      });

      setingHomePostArrFunc(data?.followUser?.username);

      // AuthDispatch({
      //   type: ACTION.SET_HOME_POSTS_ARR,
      //   payload: data?.user?.following,
      // });

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const unFollowUserFunc = async (followUserId, userName, user) => {
    // console.log(followUserId);
    try {
      const { data } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      console.log(data);
      toast(`you unfollowed ${userName} !`);

      AuthDispatch({
        type: ACTION.SET_USER,
        payload: data?.user,
      });

      // AuthDispatch({
      //   type: ACTION.SET_PEOPLE_YOU_MAY_KNOW,
      //   payload: [...AuthState?.peopleYouMayKnowArr, user],
      // });

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const displaySingleUserPosts = async (username) => {
    // console.log(username);
    try {
      const { data } = await axios.get(`/api/posts/user/${username}`);

      // console.log(data?.posts);

      AuthDispatch({
        type: ACTION.DISPLAY_SINGLEUSER_POSTS,
        payload: data?.posts,
      });

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const getSinglePost = async (postId) => {
    console.log(postId);
    try {
      const { data } = await axios.get(`/api/posts/${postId}`);

      console.log(data?.post);

      AuthDispatch({
        type: ACTION.SINGLE_POST_DETAILS,
        payload: data?.post,
      });

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  const editUserProfile = async (userData) => {
    // console.log(userData);
    // console.log(userData?._id);

    try {
      const { data } = await axios.post(
        `/api/users/edit`,
        {
          userData,
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      console.log(data?.user);

      AuthDispatch({
        type: ACTION.EDIT_USER_DETAILS,
        payload: data?.user,
      });

      AuthDispatch({
        type: ACTION.DISPLAY_SINGLE_USERS_DETAILS,
        payload: userData,
      });

      // navigate("/");
    } catch (error) {
      console.log(error);
      toast("something went wrong !");
    }
  };

  useEffect(() => {
    getUsers();
    getAllPost();
    getAllBookmarkedPost();
  }, []);

  return (
    <div>
      <AuthContextProvider.Provider
        value={{
          AuthState,
          AuthDispatch,
          signupHandler,
          signInHandler,
          logoutHandler,
          getUsers,
          displaySingleUsersDetails,
          getAllPost,
          postPost,
          deletePost,
          editPost,
          likePost,
          disLikePost,
          bookmarkPost,
          removeBookmarkPost,
          isPostBookmarked,
          isPostLiked,
          followUserFunc,
          unFollowUserFunc,
          removePostFromLikedArr,
          isAlreadyFollowed,
          displaySingleUserPosts,
          getSinglePost,
          editUserProfile,
        }}
      >
        {children}
      </AuthContextProvider.Provider>
    </div>
  );
};

export default AuthContext;
