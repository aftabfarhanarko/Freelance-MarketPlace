import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../Hooks/UseAuth";
import logo from "../assets/oooo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOutUser } = useAuth();
  console.log(user);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handelLogOut = () => {
    logOutUser();
  };

  return (
    <div className="  py-1  border-b border-base-300   w-full">
      <div className="navbar  w-11/12 mx-auto ">
        <div className="navbar-start">
          <img className="w-30" src={logo}></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 flex gap-8 list-none text-lg font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/alljob">Find Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/creatJob">Post a Job</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/accecptjob">In Progress</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/myAddjobs">Posted Jobs</NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          <div className=" hidden md:block  ">
            {user ? (
              <div className=" dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <div className="hidden  md:block ">
                    <div className="">
                      <img
                        className=" w-7 md:w-13 rounded-full"
                        src={user.photoURL}
                      ></img>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="  dropdown-content z-5 menu bg-base-100 rounded-box mt-5  w-42 p-4 shadow-sm"
                >
                  {user && (
                    <div className="flex items-center flex-col gap-3">
                      <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={
                          localStorage.getItem("theme") === "dark"
                        }
                        className="toggle"
                      />

                      <button
                        onClick={handelLogOut}
                        className="px-6 py-2 
                 text-white font-medium bg-gradient-to-r from-orange-500 to-orange-600  rounded-md  shadow-lg 
                   transform transition-all duration-300 ease-out hover:from-orange-600 hover:to-orange-700 hover:shadow-xl 
                     hover:scale-105 active:scale-95 
                      focus:outline-none focus:ring-4 focus:ring-orange-300"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login">
                  {" "}
                  <button
                    className="
                 px-6 py-2 
  text-orange-500 font-medium 
  bg-white 
  outline
  rounded-md 
  transition-all duration-300 ease-out 
  bg-gradient-to-r  hover:from-orange-500 hover:to-orange-400 
  hover:text-white 
  hover:shadow-xl 
  hover:scale-105 
  active:scale-95 
  focus:outline-none focus:ring-4 focus:ring-orange-300
                  
                  
                  "
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  {" "}
                  <button
                    className="
                   px-6 py-2 
  text-white font-medium  rounded-md
  bg-gradient-to-r from-orange-400 to-orange-500  hover:from-orange-500 hover:to-orange-400 
  transform transition-all  duration-300 ease-out  hover:shadow-xl 
  hover:scale-105 active:scale-95 
  focus:outline-none focus:ring-4 focus:ring-orange-300
                  "
                  >
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="block  md:hidden relative ">
            {/* menu toggle btn */}
            <button
              onClick={() => setOpen(!open)}
              className="btn-ghost text-[32px] font-bold  top-7 right-5  text-black hover:text-orange-500 dark:text-white transition-colors"
            >
              {open ? <IoClose /> : <TbMenu2 />}
            </button>

            {/* RIGHT DRAWER MENU */}
            <div
              className={`fixed top-0 right-0 h-full bg-base-200 shadow-xl transition-all duration-500 ease-in-out z-40 
               ${
                 open
                   ? "translate-x-0 opacity-100"
                   : "translate-x-full opacity-0"
               }
            `}
              style={{ width: "50%" }}
            >
              <button
                onClick={() => setOpen(!open)}
                className="btn-ghost dark:text-white  text-[32px] font-bold  top-7 right-5 z-50 text-black hover:text-orange-500 transition-colors"
              >
                {open && <IoClose />}
              </button>
              <div className="p-6">
                <div className="mt-5 ml-2">
                  {user ? (
                    <>
                      <img
                        className="w-[45px] rounded-full"
                        src={user.photoURL}
                      />
                    </>
                  ) : (
                    <FaRegUserCircle className="w-10 h-10 text-black/80" />
                  )}
                </div>

                <ul className="menu  text-lg space-y-3 mt-4 ">
                  <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle ml-2"
                  />
                  <li>
                    <NavLink to="/" onClick={() => setOpen(false)}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/alljob" onClick={() => setOpen(false)}>
                      All Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/creatJob" onClick={() => setOpen(false)}>
                      Add Job
                    </NavLink>
                  </li>
                  {user && (
                    <li>
                      <NavLink to="/accecptjob" onClick={() => setOpen(false)}>
                        Accepted Job
                      </NavLink>
                    </li>
                  )}
                  {user && (
                    <li>
                      <NavLink to="/myAddjobs" onClick={() => setOpen(false)}>
                        Add Job
                      </NavLink>
                    </li>
                  )}
                  {user ? (
                    <button
                      onClick={handelLogOut}
                      className="px-6 py-2 
                 text-white font-medium bg-gradient-to-r from-orange-500 to-orange-600  rounded-md  shadow-lg 
                   transform transition-all duration-300 ease-out hover:from-orange-600 hover:to-orange-700 hover:shadow-xl 
                     hover:scale-105 active:scale-95 
                      focus:outline-none focus:ring-4 focus:ring-orange-300"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login">
                      {" "}
                      <button
                        className="
                 px-6 py-2 
  text-orange-500 font-medium 
  bg-white 
  outline
  rounded-md 
  transition-all duration-300 ease-out 
  bg-gradient-to-r  hover:from-orange-500 hover:to-orange-400 
  hover:text-white 
  hover:shadow-xl 
  hover:scale-105 
  active:scale-95 
  focus:outline-none focus:ring-4 focus:ring-orange-300
                  
                  
                  "
                      >
                        Login
                      </button>
                    </Link>
                  )}
                </ul>
              </div>
            </div>

            {/* Overlay click to close */}
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
