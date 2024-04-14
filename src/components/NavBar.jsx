import { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-coffee">Add Coffee</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </>
  );

  const logo = (
    <>
      <Link
        style={{ color: "#6F4E37" }}
        to="/"
        className="flex items-center text-4xl space-x-1"
      >
        <FaCoffee />
        <p className="text-3xl font-serif font-bold">
          <span className="text-amber-600">C</span>off
          <span className="text-amber-600">ee</span>
        </p>
      </Link>
    </>
  );

  return (
    <nav className="max-w-7xl mx-auto text-black px-4 py-2 flex items-center justify-between">
      {/* logo and links Start */}
      <div className="flex items-center">
        <div className="-hidden -md:block">{logo}</div>
      </div>
      {/* logo and links End */}
      <div className="hidden md:block">
        <ul
          tabIndex={0}
          className="menu menu-sm md:menu-horizontal dropdown-content z-[1] p-2  bg-gray-300 md:bg-gray-300 rounded-box w-40 md:w-full font-bold"
        >
          {navLinks}
        </ul>
      </div>
      {/* <div className="md:hidden">{logo}</div> */}
      <div className="flex items-center justify-center">
        {/* profile Start */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-amber-300 rounded-box w-52 font-bold text-gray-600"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/add-coffee">Add Coffee</Link>
              </li>
              <li>
                <Link to="/coffees">Edit Coffees</Link>
              </li>
              <li>
                <Link to="/users">All Users</Link>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/sign-in">
            <button className="btn btn-sm btn-accent font-bold text-gray-700">
              Sign In
            </button>
          </NavLink>
        )}
        {/* profile End */}
      </div>
    </nav>
  );
};

export default NavBar;
