import React from "react";
import styles from "./Profile.module.css";
import LeftAside from "../../components/aside/LeftAside";
import RightAside from "../../components/aside/RightAside";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { logoutHandler } = useAuth();
  return (
    <div className={styles.mainContainer}>
      {/* <LeftAside /> */}
      <div className={styles.subContainer}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        optio illo provident repellat, debitis esse labore quod saepe voluptatum
        impedit fugit maxime possimus sed deleniti consequatur similique
        facilis. At, doloremque! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Explicabo ullam architecto cum voluptas sed soluta
        nam, suscipit esse fuga! Quam molestiae fugit hic expedita dignissimos
        asperiores nihil recusandae ex rerum, soluta saepe provident doloribus
        eaque delectus ratione assumenda doloremque magni vero officia natus
        laudantium sapiente? Nisi, impedit officia ipsa pariatur earum amet
        repellendus odit at et nobis laudantium quod facere laborum nam quo
        error quaerat nesciunt enim accusantium labore ratione temporibus!
        Quaerat ullam doloribus delectus reiciendis libero nostrum quam cum
        laudantium corrupti. Possimus expedita nobis recusandae praesentium
        asperiores quam, tenetur cum, eius, architecto rem numquam ipsum non
        minima! Unde, eligendi?
        <button onClick={logoutHandler}>logout</button>
      </div>
      {/* <RightAside /> */}
    </div>
  );
};

export default Profile;
