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

        } else {
          toast.error(data.error);
        }
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }


  return (
    <div className=" container">
      <div className={Styles.DatasContainer}>
        <div className="left_container">
          <h4 className={`${Styles.UserText} text-light my-4`}>User Lists</h4>
          {infos.map((info) => (
            <Data info={info} key={info.id} onClick={setInfos} />
          ))}
        </div>
        <div className="right_container">
          <h4 className={`${Styles.UserText} text-light my-4`}>User Details</h4>
          <DetailsPage/>
        </div>
      </div>
    </div>
  );
};

export default Datas;
