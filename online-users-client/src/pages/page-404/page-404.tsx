import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Page404 = () => {
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
      404page
      <br />
      <br /> redirect...
    </div>
  );
};
export default Page404;
