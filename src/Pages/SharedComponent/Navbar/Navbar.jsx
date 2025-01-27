import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo_img from "../../../assets/logo/logo_2.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import DarkLightSwitch from "../../DarkLightSwitch/DarkLightSwitch";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  const navLink = (
    <>
      <li>
        <NavLink to="/" className="mr-6 text-white text-lg pb-1 px-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/artCraftSection"
          className="mr-6 text-white text-lg pb-1 px-2"
        >
          All Art & Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCraft"
          className="mr-6 text-white text-lg pb-1 px-2"
        >
          {" "}
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCraftAndArt"
          className="mr-6 text-white text-lg pb-1 px-2"
        >
          My Art & Craft List
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
    <div
      className="w-[90%] mx-auto "
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="40"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="navbar bg-transparent pt-5 px-0 flex justify-between">
        <div className="navbar-start w-auto">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
              className="menu menu-sm dropdown-content mt-3 shadow bg-gradient-to-r from-black to-gray-700  rounded-box  z-20  w-[300px] p-3"
            >
              {navLink}
              {user ? (
                <div className="flex gap-2 lg:space-x-5 items-center">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-ghost bg-gray-800 text-white text-lg"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="  lg:hidden">
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
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl pl-1 text-[#4b4949] flex items-center font-bold ">
            <img src={logo_img} alt="" className="w-9 h-9  bg-transparent" />
            PaletteParadise{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 z-20">{navLink}</ul>
        </div>

        <div className="navbar-end w-auto">
          {user ? (
            <div className="flex gap-2 lg:space-x-5 items-center">
              <DarkLightSwitch></DarkLightSwitch>
              <img
                className="h-10 w-10 rounded-full"
                title={user.displayName}
                src={user.photoURL}
              />
              <button
                onClick={handleSignOut}
                className="btn btn-ghost bg-gray-800 text-[#8a8686]  text-lg hidden md:block lg:block"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className=" lg:flex items-center  ">
              <DarkLightSwitch></DarkLightSwitch>
              <Link
                to="/signin"
                className="btn btn-ghost bg-gray-800  text-[#8a8686]  text-base mr-3  hidden md:hidden items-center lg:flex  ml-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-ghost bg-gray-800  text-[#8a8686]  text-base hidden md:hidden items-center lg:flex "
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
