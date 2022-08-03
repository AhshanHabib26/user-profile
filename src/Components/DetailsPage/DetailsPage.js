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
  const { Bio, avatar, createdAt, jobTitle, profile } = data;

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
          setDataLoading(false);
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
          <img src={Customavatar} alt="" />
        </div>
        <h5 className=" mt-2 mb-0 text-center text-secondary">
          {profile?.username}
        </h5>
        <div className="user_info">
          <div className="bio">
            <p className=" text-center text-success">
              {Bio ? Bio : "I am Going To Neptune For Get Shanti!"}
            </p>
          </div>
          <div className={Styles.info}>
            <label className="text-primary" htmlFor="">
              Name:
            </label>
            {profile ? (
              <h5 className="text-success">{`${profile?.firstName} ${profile?.lastName}`}</h5>
            ) : (
              <p className="text-success fw-semibold">User Name Not Found</p>
            )}
          </div>
          <div className={Styles.info}>
            <label className="text-primary" htmlFor="">
              Email:
            </label>
            <h5 className="text-success">
              {profile?.email ? profile?.email : "Email Not Found"}
            </h5>
          </div>
          <div className={Styles.info}>
            <label className="text-primary" htmlFor="">
              Job Title:
            </label>
            <h5 className="text-success">
              {jobTitle ? jobTitle : "Didn't Job"}
            </h5>
          </div>
          <div className={Styles.info}>
            <label className="text-primary" htmlFor="">
              Posted Date:
            </label>
            <h5 className="text-success">
              {createdAt ? createdAt : "03-8-2022"}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
