import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Add Coffee", path: "/add-coffee" },
    { id: 2, name: "Users", path: "/users" },
    { id: 3, name: "Sign In", path: "/sign-in" },
    { id: 4, name: "Sign Up", path: "/sign-up" },
  ];

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
        <div className="hidden md:block">{logo}</div>
        <div className="md:hidden text-4xl" onClick={() => setOpen(!open)}>
          {open === true ? (
            <IoClose className="cursor-pointer" />
          ) : (
            <HiMenuAlt1 className="cursor-pointer" />
          )}
        </div>
      </div>
      {/* logo and links End */}
      <ul
        className={`md:flex items-center absolute md:static bg-gray-300 rounded-md md:space-x-5 md:text-center mt-2
      duration-700
      ${open ? "top-14" : "-top-80"}`}
      >
        <div className="">
          {routes.map((route) => (
            <NavLink
              className="menu md:menu-horizontal"
              key={route.path}
              to={route.path}
            >
              <p
                className={`hover:bg-gray-400 text-xl text-gray-600 py-1 px-2 font-semibold rounded-md ${
                  pathname === route.path ? "bg-gray-200" : ""
                }`}
              >
                {route.name}
              </p>
            </NavLink>
          ))}
        </div>
      </ul>
      <div className="md:hidden">{logo}</div>
      <div className="w-12 h-12 bg-gray-600 rounded-full border-4 border-green-600"></div>
    </nav>
  );
};

export default NavBar;
