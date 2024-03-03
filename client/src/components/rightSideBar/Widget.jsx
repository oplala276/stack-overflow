import React from "react";
import "./RightSideBar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18px" />
          <p>Defining socially responsible AI: How we select partners</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18px" />
          <p>It’s RAG time for LLMs that need a source of truth</p>
        </div>
      </div>
      <h4>Upcoming Events</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18px" />
          <p>Defining socially responsible AI: How we select partners</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18px" />
          <p>
            Changing how community leadership works on Stack Exchange: a
            proposal and...
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18px" />
          <p>
            Our partnership with Google and commitment to socially responsible
            AI
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18px" />
          <p>2024 Moderator Election Q&A – Question Collection</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18px" />
          <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>62</p>
          <p>Defining socially responsible AI: How we select partners</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
