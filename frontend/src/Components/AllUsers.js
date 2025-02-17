import React, { useContext, useEffect, useState } from "react";
import { GlobalData } from "../App";
import axios from "axios";
import PageNotFound from "./PageNotFound";
import { USER_API } from "./utils/constants";

import "./AllUsers.css";

const AllUsers = () => {
  const { isLoggedIn } = useContext(GlobalData);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${USER_API}/allusers`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then((res) => {
        setAllUsers(res.data.allUsers);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  if (!allUsers) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      {isLoggedIn ? (
        <PageNotFound />
      ) : (
        <div>
          {allUsers.map((data, index) => {
            return (
              <ul key={index}>
                <div className="container">
                  <div className="container__username">{data.username}</div>
                </div>
              </ul>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AllUsers;
