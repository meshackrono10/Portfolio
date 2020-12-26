import React from "react";
import "./DropHeader.css";
import { useHistory } from "react-router-dom";

function DropHeader() {
  const history = useHistory();
  return (
    <div className="dropdown">
      <nav>
        <div className="nav_link">
          <h2 onClick={() => history.push("/")}>HOME</h2>
        </div>
        <div className="nav_link">
          <h2 onClick={() => history.push("/about me")}>ABOUT ME</h2>
        </div>
        <div className="project">
          <div className="nav_link">
            <h2 onClick={() => history.push("/projects")}>PROJECTS</h2>
          </div>
        </div>
        <div className="nav_link">
          <h2 onClick={() => history.push("/contact")}>CONTACT</h2>
        </div>
      </nav>
    </div>
  );
}

export default DropHeader;
