import React from "react";

const WidgetTags = () => {
  const tags = [
    "c",
    "c++",
    "express",
    "firebase",
    "html",
    "css",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
    "flutter",
    "kotlin",
    "go",
  ];

  return (
    <div>
      <div className="widget-tags">
        <h4>Watched Tags</h4>
        <div className="widget-tags-div">
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetTags;
