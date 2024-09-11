import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Layout = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
