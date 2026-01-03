import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Search,
  Filter,
  Calendar,
  DollarSign,
  User,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import usePrivateApi from "../../Hooks/PrivateAPI";

const TotalAcceptsJobs = () => {
  const nextapi = usePrivateApi();

  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    nextapi.get("adminjobs").then((res) => {
      setJobs(res.data.result);
    });
  }, [nextapi]);
  // console.log(jobs);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-orange-500" />
            Accepted Jobs ({jobs.length})
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Track all jobs accepted by freelancers.
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

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-48 h-48 sm:h-auto relative shrink-0">
                <img
                  src={job.coverImage}
                  alt={job.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-orange-500`}
                  >
                    {job.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-gray-800">
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 hover:text-orange-500 transition-colors cursor-pointer"
                    title={job.title}
                  >
                    {job.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <User className="w-4 h-4 text-orange-500" />
                      <span>
                        Freelancer:{" "}
                        <span className="font-medium">
                          {job.acceptsUserName}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Briefcase className="w-4 h-4 text-amber-500" />
                      <span>
                        Client:{" "}
                        <span className="font-medium">{job.postedBy}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>
                        Accepted: {new Date(job.create_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-900 dark:text-white font-bold text-lg">
                    <DollarSign className="w-5 h-5 text-amber-500" />
                    {job.sallery || 5900}
                  </div>
                  <button className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 font-medium group">
                    View Details{" "}
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalAcceptsJobs;
