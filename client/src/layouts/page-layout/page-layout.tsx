import { Outlet } from "react-router-dom";
import "./page-layout.scss";
const PageLayout = () => {
  return (
    <div className="app-page-container">
      <div className="app-page-container-body">
        <div className="header"></div>
        <div className="menu-bar"></div>
        <div className="page-content">
          <Outlet />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
export default PageLayout;
