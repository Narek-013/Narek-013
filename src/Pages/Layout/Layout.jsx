import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import PagesBtn from "../../components/PagesBtn/PagesBtn";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <PagesBtn/>
      <Outlet />
    </div>
  );
};

export default Layout;
