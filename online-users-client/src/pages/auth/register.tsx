import { Link } from "react-router-dom";
import AuthFormBox from "./components/auth-form-box/auth-form-box";
import RegisterForm from "./components/register-form/register-form";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="start-align-side padding big-text flex flex-center flex-column">
        <div></div>
        <div>
          Greate to meet you
          <br />
          <br />
          please fill your information and register.
          <br />
          <br />
          If you already registrated . please click{" "}
          <Link to="../login">here</Link> and login.
        </div>
      </div>
      <div className="end-align-side padding flex flex-center flex-column">
        <div className="auth-title">Login</div>
        <AuthFormBox>
          <RegisterForm />
        </AuthFormBox>
      </div>
    </div>
  );
};
export default RegisterPage;
