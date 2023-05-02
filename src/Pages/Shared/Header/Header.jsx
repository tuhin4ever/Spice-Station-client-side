import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900 px-4 py-5 mx-auto   md:px-24 lg:px-8 ">
      <div className="relative flex items-center justify-between ">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src="https://i.ibb.co/SP5qf5f/fast-food-3.png" alt="" />
          <span className="ml-2 text-xl font-bold tracking-wide text-orange-500">
            Spice Station
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Register
            </NavLink>
          </li>
          <li className="flex items-center gap-8">
            {user && (
              <div className="avatar">
                <div className="w-9 rounded-full ring ring-primary ">
                  <img src={user.photoURL} title={user.displayName} />
                </div>
              </div>
            )}

            {user ? (
              <button onClick={handleLogOut} className="btn glass">
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <button className="btn glass">Login</button>
              </NavLink>
            )}
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-20">
              <div className="p-5 bg-white border rounded shadow-xl">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img
                        src="https://i.ibb.co/SP5qf5f/fast-food-3.png"
                        alt=""
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-orange-500">
                        Spice Station
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400">
                        About Us
                      </Link>
                    </li>

                    <li className="flex items-center gap-8">
                      {user && (
                        <div className="avatar">
                          <div className="w-9 rounded-full  ring-1 ring-primary">
                            <img src={user.photoURL} title={user.displayName} />
                          </div>
                        </div>
                      )}

                      {user ? (
                        <button onClick={handleLogOut} className="btn glass">
                          Logout
                        </button>
                      ) : (
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <button className="btn glass">Login</button>
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

// <div className="w-9/12 mx-auto mt-5 flex justify-between items-center">
//   <h2 className="text-3xl font-bold "></h2>
//   <nav className="flex gap-2">
//     <Link to="/" className="font-semibold text-xl">
//       Home
//     </Link>
//     <Link className="font-semibold text-xl">Blog</Link>
//     <Link className="font-semibold text-xl">Contact Us</Link>
//   </nav>
//   <div className="flex gap-2 items-center">
//
//     <Link to="/login">Login</Link>
//   </div>
// </div>

//
