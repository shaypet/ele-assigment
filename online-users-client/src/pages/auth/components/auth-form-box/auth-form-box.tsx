import React from "react";
import "./auth-form-box.scss";
const AuthFormBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="auth-form-box">{children}</div>;
};
export default AuthFormBox;
