import React, { useState } from "react";
import { 
  Briefcase, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Tag, Clock 
} from "lucide-react";

const AllJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock Data
  const allJobs = [
    { 
      id: 1, 
      title: "Senior React Developer", 
      category: "Web Development", 
      postedBy: "TechCorp", 
      postedDate: "2 days ago",
      applications: 12,
      status: "Active",
      budget: "$3000 - $5000"
    },
    { 
      id: 2, 
      title: "Logo Design needed", 
      category: "Graphics Designing", 
      postedBy: "StartUp Inc", 
      postedDate: "1 week ago",
      applications: 45,
      status: "Active",
      budget: "$200 - $500"
    },
    { 
      id: 3, 
      title: "Content Writer for Tech Blog", 
      category: "Content Writing", 
      postedBy: "BlogMedia", 
      postedDate: "3 days ago",
      applications: 8,
      status: "Closed",
      budget: "$50 per article"
    },
    { 
      id: 4, 
      title: "Flutter Developer for MVP", 
      category: "Mobile App Development", 
      postedBy: "Appify", 
      postedDate: "5 hours ago",
      applications: 3,
      status: "Active",
      budget: "$2000 Fixed"
    },
    { 
      id: 5, 
      title: "Video Editor for YouTube", 
      category: "Video Editing", 
      postedBy: "CreatorStudio", 
      postedDate: "1 day ago",
      applications: 21,
      status: "Paused",
      budget: "$100 per video"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-orange-500" />
            All Jobs Management
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
             <Filter className="w-4 h-4" />
           </button>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">Job Title</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Posted By</th>
                <th className="p-4 font-semibold">Stats</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {allJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="p-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{job.title}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                         <Clock className="w-3 h-3" />
                         {job.postedDate}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3 h-3 text-orange-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{job.category}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{job.postedBy}</span>
                  </td>
                  <td className="p-4">
                     <span className="text-sm text-gray-500">{job.applications} Applicants</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      job.status === 'Active' 
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                        : job.status === 'Closed'
                        ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-500 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex justify-center">
          <button className="text-sm text-orange-500 font-medium hover:underline">View All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;