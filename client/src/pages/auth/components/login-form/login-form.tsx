import React, { useState } from "react";
import AppInput from "../../../../components/input/input";
const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const SimpleValidate = (): boolean => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill all fields");
      return false;
    }

    return true;
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        SimpleValidate();
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
      <div className="row center padding-row error-row error">{error}</div>
    </form>
  );
};
export default LoginForm;
