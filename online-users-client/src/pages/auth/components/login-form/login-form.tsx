import React, { useContext, useState } from "react";
import AppInput from "../../../../components/input/input";
import ApiEndPoint from "../../../../utils/api";
import { ServerResponse } from "../../../../dto/server-response.dto";
import StoreContext from "../../../../store/store";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const {
    isAuth: [isAuth, setIsAuth],
    user: [user, setUser],
  } = useContext(StoreContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const simpleValidate = (): boolean => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill all fields");
      return false;
    }

    return true;
  };
  const doLogin = async () => {
    setError("");
    if (!simpleValidate()) return;
    try {
      const response = await ApiEndPoint.post<ServerResponse<any>>(
        "auth/login",
        {
          Email: email,
          Password: password,
        }
      );
      if (response.data.Success) {
        setIsAuth(true);
        setUser(response.data.Data);
        navigate("/");
      } else {
        setError(response.data.ErrorMessage);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        doLogin();
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
