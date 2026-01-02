import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/UseAuth";
import { useTheme } from "../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Plus,
  Moon,
  Sun,
  Bell,
  ChevronRight,
  User,
  Shield,
  HelpCircle,
  BookOpen,
  CheckCircle,
  LifeBuoy,
} from "lucide-react";

const DashbordLayout = () => {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const SidebarItem = ({ icon: Icon, label, active = false, to }) => (
    <Link
      to={to || "#"}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
        ${
          active
            ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
        }`}
    >
      <Icon
        className={`w-5 h-5 ${
          active
            ? "text-white"
            : "text-gray-400 group-hover:text-orange-500 transition-colors"
        }`}
      />
      <span className="font-medium">{label}</span>
      {active && <ChevronRight className="w-4 h-4 ml-auto" />}
    </Link>
  );

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 transform lg:transform-none transition-transform duration-300 ease-in-out flex flex-col
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100 dark:border-gray-700">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              AdminPanel
            </span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {/* Overview Section */}
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Overview
          </div>
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            to="/dashbord"
            active={location.pathname === "/dashbord"}
          />
          <SidebarItem
            icon={Briefcase}
            label="Browse Jobs"
            to="/alljob"
            active={location.pathname === "/alljob"}
          />

          {/* Job Management Section */}
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-4 px-2">
            Platform Management
          </div>
          <SidebarItem 
            icon={Users} 
            label="Total Users" 
            to="/dashbord/totalUser" 
            active={location.pathname === "/dashbord/totalUser"}
          />
          <SidebarItem 
            icon={CheckCircle} 
            label="Total Accepted Jobs" 
            to="/dashbord/totalAcceptsJobs" 
            active={location.pathname === "/dashbord/totalAcceptsJobs"}
          />
          <SidebarItem 
            icon={Briefcase} 
            label="All Jobs" 
            to="/dashbord/allJobs" 
            active={location.pathname === "/dashbord/allJobs"}
          />

          {/* Resources Section */}
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-4 px-2">
            Resources
          </div>
          <SidebarItem 
            icon={BookOpen} 
            label="Blog & News" 
            to="/dashbord/blog" 
            active={location.pathname === "/dashbord/blog"}
          />

          {/* Support Section */}
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-4 px-2">
            Support
          </div>
          <SidebarItem 
            icon={LifeBuoy} 
            label="Help Center" 
            to="/dashbord/support" 
            active={location.pathname === "/dashbord/support"}
          />
          <SidebarItem 
            icon={HelpCircle} 
            label="Contact Support" 
            to="/dashbord/contact" 
            active={location.pathname === "/dashbord/contact"}
          />
        </div>

        {/* User Profile Snippet */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
            <img
              src={user?.photoURL || "https://ui-avatars.com/api/?name=User"}
              alt="User"
              className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-600"
            />
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {user?.displayName || "Admin User"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
            <button
              onClick={logOut}
              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full  relative">
        {/* Top Navbar */}
        <header className="h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-700 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-30 sticky top-0">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-700 focus-within:border-orange-500/50 focus-within:ring-2 focus-within:ring-orange-500/10 transition-all w-64 lg:w-96">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, users, or projects..."
                className="bg-transparent border-none outline-none text-sm text-gray-900 dark:text-white w-full placeholder-gray-400"
              />
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* New Job Button (Desktop) */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Job</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Messages */}
            <button className="hidden sm:block p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-white dark:ring-gray-900"></span>
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900"></span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <img
                  src={
                    user?.photoURL || "https://ui-avatars.com/api/?name=User"
                  }
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                />
                <ChevronRight
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    isProfileOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                  >
                    <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {user?.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user?.email}
                      </p>
                    </div>
                    <div className="p-2 space-y-1">
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        <Shield className="w-4 h-4" />
                        <span>Privacy</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                        <HelpCircle className="w-4 h-4" />
                        <span>Help Center</span>
                      </button>
                    </div>
                    <div className="p-2 border-t border-gray-100 dark:border-gray-700">
                      <button
                        onClick={logOut}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Mobile Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-20"
            >
              <div className="p-4">
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="bg-transparent border-none outline-none text-sm text-gray-900 dark:text-white w-full placeholder-gray-400"
                    autoFocus
                  />
                  <button onClick={() => setIsSearchOpen(false)}>
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 scrollbar-hide">
          <Outlet />
        </main>

        {/* Mobile Floating Action Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center z-40 transition-colors"
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default DashbordLayout;
