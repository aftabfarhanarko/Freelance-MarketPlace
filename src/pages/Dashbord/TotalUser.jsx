import React, { useState } from "react";
import { 
  Search, Filter, MoreVertical, Trash2, Edit, User, Mail, Shield, CheckCircle, XCircle 
} from "lucide-react";

const TotalUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock Data
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Freelancer", status: "Active", joined: "Jan 12, 2024", avatar: "https://ui-avatars.com/api/?name=Alice+Johnson&background=orange&color=fff" },
    { id: 2, name: "Bob Smith", email: "bob@company.com", role: "Client", status: "Active", joined: "Feb 05, 2024", avatar: "https://ui-avatars.com/api/?name=Bob+Smith&background=blue&color=fff" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Freelancer", status: "Inactive", joined: "Mar 20, 2024", avatar: "https://ui-avatars.com/api/?name=Charlie+Brown&background=gray&color=fff" },
    { id: 4, name: "David Wilson", email: "david@tech.com", role: "Client", status: "Active", joined: "Apr 10, 2024", avatar: "https://ui-avatars.com/api/?name=David+Wilson&background=purple&color=fff" },
    { id: 5, name: "Eva Green", email: "eva@design.com", role: "Freelancer", status: "Banned", joined: "May 15, 2024", avatar: "https://ui-avatars.com/api/?name=Eva+Green&background=red&color=fff" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <User className="w-6 h-6 text-orange-500" />
            Total Users
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
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
              <User className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-600 rounded-full">+12%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,234</h3>
          <p className="text-sm text-gray-500">Total Users</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-600 rounded-full">+5%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">856</h3>
          <p className="text-sm text-gray-500">Freelancers</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-600 rounded-full">+8%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">378</h3>
          <p className="text-sm text-gray-500">Clients</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">User</th>
                <th className="p-4 font-semibold">Role</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Joined Date</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Freelancer' 
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {user.status === 'Active' ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-sm ${
                        user.status === 'Active' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                    {user.joined}
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-center">
          <button className="text-sm text-orange-500 font-medium hover:underline">View All Users</button>
        </div>
      </div>
    </div>
  );
};

// Helper icon component since Briefcase was used but not imported in the card section
const Briefcase = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export default TotalUser;