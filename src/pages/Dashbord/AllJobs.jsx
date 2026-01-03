import React, { useEffect, useState } from "react";
import {
  Briefcase,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Tag,
  Clock,
  FilterIcon,
  User,
  User2,
} from "lucide-react";
import usePrivateApi from "../../Hooks/PrivateAPI";
import CountUp from "react-countup";

const AllJobs = () => {
  const nextapi = usePrivateApi();
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    nextapi.get("jobs").then((res) => {
      setJobs(res.data);
    });
  }, [nextapi]);

  const handleDelete = (id) => {
    // Implement delete logic here
    console.log("Delete job with id:", id);
    const newJobs = jobs.filter(job => job._id !== id);
    setJobs(newJobs);
    // nextapi.delete(`jobs/${id}`).then(...)
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(`Change job ${id} status to ${newStatus}`);
    // Implement status change logic here
    // For now, update local state if we had a status field, 
    // or just show it's clicked
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-orange-500" />
            All Jobs Management
            <span className="ml-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold">
              <CountUp end={jobs.length} duration={2} />
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Oversee all job postings on the platform.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700">
            <FilterIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                <th className="p-6 font-semibold">Job Title</th>
                <th className="p-6 font-semibold">Category</th>
                <th className="p-6 font-semibold">Posted By</th>
                <th className="p-6 font-semibold">Salary</th>
                <th className="p-6 font-semibold">Date</th>
                <th className="p-6 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {jobs.map((job) => (
                <tr
                  key={job._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={job.coverImage} 
                        alt={job.title} 
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-base">
                          {job.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                           <User className="w-3 h-3" />
                          {job.userEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3 h-3 text-orange-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {job.category}
                      </span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 flex gap-2">
                   <User2 className=" w-4 h-4"></User2>    {job.postedBy}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="text-sm font-bold text-red-500">
                      ${job.sallery || 2340}
                    </span>
                  </td>
                   <td className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                       <Clock className="w-3 h-3" />
                      {new Date(job.create_at).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mr-2">
                        <button
                          onClick={() => handleStatusChange(job._id, 'Active')}
                          className="px-3 py-1 text-xs font-medium rounded-md transition-all bg-white dark:bg-gray-600 text-green-600 shadow-sm"
                        >
                          Active
                        </button>
                        <button
                          onClick={() => handleStatusChange(job._id, 'Closed')}
                          className="px-3 py-1 text-xs font-medium rounded-md transition-all text-gray-500 hover:text-gray-700 dark:text-gray-400"
                        >
                          Close
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Delete"
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
      </div>

      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="flex gap-4 mb-4">
               <img 
                  src={job.coverImage} 
                  alt={job.title} 
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{job.postedBy}</p>
                  <p className="text-xs text-gray-400">{job.userEmail}</p>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
                <span className="text-gray-500 text-xs block mb-1">Category</span>
                <span className="font-medium text-gray-900 dark:text-white">{job.category}</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
                <span className="text-gray-500 text-xs block mb-1">Salary</span>
                <span className="font-medium text-gray-900 dark:text-white">${job.sallery || 2340}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
               <div className="text-xs text-gray-500">
                  {new Date(job.create_at).toLocaleDateString()}
               </div>
               <div className="flex items-center gap-2">
                  <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                      <button
                        onClick={() => handleStatusChange(job._id, 'Active')}
                        className="px-2 py-1 text-xs font-medium rounded transition-all bg-white dark:bg-gray-600 text-green-600 shadow-sm"
                      >
                        Active
                      </button>
                      <button
                        onClick={() => handleStatusChange(job._id, 'Closed')}
                        className="px-2 py-1 text-xs font-medium rounded transition-all text-gray-500 hover:text-gray-700 dark:text-gray-400"
                      >
                        Close
                      </button>
                  </div>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
