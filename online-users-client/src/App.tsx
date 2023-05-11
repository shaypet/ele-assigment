import React, { useEffect, useState } from "react";

import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./App.scss";
import StoreContext from "./store/store";
import { Store } from "./types/store.type";
import ApiEndPoint from "./utils/api";
function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");

  const store: Store = {
    isAuth: [isAuth, setIsAuth],
    user: [user, setUser],
  };
  const rate = Number(process.env.REACT_APP_REFRESH_RATE);

  const updateList = () => {
    ApiEndPoint.get("/online-users/update")
      .then((res: any) => {})
      .catch(() => {});
  };

  let intervalId: any = null;

  useEffect(() => {
    console.log(isAuth);
    if (isAuth)
      intervalId = setInterval(() => {
        updateList();
      }, rate);
    else if (intervalId) clearInterval(intervalId);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAuth]);
  return (
    <div className="App">
      <StoreContext.Provider value={store}>
        <RouterProvider router={AppRoutes} />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
