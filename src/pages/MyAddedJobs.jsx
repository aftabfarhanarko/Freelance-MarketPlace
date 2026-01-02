import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/UseAuth";
import usePrivetApi from "../Hooks/PriverAPI";
import { 
  PencilIcon, TrashIcon, BriefcaseIcon, Layers, CheckCircle, Eye, 
  Calendar, User, Search, Grid, List, Filter, ArrowUpDown, Clock
} from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import LodingSpinner from "../components/LodingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";

const MyAddedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loding, setLoding] = useState(false);
  const apise = usePrivetApi();

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
    apise.get(`myadd?email=${user?.email}`).then((result) => {
      setJobs(result.data);
      setLoding(false);
    });
  }, [user?.email, apise]);

  // Filter and Sort Logic
  const filteredJobs = jobs
    .filter((job) => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.category && job.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.create_at || 0) - new Date(a.create_at || 0);
      }
      if (sortBy === "oldest") {
        return new Date(a.create_at || 0) - new Date(b.create_at || 0);
      }
      if (sortBy === "a-z") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This job post will be permanently deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f97316",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        apise.delete(`jobs/${id}?email=${user?.email}`).then(() => {
          setJobs((prev) => prev.filter((j) => j._id !== id));
          toast.success("Job deleted successfully");
        });
      }
    });
  };

  if (loding) return <LodingSpinner />;

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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600 dark:text-orange-400">
                  <BriefcaseIcon className="w-6 h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  My Posted Jobs
                </h1>
              </div>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl">
                Manage and track all your job listings in one place. Keep them updated to attract the best talent.
              </p>
            </div>
            
            <Link 
              to="/creatJob" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              <Layers className="w-5 h-5" />
              Post New Job
            </Link>
          </div>
        </motion.div>

        {/* ===== STATS CARDS ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { label: "Total Posted", value: jobs.length, icon: Layers, color: "blue" },
            { label: "Active Jobs", value: jobs.length, icon: CheckCircle, color: "green" }, // Assuming all are active for now
            { label: "Total Views", value: "1.2k", icon: Eye, color: "purple" }, // Mock data
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h3>
                </div>
                <div className={`p-4 rounded-xl bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 dark:text-${stat.color}-400`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ===== JOBS LIST SECTION ===== */}
        <div className="space-y-6">
          {/* Toolbar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-4 items-center justify-between"
          >
             {/* Search */}
             <div className="relative flex-1 w-full">
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
                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-800 shadow text-orange-500' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-gray-800 shadow text-orange-500' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                </div>
             </div>
          </motion.div>

          {/* Results Content */}
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
                  {searchTerm ? <Search className="w-10 h-10" /> : <BriefcaseIcon className="w-10 h-10" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {searchTerm ? "No Jobs Found" : "No Jobs Posted Yet"}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  {searchTerm 
                    ? `We couldn't find any jobs matching "${searchTerm}". Try adjusting your search or filters.`
                    : "Start by posting your first job requirement to see it listed here."
                  }
                </p>
                {searchTerm ? (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
                  >
                    Clear Search
                  </button>
                ) : (
                  <Link 
                    to="/creatJob"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium"
                  >
                    Post a Job
                  </Link>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={viewMode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {viewMode === 'list' ? (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700">
                     <div className="p-4 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Showing {filteredJobs.length} jobs</span>
                     </div>
                     {filteredJobs.map((job) => (
                      <div 
                        key={job._id}
                        className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                      >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="w-full md:w-48 h-32 shrink-0 rounded-xl overflow-hidden relative">
                            <img
                              src={job.coverImage || "https://via.placeholder.com/300x200"}
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
                                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 text-sm mb-4 leading-relaxed">
                                  {job.summary}
                                </p>
                                
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center gap-1.5">
                                    <User className="w-4 h-4" />
                                    {job.postedBy}
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    {new Date(job.create_at || Date.now()).toLocaleDateString()}
                                  </div>
                                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                    Active
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto mt-4 md:mt-0">
                                <Link
                                  to={`/edit/${job._id}`}
                                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-orange-500 dark:hover:text-orange-400 transition-all font-medium text-sm"
                                >
                                  <PencilIcon className="w-4 h-4" />
                                  Edit
                                </Link>
                                <button
                                  onClick={() => handleDelete(job._id)}
                                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all font-medium text-sm"
                                >
                                  <TrashIcon className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
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
                            src={job.coverImage || "https://via.placeholder.com/300x200"}
                            alt={job.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-lg text-xs font-semibold text-gray-900 dark:text-white shadow-sm">
                            {job.category}
                          </div>
                          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                            <Link
                              to={`/edit/${job._id}`}
                              className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full text-gray-700 dark:text-gray-300 hover:text-orange-500 shadow-sm"
                              title="Edit"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(job._id)}
                              className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full text-red-600 hover:bg-red-50 shadow-sm"
                              title="Delete"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-5 flex flex-col flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                            {job.summary}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                             <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                               <Clock className="w-3.5 h-3.5" />
                               {new Date(job.create_at || Date.now()).toLocaleDateString()}
                             </div>
                             <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-medium">
                               <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                               Active
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

export default MyAddedJobs;
