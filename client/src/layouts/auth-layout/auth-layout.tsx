import React from "react";
import { Outlet } from "react-router-dom";
import "./auth-layout.scss";
const AuthLayout = () => {
  return (
    <div className="app-auth-container">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
