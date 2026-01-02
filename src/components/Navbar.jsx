import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { 
  Menu, X, Home, User, Moon, Sun, 
  ChevronDown, Briefcase, PlusCircle, 
  CheckCircle, FileText, 
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../Hooks/UseAuth";
import logo from "../assets/oooo.png";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  // THEME STATE
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [darkMode, setDarkMode] = useState(theme === "dark");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setDarkMode(theme === "dark");
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
      className={`${bgPrimary} border-b ${borderColor} shadow-sm transition-colors duration-300 sticky top-0 z-50`}
    >
      <div className="w-11/12 mx-auto py-0.5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-18 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all duration-200`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </NavLink>
            <NavLink
              to="/pricing"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all duration-200`}
            >
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Pricing</span>
            </NavLink>
            
            <NavLink
              to="/alljob"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all duration-200`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">Find Jobs</span>
            </NavLink>
            
            <NavLink
              to="/creatJob"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all duration-200`}
            >
              <PlusCircle className="w-5 h-5" />
              <span className="font-medium">Post a Job</span>
            </NavLink>
            
            {user && (
              <>
                <NavLink
                  to="/accecptjob"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all duration-200`}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">In Progress</span>
                </NavLink>
                
                <NavLink
                  to="/myAddjobs"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all duration-200`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium">Posted Jobs</span>
                </NavLink>
              </>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Profile Dropdown (Desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className={`flex items-center gap-2 p-1 rounded-lg ${hoverBg} transition-all duration-200`}
              >
                {user ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex items-center gap-3">
                    <Link
                      to="/login"
                      className="px-5 py-1.5 rounded-xl font-semibold text-[#e85d04] border-2 border-[#e85d04] transition-all duration-300 hover:bg-gradient-to-r from-[#C2410C] to-[#e85d04] hover:text-white hover:scale-105"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#C2410C] to-[#e85d04] shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Register
                    </Link>
                  </div>
                )}
                {user && (
                  <ChevronDown
                    className={`w-4 h-4 ${textSecondary} transition-transform duration-200 ${
                      profileDropdown ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {user && profileDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute right-0 mt-2 w-56 ${bgPrimary} rounded-xl shadow-xl border ${borderColor} py-2`}
                >
                  <div className={`px-5 py-3 border-b ${borderColor}`}>
                    <p className={`font-semibold ${textPrimary}`}>
                      {user.displayName || "User"}
                    </p>
                    <p className={`text-sm ${textMuted}`}>{user.email}</p>
                  </div>

                  <Link
                    to="/profile"
                    className={`flex items-center gap-3 px-5 py-2 ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all`}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>

                  <div className={`border-t ${borderColor} mt-2 pt-2`}>
                    <button
                      onClick={handelLogOut}
                      className="w-full text-left flex items-center gap-3 px-4 py-2 text-orange-500 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-lg ${hoverBg} ${textSecondary} hover:text-orange-500 transition-all duration-200`}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
             {
              user && <MdOutlineDashboardCustomize className=" h-8 w-8" />

             }
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${hoverBg} ${textSecondary} transition-all`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={`md:hidden py-4 pb-6 border-t ${borderColor}`}
          >
            <div className="space-y-1">
              {/* User Profile (Mobile) */}
              {user && (
                <div className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className={`font-semibold ${textPrimary}`}>
                      {user.displayName || "User"}
                    </p>
                    <p className={`text-sm ${textMuted}`}>{user.email}</p>
                  </div>
                </div>
              )}

              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all`}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </NavLink>

              <NavLink
                to="/alljob"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all`}
              >
                <Briefcase className="w-5 h-5" />
                <span className="font-medium">Find Jobs</span>
              </NavLink>

              <NavLink
                to="/creatJob"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all`}
              >
                <PlusCircle className="w-5 h-5" />
                <span className="font-medium">Post a Job</span>
              </NavLink>

              {user && (
                <>
                  <NavLink
                    to="/accecptjob"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all`}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">In Progress</span>
                  </NavLink>

                  <NavLink
                    to="/myAddjobs"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${textSecondary} ${hoverBg} hover:text-orange-500 transition-all`}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">Posted Jobs</span>
                  </NavLink>
                </>
              )}

              {user ? (
                <div className="px-4 pt-2">
                  <button
                    onClick={() => {
                      handelLogOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col px-4 gap-3 pt-2">
                  <Link
                    to="/login"
                    className="px-6 py-2 text-center rounded-lg font-semibold text-[#e85d04] border-2 border-[#e85d04] transition-all duration-300 hover:bg-gradient-to-r from-[#C2410C] to-[#e85d04] hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2 text-center rounded-lg font-semibold bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;