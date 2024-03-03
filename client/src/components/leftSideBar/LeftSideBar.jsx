import React from "react";
import "./LeftSideBar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
        </div>
        <NavLink
          to="/questions"
          className="side-nav-links"
          activeClassName="active"
          style={{ paddingLeft: "40px" }}
        >
          <img src={Globe} alt="Globe" />
          <p style={{ padding: "10px" }}>Questions</p>
        </NavLink>
        <NavLink
          to="/tags"
          className="side-nav-links"
          activeClassName="active" style={{ paddingLeft: "40px" }}>
          <p>Tags</p>
        </NavLink>
        <NavLink
          to="/users"
          className="side-nav-links"
          activeClassName="active"
          style={{ paddingLeft: "40px" }}
        >
          <p>Users</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default LeftSideBar;
