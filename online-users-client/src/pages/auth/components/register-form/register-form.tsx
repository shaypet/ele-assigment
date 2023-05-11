import { useState } from "react";
import AppInput from "../../../../components/input/input";
import ApiEndPoint from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import { ServerResponse } from "../../../../dto/server-response.dto";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const simpleValidate = () => {
    if (
      !email.trim().length ||
      !username.trim().length ||
      !password.trim().length ||
      !passwordValidate.trim().length
    ) {
      setError("fill all fields");
      return false;
    }
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    if (!emailRegex.test(email)) {
      setError("not a valid email");
      return false;
    }
    if (password !== passwordValidate) {
      setError("passwords are not the same");
      return false;
    }

    return true;
  };
  const doRegister = async () => {
    setError("");
    if (!simpleValidate()) return;
    try {
      const response = await ApiEndPoint.post<ServerResponse<any>>(
        "auth/register",
        {
          Email: email,
          Password: password,
          UserName: username,
        }
      );
      if (response.data.Success) {
        navigate("/auth/login");
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
        doRegister();
      }}
    >
      <div className="padding-row">
        <AppInput
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="padding-row">
        <AppInput
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="padding-row">
        <AppInput
          placeholder="Enter your password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="padding-row">
        <AppInput
          placeholder="Enter your password again"
          value={passwordValidate}
          type="password"
          onChange={(e) => setPasswordValidate(e.target.value)}
        />
      </div>
      <div className="row center padding-row error-row error">{error}</div>
      <div className="row center padding-row">
        <input type="submit" />
      </div>
    </form>
  );
};
export default RegisterForm;
