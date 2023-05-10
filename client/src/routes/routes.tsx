import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layouts/page-layout/page-layout";
import AuthLayout from "../layouts/auth-layout/auth-layout";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import HomePage from "../pages/home/home";
import OnlineUsers from "../pages/online-users/online-users";
import OnlineUserPopup from "../pages/online-users/components/online-user-popup/online-user-popup";
import ProtectedRoute from "../components/protected-rout/protected-route";
import Page404 from "../pages/page-404/page-404";
import UnAuthPageRedirect from "../pages/page-unauth-redirect/page-unauth-redirect";
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
      {
        path: "unauth",
        element: <UnAuthPageRedirect />,
      },
    ],
  },
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "online-users",
        element: <OnlineUsers />,
        children: [
          {
            path: ":userId",
            element: <OnlineUserPopup />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export default AppRoutes;
