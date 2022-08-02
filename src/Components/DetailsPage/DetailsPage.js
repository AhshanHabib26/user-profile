import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "../Styles/DetailsPage.module.css";
import Customavatar from "../Image/Avatar.png";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const DetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [dataLoading, setDataLoading] = useState(false);

  const { Bio, avatar, createdAt, jobTitle, profile} = data;

  // email, firstName, lastName, userName
  const url = `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`;
  useEffect(() => {
    setDataLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
          setDataLoading(false);
        } else {
          toast.error(result.error);
        }
      });
  }, []);

  if (dataLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className={Styles.DetailsContainer}>
        <div className={Styles.userAvatar}>
          {avatar ? (
            <img src={Customavatar} alt="" />
          ) : (
            <img src={avatar} alt="" />
          )}
        </div>
        <h5 className=" text-center mt-2 text-secondary">
          {profile?.username}
        </h5>
        <div className="user_info">
          <div className="bio">
            <p className=" text-center">
              {Bio ? Bio : "I am Going To Neptune For Get Shanti!"}
            </p>
          </div>
          <div className={Styles.info}>
            <label htmlFor="">Name:</label>
            <h5>{`${profile?.firstName} ${profile?.lastName}`}</h5>
          </div>
          <div className={Styles.info}>
            <label htmlFor="">Email:</label>
            <h5>{jobTitle ? jobTitle : "Didn't Job"}</h5>
          </div>
          <div className={Styles.info}>
            <label htmlFor="">Job Title:</label>
            <h5>{profile?.email ? profile?.email : "Email Not Found"}</h5>
          </div>
          <div className={Styles.info}>
            <label htmlFor="">Posted Date:</label>
            <h5>{createdAt ? createdAt : "03-8-2022"}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
