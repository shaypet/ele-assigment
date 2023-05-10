import React from "react";
import { Outlet } from "react-router-dom";
import "./auth-layout.scss";
import BoxContainer from "../../components/box-container/box-container";
const AuthLayout = () => {
  return (
    <div className="app-auth-container">
      <BoxContainer addTocClassName="auth-box">
        <Outlet />
      </BoxContainer>
    </div>
  );
};
export default AuthLayout;
