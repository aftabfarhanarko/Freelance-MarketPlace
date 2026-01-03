import React, { useState } from "react";
import {
  Search,
  Filter,
  Trash2,
  User,
  Shield,
  CheckCircle,
  XCircle,
  ShieldCheck,
  UserMinus,
  UserCircle,
  Calendar,
  Download,
  ChevronDown,
  ArrowUpDown,
} from "lucide-react";
import Briefcase from "../../Shire/Briefcase";
import usePrivateApi from "../../Hooks/PrivateAPI";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import CountUp from "react-countup";
import { useQuery } from "@tanstack/react-query";
import useUpdateRole from "../../Hooks/Mouteded";
import { useAxiosData } from "../../Hooks/DataFetch";
import { motion, AnimatePresence } from "framer-motion";

const TotalUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });
  const nextapi = usePrivateApi();
  const { mutate } = useUpdateRole();
  const testApi = useAxiosData();

  // useQuery diye data fetch korchi
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await nextapi.get("userData");
      return res.data.result;
    },
  });

  console.log("This is Query data:", users);

  const HandelUpdet = (role, id) => {
    console.log(role, id);
    mutate(
      { role, id },
      {
        onSuccess: () => {
          refetch(); // Role update howar por data refresh korbe
          toast.success(`User role updated to ${role}`);
        },
      }
    );
  };

  const handleMakeAdmin = (id) => {
    console.log("Admin set", id);
    HandelUpdet("admin", id);
  };

  const handleMakeUser = (id) => {
    console.log("User set", id);
    HandelUpdet("user", id);
  };

  const handleDeleteUser = (user) => {
    console.log("Delete set", user._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        testApi.delete(`usersdelete/${user._id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount) {
            toast.success("User deleted successfully");
            refetch(); // Delete howar por data refresh korbe
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Search, Filter, and Sort logic
  const filteredAndSortedUsers = users
    .filter((user) => {
      const matchesSearch =
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = filterRole === "all" || user.role === filterRole;
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => {
      if (sortConfig.key === "name") {
        return sortConfig.direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortConfig.key === "createdAt") {
        return sortConfig.direction === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

  const handleSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Name,Email,Role,Joined Date\n" +
      filteredAndSortedUsers
        .map(
          (u) =>
            `${u.name},${u.email},${u.role},${new Date(
              u.createdAt
            ).toLocaleDateString()}`
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users_list.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("User list exported!");
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Loading users...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      {/* Header & Controls */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
            Total Users
            <span className="text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full">
              {users.length} Active
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage permissions and monitor user growth.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <User className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                +12% vs last month
              </span>
            </div>
            <h3 className="text-4xl font-bold mb-1">
              <CountUp end={users.length} duration={2} />
            </h3>
            <p className="text-orange-100 font-medium">
              Total Registered Users
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <h3 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">
              <CountUp
                end={users.filter((u) => u.role === "admin").length}
                duration={2}
              />
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Administrators
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <UserCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <h3 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">
              <CountUp
                end={users.filter((u) => u.role === "user").length}
                duration={2}
              />
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Standard Users
            </p>
          </div>
        </motion.div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:max-w-xl flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative min-w-[150px] flex-1 md:flex-none">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none cursor-pointer"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admins</option>
              <option value="user">Users</option>
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={() => handleSort("createdAt")}
            className={`flex-1 md:flex-none justify-center flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              sortConfig.key === "createdAt"
                ? "text-orange-600 border-orange-200 bg-orange-50 dark:bg-orange-900/20"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <ArrowUpDown className="w-4 h-4" />
            <span className="hidden sm:inline">Sort Date</span>
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredAndSortedUsers.length === 0 ? (
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
            <UserCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No users found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Users List - Desktop Table */}
          <div className="max-w-7xl mx-auto">
            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Info
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Joined Date
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Role Update
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredAndSortedUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold overflow-hidden">
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
                                alt={user.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span>{user.name?.charAt(0).toUpperCase()}</span>
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {user.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {user.role === "admin" ? (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 px-3 py-1.5 rounded-full">
                              <div className="p-1 bg-orange-600 rounded-full">
                                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                              </div>
                              <span className="text-sm font-medium capitalize text-orange-700 dark:text-orange-300">
                                {user.role}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-800/50 dark:to-slate-800/50 px-3 py-1.5 rounded-full">
                              <div className="p-1 bg-gray-600 dark:bg-gray-500 rounded-full">
                                <User className="w-3.5 h-3.5 text-white" />
                              </div>
                              <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">
                                {user.role}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-full text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        {user.role === "user" ? (
                          <button
                            onClick={() => handleMakeAdmin(user._id)}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-lg transition-colors text-sm font-medium mx-auto"
                          >
                            <Shield className="w-4 h-4" />
                            Make Admin
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMakeUser(user._id)}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded-lg transition-colors text-sm font-medium mx-auto"
                          >
                            <UserMinus className="w-4 h-4" />
                            Make User
                          </button>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteUser(user)}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors text-sm font-medium mx-auto"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View (Cards) */}
            <div className="md:hidden space-y-4">
              {filteredAndSortedUsers.map((user) => (
                <motion.div
                  key={user._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold text-xl overflow-hidden flex-shrink-0">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>{user.name?.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white break-words">
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm capitalize flex-shrink-0">
                      {user.role === "admin" ? (
                        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 px-3 py-1.5 rounded-full">
                          <div className="p-1 bg-orange-600 rounded-full">
                            <ShieldCheck className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm font-medium capitalize text-orange-700 dark:text-orange-300">
                            {user.role}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-800/50 dark:to-slate-800/50 px-3 py-1.5 rounded-full">
                          <div className="p-1 bg-gray-600 dark:bg-gray-500 rounded-full">
                            <User className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">
                            {user.role}
                          </span>
                        </div>
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Active</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    Joined: {new Date(user.createdAt).toLocaleDateString()}
                  </div>

                  <div className="flex gap-2">
                    {user.role === "user" ? (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-lg transition-colors text-sm font-medium flex-1"
                      >
                        <Shield className="w-4 h-4" />
                        Make Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeUser(user._id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded-lg transition-colors text-sm font-medium flex-1"
                      >
                        <UserMinus className="w-4 h-4" />
                        Make User
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors text-sm font-medium flex-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredAndSortedUsers.length} of {users.length} users
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TotalUser;
