import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import Data from "./Data";

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
    <div className=" container my-5 text-center">
      <div className=" row">
        <div className="left_container col-4 col-md-6 col-sm-12 col-12">
          <h4 className=" ">User Lists</h4>
          {infos.map((info) => (
            <Data info={info} key={info.id} />
          ))}
        </div>
        <div className="right_container col-8 col-md-6 col-sm-12 col-12">
          <h4>User Details</h4>
        </div>
      </div>
    </div>
  );
};

export default Datas;
