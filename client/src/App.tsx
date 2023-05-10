import React, { useState } from "react";

import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home";
import AppRoutes from "./routes/routes";
import "./App.scss";
import StoreContext from "./store/store";
import { Store } from "./types/store.type";
function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<string>("moshe");

  const store: Store = {
    isAuth: [isAuth, setIsAuth],
    user: [user, setUser],
  };
  return (
    <div className="App">
      <StoreContext.Provider value={store}>
        <RouterProvider router={AppRoutes} />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
