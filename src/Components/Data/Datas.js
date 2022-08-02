import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import Data from "./Data";
import Styles from "../Styles/Datas.module.css";
import DetailsPage from "../DetailsPage/DetailsPage";

const Datas = () => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setInfos(data);
          setLoading(false);
          toast.success("Data Loaded Succesfully");
        } else {
          toast.error(data.error);
        }
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className=" container my-5">
      <div className={Styles.DatasContainer}>
        <div className="left_container">
          <h4 className=" mb-4 text-danger ">User Lists</h4>
          {infos.map((info) => (
            <Data info={info} key={info.id} />
          ))}
        </div>
        <div className="right_container">
          <h4 className=" text-success mb-4">User Details</h4>
          <DetailsPage/>
        </div>
      </div>
    </div>
  );
};

export default Datas;
