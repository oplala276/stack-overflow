import React from "react";

import "./Users.css";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
