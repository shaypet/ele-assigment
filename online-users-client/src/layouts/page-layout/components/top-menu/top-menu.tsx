import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./top-menu.scss";
import ApiEndPoint from "../../../../utils/api";
import { ServerResponse } from "../../../../dto/server-response.dto";
import StoreContext from "../../../../store/store";
const TopMenu = () => {
  const navigate = useNavigate();
  const {
    isAuth: [isAuth, setIsAuth],
    user: [user, setUser],
  } = useContext(StoreContext);
  const doLogout = async () => {
    const response = await ApiEndPoint.get<ServerResponse<any>>("auth/logout");
    setIsAuth(false);
    navigate("auth/login");
  };
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
        <button
          onClick={() => {
            doLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default TopMenu;
