import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import { useAuth } from "../Hooks/UseAuth";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/oooo.png";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const darkMode = theme === "dark";

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

            {user && (
              <>
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

            {/* Profile Dropdown (Desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className={`flex items-center gap-2 p-1 rounded-full border ${borderColor} ${hoverBg} transition-all duration-200`}
              >
                {user ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <Link
                      to="/login"
                      className="px-4 py-1.5 rounded-lg font-medium text-sm text-[#e85d04] hover:bg-orange-50 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-1.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#C2410C] to-[#e85d04] hover:shadow-md transition-all"
                    >
                      Register
                    </Link>
                  </div>
                )}
                {user && (
                  <ChevronDown
                    className={`w-4 h-4 mr-1 ${textSecondary} transition-transform duration-200 ${
                      profileDropdown ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {user && profileDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 mt-2 w-60 ${bgPrimary} rounded-xl shadow-xl border ${borderColor} py-2 overflow-hidden`}
                >
                  <div
                    className={`px-5 py-4 border-b ${borderColor} bg-gray-50/50 dark:bg-gray-800/50`}
                  >
                    {/* <img src={user?.image}></img> */}

                    <p className={`font-semibold truncate ${textPrimary}`}>
                      {user.displayName || "User"}
                    </p>
                    <p className={`text-xs truncate ${textMuted}`}>
                      {user.email}
                    </p>
                  </div>

                  <div className="p-2">
                    <Link
                      to="/profile"
                      onClick={() => setProfileDropdown(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all`}
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">Profile</span>
                    </Link>
                    {/* Add more profile links here if needed */}
                  </div>
                  <div className="p-2">
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
                  </div>

                  <div className={`border-t ${borderColor} p-2`}>
                    <button
                      onClick={() => {
                        handelLogOut();
                        setProfileDropdown(false);
                      }}
                      className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                    >
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
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </motion.div>
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`lg:hidden border-t ${borderColor} overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto`}
        >
          <div className="px-4 py-4 space-y-1">
            {/* User Profile (Mobile) */}
            {user ? (
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                <img
                  src={user.photoURL}
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

              {user && (
                <>
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
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-white bg-red-500 hover:bg-red-600 shadow-md transition-all"
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
    </nav>
  );
};

export default Navbar;
