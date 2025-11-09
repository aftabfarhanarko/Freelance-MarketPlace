import { Link, NavLink } from "react-router";
import logo from "/logo5.png";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-red-400">
      <div className="z-40 bg-white shadow py-1    fixed w-full">
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
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>All Jobs</NavLink>
              </li>
              <li>
                <NavLink>Add a Job</NavLink>
              </li>
              <li>
                <NavLink>My Accepted Tasks</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* <div className=" hidden md:block  ">
            {loding ? (
              <HashLoader color="#13e1cf" />
            ) : user ? (
              <div className="flex items-center">
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
                  className="ml-2 btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  {" "}
                  <button className="btn btn-outline text-primary hover:bg-primary hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  {" "}
                  <button className="ml-2 btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div> */}
          <Link to="/login">
            <button className="btn btn-outline ">Login</button>
          </Link>
            <Link to="/register">
              <button className="btn btn-secondary ">Register</button>
            </Link>

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
                style={{ width: "60%" }} // 40% width mobile screen
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold ">
                    <span className="text-primary">Smart</span> Deals
                  </h2>
                  {/* <div className="mt-5 ml-2">
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
                </div> */}

                  <ul className="menu  text-lg space-y-3">
                    <NavLink to="/" onClick={() => setOpen(false)}>
                      Home
                    </NavLink>
                    <NavLink to="/allproduct" onClick={() => setOpen(false)}>
                      All Products
                    </NavLink>
                    <NavLink to="/myproducat" onClick={() => setOpen(false)}>
                      My Products
                    </NavLink>
                    <NavLink to="/mybids" onClick={() => setOpen(false)}>
                      My Bids
                    </NavLink>
                    <NavLink to="/creatProducat" onClick={() => setOpen(false)}>
                      Create Product
                    </NavLink>
                    {/* {user ? (
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
                  )} */}
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
    </div>
  );
};

export default Navbar;

/* <button class="relative flex items-center gap-1 py-4 px-9 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-full shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                Modern Button
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button> */
