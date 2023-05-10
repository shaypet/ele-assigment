import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layouts/page-layout/page-layout";
import AuthLayout from "../layouts/auth-layout/auth-layout";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import HomePage from "../pages/home/home";
import OnlineUsers from "../pages/online-users/online-users";
const AppRoutes = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "online-users",
        element: <OnlineUsers />,
      },
    ],
  },
]);

export default AppRoutes;
