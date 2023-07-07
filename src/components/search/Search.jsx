import React, { useState } from "react";
import styles from "./Search.module.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const { AuthState, displaySingleUsersDetails, displaySingleUserPosts } =
    useAuth();
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
    const filteredUsers = AuthState?.userList?.filter(
      (user) =>
        user?.firstName?.toLowerCase().includes(searchInput?.toLowerCase()) ||
        user?.lastName?.toLowerCase().includes(searchInput?.toLowerCase()) ||
        user?.username?.toLowerCase().includes(searchInput?.toLowerCase())
    );
    // console.log(searchInput);
    setSearchedUsers(filteredUsers);
  };

  // console.log(searchedUsers);

  return (
    <div className={styles.mainContainer}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search for user"
        value={searchInput}
        onChange={(e) => inputChangeHandler(e)}
      />
      <div>
        <div>
          {searchedUsers?.length > 0 && searchInput?.length > 0 ? (
            <div className={styles.searchedUsers}>
              {searchedUsers?.map((user) => (
                <li
                  className={styles.IndividualSearchedUsers}
                  key={user?._id}
                  style={{ listStyle: "none" }}
                >
                  <div
                    className={styles.imgNameUserNameContainer}
                    onClick={() => {
                      displaySingleUsersDetails(user?._id);
                      displaySingleUserPosts(user?.username);
                      navigate(`/profile/${user?.username}`);
                      setSearchInput("");
                    }}
                  >
                    <img
                      className={styles.postProPic}
                      src={user?.proPic}
                      height="50px"
                      width="50px"
                      alt="pro pic"
                    />
                    <div className={styles.nameUserNameContainer}>
                      <span className={styles.name}>
                        {user?.firstName} &nbsp;
                        {user?.lastName}
                      </span>{" "}
                      <br />
                      <small className={styles.userName}>
                        @{user?.username}
                      </small>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          ) : (
            searchInput?.length > 0 && (
              <div>
                <p>User not found!</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
