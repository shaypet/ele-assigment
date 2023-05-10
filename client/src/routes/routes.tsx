import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layouts/page-layout/page-layout";
import AuthLayout from "../layouts/auth-layout/auth-layout";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import HomePage from "../pages/home/home";
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
    ],
  },
]);

export default AppRoutes;
