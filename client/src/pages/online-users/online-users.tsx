import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./online-users.scss";
import { OnlineUserDTO } from "../../dto/online-user.dto";
import OnlineUser from "./components/online-user";
import OnlineUserPopup from "./components/online-user-popup/online-user-popup";

const sampleValues: OnlineUserDTO[] = [
  {
    Id: "1",
    UserName: "moshe",
    IP: "1.1.1.1",
    LastLogin: new Date(),
    LastUpdateTime: new Date(),
    LoginTime: new Date(),
  },
  {
    Id: "2",
    UserName: "shalom",
    IP: "1.2.1.1",
    LastLogin: new Date(),
    LastUpdateTime: new Date(),
    LoginTime: new Date(),
  },
];
const OnlineUsers = () => {
  const [onlineUserList, setOnlineUserList] =
    useState<OnlineUserDTO[]>(sampleValues);

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
            {"asd"}
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
              <OnlineUser user={user} key={user.Id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OnlineUsers;
