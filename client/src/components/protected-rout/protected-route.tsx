import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import StoreContext from "../../store/store";

const ProtectedRoute = ({ children }: any) => {
  const {
    isAuth: [isAuth],
  } = useContext(StoreContext);
  console.log("asd", isAuth);
  if (!isAuth) {
    return <Navigate to="/unuth" />;
  }

  return children;
};
export default ProtectedRoute;
