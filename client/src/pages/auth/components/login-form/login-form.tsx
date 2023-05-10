import React, { useContext, useState } from "react";
const LoginForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="padding-row">
        <div>Email</div>
        <div>
          <input />
        </div>
      </div>
      <div className="padding-row">
        <div>password</div>
        <div>
          <input />
        </div>
      </div>
      <div className="row center padding-row">
        <input type="submit" />
      </div>
    </form>
  );
};
export default LoginForm;
