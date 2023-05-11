import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UnAuthPageRedirect = () => {
  const navigate = useNavigate();
  let t: any = null;
  useEffect(() => {
    t = setTimeout(() => {
      navigate("/auth/login");
    }, 3000);
    return () => {
      if (t) clearTimeout(t);
    };
  }, []);
  return (
    <div>
      UnAuth
      <br />
      <br />
      redirect...
    </div>
  );
};
export default UnAuthPageRedirect;
