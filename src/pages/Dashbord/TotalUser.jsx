import React, { useEffect, useState } from "react";
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
  Calendar
} from "lucide-react";
import Briefcase from "../../Shire/Briefcase";
import usePrivateApi from "../../Hooks/PrivateAPI";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import CountUp from "react-countup";

const TotalUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const nextapi = usePrivateApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    nextapi.get("userData").then((res) => {
      setUsers(res.data.result);
    });
  }, [nextapi]);

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to promote ${user.name} to Admin?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#f97316",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        nextapi.patch(`users/admin/${user._id}`).then((res) => {
             if(res.data.modifiedCount > 0){
                toast.success(`${user.name} is now an Admin!`);
                // Update local state
                setUsers(users.map(u => u._id === user._id ? { ...u, role: 'admin' } : u));
             }
        }).catch(err => {
            console.log(err);
            toast.error("Failed to update role");
        })
      }
    });
  };

  const handleMakeUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to demote ${user.name} to User?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Make User",
    }).then((result) => {
      if (result.isConfirmed) {
         nextapi.patch(`users/user/${user._id}`).then((res) => {
             if(res.data.modifiedCount > 0){
                toast.success(`${user.name} is now a User!`);
                // Update local state
                setUsers(users.map(u => u._id === user._id ? { ...u, role: 'user' } : u));
             }
        }).catch(err => {
            console.log(err);
             toast.error("Failed to update role");
        })
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `This action will permanently delete ${user.name}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete user",
    }).then((result) => {
      if (result.isConfirmed) {
        nextapi.delete(`users/${user._id}`).then((res) => {
             if(res.data.deletedCount > 0){
                toast.success("User deleted successfully");
                setUsers(users.filter((u) => u._id !== user._id));
             }
        }).catch(err => {
             console.log(err);
             toast.error("Failed to delete user");
        })
      }
    });
  };


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <User className="w-6 h-6 text-orange-500" />
            Total Users
            <span className="ml-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold">
              <CountUp end={users.length} duration={2} />
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Manage and monitor all registered users.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Primary (Orange) */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg shadow-orange-500/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <User className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold px-2 py-1 bg-white/20 text-white rounded-full">
              +12%
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1 relative z-10">{users.length}</h3>
          <p className="text-orange-100 text-sm font-medium relative z-10">
            Total Users
          </p>
        </div>

        {/* Card 2: Secondary (Amber) */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-2xl shadow-lg shadow-amber-500/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold px-2 py-1 bg-white/20 text-white rounded-full">
              +5%
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1 relative z-10">{users.length - 1} </h3>
          <p className="text-amber-100 text-sm font-medium relative z-10">
            Freelancers
          </p>
        </div>

        {/* Card 3: Background/Neutral (Dark) */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg shadow-gray-500/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded-full">
              +8%
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1 relative z-10">{users.length - 3}</h3>
          <p className="text-gray-400 text-sm font-medium relative z-10">
            Clients
          </p>
        </div>
      </div>

      {/* Users List - Desktop Table & Mobile Cards */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">
                  <div className="flex items-center gap-2">
                    <UserCircle className="w-4 h-4 text-gray-400" />
                    Info
                  </div>
                </th>
                <th className="p-4 font-semibold">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    Role
                  </div>
                </th>
                <th className="p-4 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    Status
                  </div>
                </th>
                <th className="p-4 font-semibold">
                   <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    Joined Date
                  </div>
                </th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.photoURL}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                            : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                         {user.role === "admin" ? <ShieldCheck className="w-3 h-3" /> : <User className="w-3 h-3" />}
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                     {/* Status placeholder since API data doesn't explicitly have it, assuming active if exists */}
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">Active</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        {user.role === 'user' ? (
                            <button 
                                onClick={() => handleMakeAdmin(user)}
                                className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-lg transition-colors"
                                title="Make Admin"
                            >
                                <ShieldCheck className="w-4 h-4" />
                            </button>
                        ) : (
                             <button 
                                onClick={() => handleMakeUser(user)}
                                className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded-lg transition-colors"
                                title="Make User"
                            >
                                <UserMinus className="w-4 h-4" />
                            </button>
                        )}
                        
                        <button 
                            onClick={() => handleDeleteUser(user)}
                            className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors"
                            title="Delete User"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Cards) */}
        <div className="md:hidden flex flex-col divide-y divide-gray-100 dark:divide-gray-700">
            {users.map((user) => (
                <div key={user._id} className="p-4 space-y-4">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={user.photoURL}
                                alt={user.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    {user.name}
                                </h3>
                                <p className="text-xs text-gray-500 break-all">{user.email}</p>
                            </div>
                        </div>
                        <span
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            user.role === "admin"
                                ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                                : "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                            }`}
                        >
                            {user.role}
                        </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-xl">
                        <div className="flex items-center gap-2">
                             <CheckCircle className="w-4 h-4 text-green-500" />
                             <span className="text-green-600 font-medium">Active</span>
                        </div>
                        <span>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                        {user.role === 'user' ? (
                            <button 
                                onClick={() => handleMakeAdmin(user)}
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-lg transition-colors text-sm font-medium"
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Make Admin
                            </button>
                        ) : (
                             <button 
                                onClick={() => handleMakeUser(user)}
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded-lg transition-colors text-sm font-medium"
                            >
                                <UserMinus className="w-4 h-4" />
                                Make User
                            </button>
                        )}
                        
                        <button 
                            onClick={() => handleDeleteUser(user)}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors text-sm font-medium"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>


        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-center">
          <button className="text-sm text-orange-500 font-medium hover:underline">
            View All Users
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper icon component since Briefcase was used but not imported in the card section

export default TotalUser;
