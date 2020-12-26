import React, { useState } from "react";
import "./App.css";
import DropHeader from "./DropHeader";
import Header from "./Header";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="app_header">
        <Header toggle={toggle} />
      </div>
      <div
        className={`${
          showMenu ? "app_dropdown app_container" : "app_dropdown"
        }`}
      >
        <DropHeader />
      </div>
    </div>
  );
}

export default Navbar;
