import React, { useContext, useEffect, useState } from "react";
import { GlobalData } from "../App"; 
import axios from "axios";
import PageNotFound from "./PageNotFound";

import "./AllUsers.css";

const AllUsers = () => {
  const { isLoggedIn } = useContext(GlobalData);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/users/allusers").then((res) => {
      setAllUsers(res.data.allUsers);
    }).catch((err) => {
      console.log("err", err);
    });
  }, []);

  return (
    <>
      {isLoggedIn ? <PageNotFound /> : <div>
        {allUsers.map((data, index) => {
          return (
            <ul key={index}>
              <div className="container">
                <div className="container__username">{data.username}</div>
              </div>
            </ul>
          );
        })}
      </div>}
    </>
  );
};

export default AllUsers;