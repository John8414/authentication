import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/user-page">User Page</Link>
          </li>
        </ul>
      </nav>
      <div className="h-[80vh] flex items-center justify-center">
        <Outlet />
      </div>
      <footer>this is footer</footer>
    </div>
  )
};

export default Layout;