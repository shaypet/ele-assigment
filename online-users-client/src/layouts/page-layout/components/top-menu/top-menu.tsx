import React from "react";
import { Link } from "react-router-dom";
import "./top-menu.scss";
const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="menu-item">
        <Link to="/home">Home</Link>
      </div>{" "}
      <div className="menu-item">
        <Link to="/online-users">Online Users</Link>
      </div>
      <div className="spacer"></div>
      <div className="menu-item">
        <button onClick={() => {}}>Logout</button>
      </div>
    </div>
  );
};
export default TopMenu;
