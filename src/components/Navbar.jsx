import { Link, NavLink } from "react-router";
import logo from "/logo5.png";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../Hooks/UseAuth";

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
          <img
            className="w-16 rounded-4xl border mr-2 border-gray-500 "
            src={logo}
          ></img>
          <a
            className=" font-semibold text-lg  text-orange-500
 md:text-xl "
          >
            Freelance <span className="">MarketPlace</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 flex gap-8 list-none text-lg font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/alljob">All Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/creatJob">Add a Job</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/accecptjob">My Accepted Tasks</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/myAddjobs">My Add Job</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className=" hidden md:block  ">
            {user ? (
              <div className="flex items-center gap-3">
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />
                <div className="hidden  md:block ">
                  <div className="">
                    <img
                      className=" w-7 md:w-13 rounded-full"
                      src={user.photoURL}
                    ></img>
                  </div>
                </div>
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
              className="btn-ghost text-[32px] font-bold fixed top-7 right-5 z-50 text-black hover:text-green-700 transition-colors"
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
              <div className="p-6">
                <h2 className="text-xl font-semibold ">
                  <span className="text-primary">Smart</span> Deals
                </h2>
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

                <ul className="menu  text-lg space-y-3">
                  {/* <NavLink to="/" >
                      Home
                    </NavLink> */}
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
                      Add a Job
                    </NavLink>
                  </li>
                  {user && (
                    <li>
                      <NavLink to="/accecptjob" onClick={() => setOpen(false)}>
                        My Accepted Tasks
                      </NavLink>
                    </li>
                  )}
                  {user && (
                    <li>
                      <NavLink to="/myAddjobs" onClick={() => setOpen(false)}>
                        My Add Job
                      </NavLink>
                    </li>
                  )}
                  {user ? (
                    <button
                      onClick={handelLogOut}
                      className="btn btn-outline text-primary hover:bg-primary hover:text-white"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="btn btn-outline text-primary hover:bg-primary hover:text-white">
                        Login Now
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
