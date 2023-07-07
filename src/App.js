import "./App.css";
import Mockman from "mockman-js";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import BookMark from "./pages/bookmark/BookMark";
import Profile from "./pages/profile/Profile";
import SignUpPage from "./pages/signUp/SignUpPage";
import SignInPage from "./pages/signIn/SignInPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RightAside from "./components/aside/RightAside";
import Landing from "./pages/landing/Landing";
import { NavLink } from "react-router-dom";
import MainContainer from "./components/mainContainer/MainContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetail from "./pages/userDetail/UserDetail";
import NewPost from "./components/newPost/NewPost";
import PostDetails from "./pages/postDetails/PostDetails";
import LikedPosts from "./components/likedPosts/LikedPosts";
import RequiresAuthh from "./components/requiresAuth/RequiresAuthh";

function App() {
  return (
    <div>
      {/* <NavLink to={"/home"}>Home</NavLink> */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route element={<RequiresAuthh />}>
          <Route
            path="/"
            element={
              <MainContainer>
                {" "}
                <Home />
              </MainContainer>
            }
          />

          <Route
            path="/bookmark"
            element={
              <MainContainer>
                <BookMark />
              </MainContainer>
            }
          />

          <Route
            path="/likedPosts"
            element={
              <MainContainer>
                <LikedPosts />
              </MainContainer>
            }
          />

          <Route
            path="/profile/:userName"
            element={
              <MainContainer>
                <UserDetail />
              </MainContainer>
            }
          />

          <Route
            path="/post/:userID"
            element={
              <MainContainer>
                <PostDetails />
              </MainContainer>
            }
          />
        </Route>

        {/* <Route path="/home" element={<Home />} /> */}
        <Route
          path="/explore"
          element={
            <MainContainer>
              <Explore />
            </MainContainer>
          }
        />

        <Route
          path="/profile"
          element={
            <MainContainer>
              <Profile />
            </MainContainer>
          }
        />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
