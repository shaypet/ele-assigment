import { Link } from "react-router-dom";
import "./auth.scss";
import AuthFormBox from "./components/auth-form-box/auth-form-box";
import LoginForm from "./components/login-form/login-form";
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="start-align-side padding big-text flex flex-center flex-column">
        <div></div>
        <div>
          Nice of you to come here again.
          <br />
          <br />
          please fill your registrated information and login.
          <br />
          <br />
          If you haven't registrated yet. please click{" "}
          <Link to="../register">here</Link> and register.
        </div>
      </div>
      <div className="end-align-side padding flex flex-center flex-column">
        <div className="auth-title">Login</div>
        <AuthFormBox>
          <LoginForm />
        </AuthFormBox>
      </div>
    </div>
  );
};
export default LoginPage;
