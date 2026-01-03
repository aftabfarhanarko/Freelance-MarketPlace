import { Link, NavLink } from "react-router-dom"; // সঠিক ইম্পোর্ট (react-router-dom)
import { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Moon,
  Sun,
  ChevronDown,
  Briefcase,
  PlusCircle,
  CheckCircle,
  FileText,
  DollarSign,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../Hooks/UseAuth";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/oooo.png";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const darkMode = theme === "dark";

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handelLogOut = () => {
    logOutUser();
  };

  // Dynamic Theme Classes
  const bgPrimary = darkMode ? "bg-gray-900" : "bg-white";
  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const textMuted = darkMode ? "text-gray-400" : "text-gray-600";
  const borderColor = darkMode ? "border-gray-800" : "border-gray-200";
  const hoverBg = darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100";

  return (
    <nav
      className={`${bgPrimary} border-b ${borderColor} shadow-sm transition-colors duration-300 fixed w-full top-0 z-50`}
    >
      <div className="w-full max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-16 w-auto md:h-20" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg ${
                  isActive
                    ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10"
                    : textSecondary
                } ${hoverBg} hover:text-orange-500 transition-all duration-200`
              }
            >
              <Home className="w-4 h-4" />
              <span className="font-medium text-sm">Home</span>
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg ${
                  isActive
                    ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10"
                    : textSecondary
                } ${hoverBg} hover:text-orange-500 transition-all duration-200`
              }
            >
              <DollarSign className="w-5 h-5" />
              <span className="font-medium text-md">Pricing</span>
            </NavLink>

            <NavLink
              to="/alljob"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-lg ${
                  isActive
                    ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10"
                    : textSecondary
                } ${hoverBg} hover:text-orange-500 transition-all duration-200`
              }
            >
              <Briefcase className="w-4 h-4" />
              <span className="font-medium text-sm">Find Jobs</span>
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/creatJob"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive
                        ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10"
                        : textSecondary
                    } ${hoverBg} hover:text-orange-500 transition-all duration-200`
                  }
                >
                  <PlusCircle className="w-4 h-4" />
                  <span className="font-medium text-sm">Post Job</span>
                </NavLink>
                <NavLink
                  to="/accecptjob"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive
                        ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10"
                        : textSecondary
                    } ${hoverBg} hover:text-orange-500 transition-all duration-200`
                  }
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium text-sm">In Progress</span>
                </NavLink>

                <NavLink
                  to="/myAddjobs"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive
                        ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10"
                        : textSecondary
                    } ${hoverBg} hover:text-orange-500 transition-all duration-200`
                  }
                >
                  <FileText className="w-4 h-4" />
                  <span className="font-medium text-sm">My Posted</span>
                </NavLink>
              </>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full ${hoverBg} ${textSecondary} hover:text-orange-500 transition-all duration-200`}
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Auth Buttons & Profile */}
            <div className="hidden md:flex items-center gap-4">
              {!user ? (
                <div className="flex items-center gap-3">
                  <Link
                    to="/login"
                    className={`px-5 py-2.5 rounded-xl font-semibold text-sm ${textSecondary} outline-orange-500 outline hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all duration-300`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className={`flex items-center gap-3 p-1 pr-4 rounded-full border ${borderColor} ${bgPrimary} hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-900/30 transition-all duration-300 group`}
                  >
                    <div className="relative">
                      <img
                        src={user.photoURL || "https://via.placeholder.com/40"}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 ${textMuted} group-hover:text-orange-500 transition-transform duration-300 ${
                        profileDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {profileDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute right-0 mt-3 w-72 ${bgPrimary} rounded-2xl shadow-2xl border ${borderColor} py-2 overflow-hidden ring-1 ring-black/5 z-50`}
                        style={{ transformOrigin: "top right" }}
                      >
                        <div className="px-6 py-5 border-b border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                          <div className="flex items-center gap-3 mb-3">
                            <img
                              src={
                                user?.photoURL ||
                                "https://via.placeholder.com/48"
                              }
                              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                              alt="Profile"
                            />
                            <div className="overflow-hidden">
                              <p
                                className={`font-bold text-lg truncate ${textPrimary}`}
                              >
                                {user.displayName || "User"}
                              </p>
                              <p
                                className={`text-xs truncate ${textMuted} font-medium`}
                              >
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-2 space-y-1">
                          <Link
                            to="/profile"
                            onClick={() => setProfileDropdown(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${textSecondary} hover:bg-orange-50 dark:hover:bg-orange-900/10 hover:text-orange-600 transition-all group`}
                          >
                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                              <User className="w-4 h-4 group-hover:text-orange-600" />
                            </div>
                            <span className="text-sm font-semibold">
                              My Profile
                            </span>
                          </Link>

                          <NavLink
                            to="/dashbord"
                            onClick={() => setProfileDropdown(false)}
                            className={({ isActive }) =>
                              `flex items-center gap-3 px-4 py-3 rounded-xl ${
                                isActive
                                  ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                                  : textSecondary
                              } hover:bg-orange-50 dark:hover:bg-orange-900/10 hover:text-orange-600 transition-all group`
                            }
                          >
                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                              <LayoutDashboard className="w-4 h-4 group-hover:text-orange-600" />
                            </div>
                            <span className="text-sm font-semibold">
                              Dashboard
                            </span>
                          </NavLink>
                        </div>

                        <div className={`border-t ${borderColor} p-2 mt-1`}>
                          <button
                            onClick={() => {
                              handelLogOut();
                              setProfileDropdown(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all group"
                          >
                            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-900/40 transition-colors">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-bold">Log Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${hoverBg} ${textSecondary} transition-all`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for proper exit animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden border-t ${borderColor} overflow-hidden`}
          >
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* User Profile (Mobile) */}
              {user ? (
                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500/20"
                  />
                  <div className="overflow-hidden">
                    <p className={`font-semibold truncate ${textPrimary}`}>
                      {user.displayName || "User"}
                    </p>
                    <p className={`text-xs truncate ${textMuted}`}>
                      {user.email}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-center rounded-xl font-medium text-orange-600 bg-orange-50 border border-orange-200 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-400"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-center rounded-xl font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md"
                  >
                    Register
                  </Link>
                </div>
              )}

              <div className="space-y-1">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl ${
                      isActive
                        ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                        : textSecondary
                    } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all`
                  }
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </NavLink>

                <NavLink
                  to="/alljob"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl ${
                      isActive
                        ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                        : textSecondary
                    } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all`
                  }
                >
                  <Briefcase className="w-5 h-5" />
                  <span className="font-medium">Find Jobs</span>
                </NavLink>

                <NavLink
                  to="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl ${
                      isActive
                        ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                        : textSecondary
                    } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all`
                  }
                >
                  <DollarSign className="w-5 h-5" />
                  <span className="font-medium">Pricing</span>
                </NavLink>

                {user && (
                  <>
                    <NavLink
                      to="/creatJob"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl ${
                          isActive
                            ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                            : textSecondary
                        } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all`
                      }
                    >
                      <PlusCircle className="w-5 h-5" />
                      <span className="font-medium">Post a Job</span>
                    </NavLink>

                    <NavLink
                      to="/accecptjob"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl ${
                          isActive
                            ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                            : textSecondary
                        } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all`
                      }
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">In Progress</span>
                    </NavLink>

                    <NavLink
                      to="/myAddjobs"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl ${
                          isActive
                            ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                            : textSecondary
                        } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all`
                      }
                    >
                      <FileText className="w-5 h-5" />
                      <span className="font-medium">Posted Jobs</span>
                    </NavLink>

                    <NavLink
                      to="/dashbord"
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl ${
                          isActive
                            ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400"
                            : textSecondary
                        } hover:bg-gray-50 dark:hover:bg-gray-800 transition-all`
                      }
                    >
                      <LayoutDashboard className="w-5 h-5" />
                      <span className="font-medium">Dashboard</span>
                    </NavLink>
                  </>
                )}
              </div>

              {user && (
                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => {
                      handelLogOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
