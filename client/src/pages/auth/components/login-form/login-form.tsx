import React, { useState } from "react";
import AppInput from "../../../../components/input/input";
const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="padding-row ">
        <AppInput
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="padding-row">
        <AppInput
          placeholder="Enter your Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="row center padding-row">
        <AppInput type="submit" />
      </div>
    </form>
  );
};
export default LoginForm;
