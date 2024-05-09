import React from "react";
import "./LeftSideBar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSideBar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };
  const slideOutStyle = {
    transform:"translateX(-100%)"
  }
  return (
    <div className="left-sidebar" style={slideIn?slideInStyle:slideOutStyle}>
      <nav className="side-nav">
      <button onClick={() => handleSlideIn()} className="nav-btn1">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
        </div>
        <button onClick={() => handleSlideIn()} className="nav-btn1">
        <NavLink
          to="/questions"
          className="side-nav-links"
          activeClassName="active"
          style={{ paddingLeft: "40px" }}
        >
          <img src={Globe} alt="Globe" />
          <p style={{ padding: "10px" }}>Questions</p>
        </NavLink>
        </button>
        <button onClick={() => handleSlideIn()} className="nav-btn1">
        <NavLink
          to="/tags"
          className="side-nav-links"
          activeClassName="active" style={{ paddingLeft: "40px" }}>
          <p>Tags</p>
        </NavLink>
        </button>
        <button onClick={() => handleSlideIn()} className="nav-btn1">
        <NavLink
          to="/users"
          className="side-nav-links"
          activeClassName="active"
          style={{ paddingLeft: "40px" }}
        >
          <p>Users</p>
          </NavLink>
          </button>
      </nav>
    </div>
  );
};

export default LeftSideBar;
