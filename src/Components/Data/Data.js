import React from "react";
import Styles from "../Styles/Data.module.css";
import Customavatar from "../Image/Avatar.png";
import { Link } from "react-router-dom";

const Data = ({ info }) => {
  const { avatar, profile, id } = info;
  return (
    <div>
      <div className={Styles.userContainer}>
        <div className={Styles.userImage}>
          {avatar ? (
            <img src={Customavatar} alt="" />
          ) : (
            <img src={avatar} alt="" />
          )}
        </div>
        <div className={Styles?.userName}>
          <Link
          onClick='refresh'
            to={`/${id}`}
          >{`${profile?.firstName} ${profile?.lastName}`}</Link>
        </div>
      </div>
    </div>
  );
};

export default Data;
