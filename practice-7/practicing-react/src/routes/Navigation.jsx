import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to={"/"}>
          <div>logo</div>
        </Link>
        <div className="links-container">
          <Link to={"/shop"} className="nav-link">
            shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
