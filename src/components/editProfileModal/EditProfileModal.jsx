import React from "react";
import styles from "./EditProfileModal.module.css";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

const EditProfileModal = ({ setEditProfileModal }) => {
  const { AuthState, editUserProfile } = useAuth();
  const [updatedProfileData, setUpdatedProfileData] = useState({
    _id: AuthState?.user?._id,
    proPic: AuthState?.user?.proPic,
    firstName: AuthState?.user?.firstName,
    lastName: AuthState?.user?.lastName,
    username: AuthState?.user?.username,
    bio: AuthState?.user?.bio,
    link: AuthState?.user?.link,
    // profileAvatar: AuthState?.user?.profileAvatar,
  });

  const updateProfileHandler = () => {
    editUserProfile(updatedProfileData);
    setEditProfileModal((editProfileModal) => !editProfileModal);
    toast("Profile updated successfully!");
  };

  const updateProfileDetails = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData((prev) => ({
      ...prev,
      [name]: value,
      _id: AuthState?.user?._id,
      proPic: AuthState?.user?.proPic,
    }));
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <div className={styles.header}>
          <h2 style={{ fontSize: "1.3rem" }}>Edit Profile</h2>
          <RxCross2
            className={styles.cross}
            onClick={() => setEditProfileModal(false)}
          >
            X
          </RxCross2>
        </div>
        <div>
          <div>
            <div className={styles.inputDiv}>
              <label htmlFor="firstName">First Name: </label>
              <input
                className={styles.inputField}
                id="firstName"
                type="text"
                name="firstName"
                value={updatedProfileData?.firstName}
                onChange={updateProfileDetails}
              />
            </div>
            <div className={styles.inputDiv}>
              <label htmlFor="lastName">last Name: </label>
              <input
                className={styles.inputField}
                id="lastName"
                type="text"
                name="lastName"
                value={updatedProfileData?.lastName}
                onChange={updateProfileDetails}
              />
            </div>
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="link">Website: </label>
            <input
              className={styles.inputField}
              id="link"
              type="text"
              name="link"
              value={updatedProfileData?.link}
              onChange={updateProfileDetails}
            />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="bio">Bio: </label>
            <textarea
              id="bio"
              placeholder="bio"
              name="bio"
              value={updatedProfileData?.bio}
              onChange={updateProfileDetails}
            />
          </div>
        </div>

        <button className={styles.btnUpdate} onClick={updateProfileHandler}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;
