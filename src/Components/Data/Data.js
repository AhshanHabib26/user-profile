import React from "react";
import Styles from "../Styles/Data.module.css";
import Customavatar from "../Image/Avatar.png";

const Data = ({ info }) => {
  const { avatar, profile, id } = info;

  console.log(info);
  return (
    <div>
      <div>
        <div className="userImage">
          {avatar ? (
            <img src={Customavatar} alt="" />
          ) : (
            <img src={avatar} alt="" />
          )}
        </div>
        <div className="userName">
            
        </div>
      </div>
    </div>
  );
};

export default Data;
