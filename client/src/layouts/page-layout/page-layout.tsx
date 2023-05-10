import { Outlet } from "react-router-dom";
import "./page-layout.scss";
import TopMenu from "./components/top-menu/top-menu";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
const PageLayout = () => {
  return (
    <div className="app-page-container">
      <div className="app-page-container-body">
        <div className="header">
          <Logo />
        </div>
        <div className="menu-bar">
          <TopMenu />
        </div>
        <div className="page-content">
          <Outlet />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
export default PageLayout;
