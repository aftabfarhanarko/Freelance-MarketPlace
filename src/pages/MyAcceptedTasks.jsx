import {
  CheckCircleIcon,
  XCircleIcon,
  BriefcaseIcon,
  Search,
  Filter,
  ArrowUpDown,
  Grid,
  List,
  Clock,
  User,
  CheckCircle,
  DollarSign,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/UseAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import usePrivateApi from "../Hooks/PrivateAPI";

const MyAcceptedTasks = () => {
  const [loding, setLoding] = useState(false);
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const apies = usePrivateApi();

  // New Features State
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    if (!user?.email) return;
    setLoding(true);
    apies.get(`task?email=${user?.email}`).then((result) => {
      setJobs(result.data);
      setLoding(false);
    });
  }, [apies, user]);

  console.log(jobs);

  // Filter and Sort Logic
  const filteredJobs = (Array.isArray(jobs) ? jobs : [])
    .filter(
      (job) =>
        (job?.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (job?.category?.toLowerCase() || "").includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.create_at || 0) - new Date(a.create_at || 0);
      }
      if (sortBy === "oldest") {
        return new Date(a.create_at || 0) - new Date(b.create_at || 0);
      }
      if (sortBy === "a-z") {
        return (a.title || "").localeCompare(b.title || "");
      }
      return 0;
    });

  const handelClear = (_id) => {
    apies.delete(`task/${_id}?email=${user?.email}`).then((result) => {
      if (result.data.deletedCount) {
        setJobs((prev) => prev.filter((j) => j._id !== _id));
        toast.success("Successfully removed accepted job");
      }
    });
  };

  if (loding) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className=" max-w-10/12 mx-auto py-12">
        {/* ===== HERO SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600 dark:text-orange-400">
              <CheckCircleIcon className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My Accepted Jobs
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Track and manage all the jobs you have accepted. Deliver
            high-quality work and build your reputation.
          </p>
        </motion.div>

        {/* ===== STATS CARDS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              label: "Total Accepted",
              value: jobs.length,
              icon: CheckCircle,
              color: "amber",
            },
            {
              label: "Active Tasks",
              value: jobs.length,
              icon: Clock,
              color: "orange",
            },
            {
              label: "Completed",
              value: "—",
              icon: BriefcaseIcon,
              color: "amber",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </h3>
                </div>
                <div
                  className={`p-4 rounded-xl bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 dark:text-${stat.color}-400`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ===== TOOLBAR ===== */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-white"
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Sort */}
              <div className="relative min-w-[160px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-white cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="a-z">Title (A-Z)</option>
                </select>
                <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* View Toggle */}
              <div className="flex bg-gray-50 dark:bg-gray-900 p-1 rounded-xl border border-gray-200 dark:border-gray-700 shrink-0">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white dark:bg-gray-800 shadow text-orange-500"
                      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white dark:bg-gray-800 shadow text-orange-500"
                      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ===== RESULTS CONTENT ===== */}
          <AnimatePresence mode="wait">
            {filteredJobs.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-12 text-center"
              >
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                  {searchTerm ? (
                    <Search className="w-10 h-10" />
                  ) : (
                    <BriefcaseIcon className="w-10 h-10" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {searchTerm ? "No Jobs Found" : "No Accepted Jobs"}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  {searchTerm
                    ? `We couldn't find any jobs matching "${searchTerm}". Try adjusting your search.`
                    : "You haven't accepted any jobs yet. Browse available jobs to get started."}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={viewMode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {viewMode === "list" ? (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700">
                    <div className="p-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Showing {filteredJobs.length} accepted jobs
                      </span>
                    </div>
                    {filteredJobs.map((job) => (
                      <div
                        key={job._id}
                        className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                      >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          {/* Image */}
                          <div className="w-full md:w-48 h-32 shrink-0 rounded-xl overflow-hidden relative">
                            <img
                              src={
                                job.coverImage ||
                                "https://via.placeholder.com/300x200"
                              }
                              alt={job.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-xs font-medium text-white">
                              {job.category}
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                                  {job.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-3">
                                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300">
                                    <User className="w-3.5 h-3.5" />
                                    Posted by: {job.postedBy}
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    {new Date(job.create_at).toLocaleDateString()}
                                  </div>
                                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium">
                                    <DollarSign className="w-3.5 h-3.5" />$
                                    {job.sallery || 1200}
                                  </div>
                                </div>
                              </div>

                              <button
                                onClick={() => handelClear(job._id)}
                                className="shrink-0 flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all font-medium text-sm"
                              >
                                <XCircleIcon className="w-4 h-4" />
                                Withdraw
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredJobs.map((job) => (
                      <div
                        key={job._id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={
                              job.coverImage ||
                              "https://via.placeholder.com/300x200"
                            }
                            alt={job.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-lg text-xs font-semibold text-gray-900 dark:text-white shadow-sm">
                            {job.category}
                          </div>
                          <button
                            onClick={() => handelClear(job._id)}
                            className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full text-orange-600 hover:bg-orange-50 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0"
                            title="Withdraw"
                          >
                            <XCircleIcon className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="p-5 flex flex-col flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors">
                            {job.title}
                          </h3>

                          <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <User className="w-4 h-4" />
                              <span className="truncate">
                                By {job.postedBy}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span>{new Date(job.create_at).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400">
                              <DollarSign className="w-4 h-4" />
                              <span>${job.sallery || 1200}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MyAcceptedTasks;
