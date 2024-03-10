import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Shop</Link>
        <span>|</span>
        <Link to="/cart">Shopping Cart</Link>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
