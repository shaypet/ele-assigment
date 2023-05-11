import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoreContext from "../../store/store";

const UnAuthPageRedirect = () => {
  const navigate = useNavigate();
  const {
    isAuth: [isAuth, setIsAuth],
    user: [user, setUser],
  } = useContext(StoreContext);
  let t: any = null;
  useEffect(() => {
    setIsAuth(false);
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
