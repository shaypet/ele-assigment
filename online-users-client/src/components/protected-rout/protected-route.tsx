import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import StoreContext from "../../store/store";

const ProtectedRoute = ({ children }: any) => {
  const {
    isAuth: [isAuth],
  } = useContext(StoreContext);
  if (!isAuth) {
    return <Navigate to="/auth/unauth" />;
  }

  return children;
};
export default ProtectedRoute;
