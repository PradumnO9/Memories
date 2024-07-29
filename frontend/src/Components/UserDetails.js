import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../Redux/UserReducer";
import { GlobalData } from "../App";

import PageNotFound from "./PageNotFound";

import "./AllUsers.css";

const AllUsers = () => {
  const { isLoggedIn } = useContext(GlobalData);
  const allUsers = useSelector(getAllUsers);

  return (
    <>
      <div>
        {isLoggedIn ? (
          allUsers.map((data, index) => {
            return (
              <ul key={index}>
                <div className="container">
                  <div className="container__username">{data.username}</div>
                  <div className="container__email">{data.email}</div>
                  <div className="container__mobile">{data.mobile}</div>
                </div>
              </ul>
            );
          })
        ) :
          <PageNotFound />}
      </div>
    </>
  );
};

export default AllUsers;