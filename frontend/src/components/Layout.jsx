import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// Layout component to render the header and the navigation bar
const Layout = () => {
  return (
    <>
      <header>
        <h1>Admin Page</h1>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
