import { ACTION } from "../constant/constant";

export const AuthInitialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  userList: [],
  peopleYouMayKnowArr: [],
  displaySingleUsersDetailsInfo: {},
  getAllPostsArr: [],
  addTobookmarkList: [],
  getAllBookmarkedArr: [],
  likedArr: [],
  displaySingleUserPostsArr: [],
  singlePostDetails: {},
  homePostsArr: [],
  newBookmarkedArr: [],
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTION.IS_SIGNED_IN: {
      return { ...state, isLoggedIn: action.payload };
    }
    case ACTION.SET_USER: {
      return { ...state, user: action.payload };
    }
    case ACTION.EDIT_USER_DETAILS: {
      return { ...state, user: action.payload };
    }
    case ACTION.SET_TOKEN: {
      return { ...state, token: action.payload };
    }
    case ACTION.SET_USERLIST: {
      return { ...state, userList: action.payload };
    }
    case ACTION.SET_PEOPLE_YOU_MAY_KNOW: {
      return { ...state, peopleYouMayKnowArr: action.payload };
    }
    case ACTION.DISPLAY_SINGLE_USERS_DETAILS: {
      return { ...state, displaySingleUsersDetailsInfo: action.payload };
    }
    case ACTION.GET_ALL_POSTS: {
      return { ...state, getAllPostsArr: action.payload };
    }
    case ACTION.CREATE_POST: {
      return { ...state, getAllPostsArr: action.payload };
    }
    case ACTION.EDIT_POST: {
      return { ...state, getAllPostsArr: action.payload };
    }
    case ACTION.DELETE_POST: {
      return { ...state, getAllPostsArr: action.payload };
    }
    case ACTION.LIKE_POST: {
      return { ...state, getAllPostsArr: action.payload };
    }
    case ACTION.DISLIKE_POST: {
      return { ...state, getAllPostsArr: action.payload };
    }
    case ACTION.GET_ALL_BOOKMARKED_POST: {
      return { ...state, getAllBookmarkedArr: action.payload };
    }
    case ACTION.NEW_BOOKMARKED_ARR: {
      return { ...state, newBookmarkedArr: action.payload };
    }
    case ACTION.SET_LIKED_ARR: {
      return { ...state, likedArr: action.payload };
    }

    case ACTION.DISPLAY_SINGLEUSER_POSTS: {
      return { ...state, displaySingleUserPostsArr: action.payload };
    }
    case ACTION.SINGLE_POST_DETAILS: {
      return { ...state, singlePostDetails: action.payload };
    }
    case ACTION.SET_HOME_POSTS_ARR: {
      return { ...state, homePostsArr: action.payload };
    }

    default:
      break;
  }
};
