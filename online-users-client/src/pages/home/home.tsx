import React, { useContext } from "react";
import StoreContext from "../../store/store";
const HomePage = () => {
  const {
    isAuth: [isAuth, setIsAuth],
    user: [user, setUser],
  } = useContext(StoreContext);

  return <div className="home">Home Page {user}</div>;
};
export default HomePage;