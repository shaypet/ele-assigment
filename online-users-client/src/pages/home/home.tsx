import React, { useContext } from "react";
import StoreContext from "../../store/store";
import "./home.scss";
const HomePage = () => {
  const {
    isAuth: [isAuth, setIsAuth],
    user: [user, setUser],
  } = useContext(StoreContext);

  return (
    <div className="home-page">
      <div>Welcome Page</div>
      <h2>Hello {user}</h2>
    </div>
  );
};
export default HomePage;
