import React from "react";
import "../../App.css";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import HomeMainBar from "../../components/homeMainBar/HomeMainBar";

const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <RightSideBar />
        <HomeMainBar />
      </div>
    </div>
  );
};

export default Home;
