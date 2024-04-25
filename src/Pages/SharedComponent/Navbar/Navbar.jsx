import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo_img from "../../../assets/logo/logo_2.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLink = (
    <>
      <li>
        <NavLink to="/" className="mr-6 text-[#CCCCCC] text-lg pb-1 px-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/artCraftSection"
          className="mr-6 text-[#CCCCCC] text-lg pb-1 px-2"
        >
          All Art &craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCraft"
          className="mr-6 text-[#CCCCCC] text-lg pb-1 px-2"
        >
          {" "}
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCraftAndArt"
          className="mr-6 text-[#CCCCCC] text-lg pb-1 px-2"
        >
          My Art & CraftList
        </NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        toast.success("Log out successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(user);
  };
  return (
    <div className="w-[90%] mx-auto ">
      <div className="navbar bg-transparent pt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl pl-1 text-[#CCCCCC] flex items-center font-bold ">
            <img src={logo_img} alt="" className="w-9 h-9  bg-transparent" />
            PaletteParadise{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 lg:space-x-5 items-center">
              <img
                className="h-10 w-10 rounded-full"
                title={user.displayName}
                src={user.photoURL}
              />
              <button
                onClick={handleSignOut}
                className="btn btn-ghost bg-gray-800 text-white text-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/signin"
                className="btn btn-ghost bg-gray-800  text-white text-base mr-3"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-ghost bg-gray-800  text-white text-base"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
