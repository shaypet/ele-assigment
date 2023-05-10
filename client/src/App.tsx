import React from "react";

import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home";
import AppRoutes from "./routes/routes";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default App;
