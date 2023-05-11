import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./online-users.scss";
import { OnlineUserDTO } from "../../dto/online-user.dto";
import OnlineUser from "./components/online-user";
import OnlineUserPopup from "./components/online-user-popup/online-user-popup";
import ApiEndPoint from "../../utils/api";

const OnlineUsers = () => {
  const [onlineUserList, setOnlineUserList] = useState<OnlineUserDTO[]>([]);
  const [update, setUpdate] = useState<Date>();
  const rate = Number(process.env.REACT_APP_REFRESH_RATE);
  const updateList = () => {
    ApiEndPoint.get("/online-users")
      .then((res) => {
        setUpdate(new Date());
        setOnlineUserList(res.data.Data);
      })
      .catch(() => {});
  };
  let t: any = null;
  useEffect(() => {
    t = setInterval(() => {
      updateList();
    }, rate);
    updateList();

    return () => {
      clearInterval(t);
    };
  }, []);
  return (
    <div className="online-users-page">
      <Outlet />
      <div className="online-users-container">
        <div className="online-users-header">
          <div className="online-users-header-title">Online Users</div>
          <div className="spacer"></div>
          <div>
            Last Updated:
            <br />
            {update?.toISOString()}
          </div>
        </div>
        <table className="online-users-table" cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Login time</th>
              <th>Last update time</th>
              <th>Last Login</th>
              <th>User IP</th>
            </tr>
          </thead>
          <tbody>
            {onlineUserList.map((user) => (
              <OnlineUser user={user} key={user.UserId} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OnlineUsers;
