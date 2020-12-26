import React, { useState } from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import image1 from "./img/30.png";
import image2 from "./img/29.png";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

function Header({ toggle }) {
  const history = useHistory();
  const [shademenu, setShademenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setShademenu(true);
    } else {
      setShademenu(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="header">
      <div className="header_link">
        <div className={shademenu ? "nav_links active" : "nav_links"}>
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
        </div>
        <div onClick={toggle} className="icon">
          {shademenu ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
}

export default Header;
