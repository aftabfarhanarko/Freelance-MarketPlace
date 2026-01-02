import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Hooks/UseAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import usePrivateApi from "../Hooks/PrivateAPI";
import { 
  ArrowLeft, Briefcase, Globe, Image as ImageIcon, FileText, User, Mail, Save,
  Sparkles, Shield, AlertCircle, CheckCircle, TrendingUp, Clock, Eye, Crown, Zap, Star, Award, BarChart3
} from "lucide-react";

const UpdateJob = () => {
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState(null);
  const [jobScore, setJobScore] = useState(70); // Mock score
  const { id } = useParams();
  const { user } = useAuth();
  const apies = usePrivateApi();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    apies.get(`jobs/${id}`).then((result) => {
      setJob(result.data);
      setLoading(false);
    });
  }, [id, apies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const postedBy = e.target.name.value;
    const category = e.target.category.value;
    const summary = e.target.textarea.value;
    const coverImage = e.target.coverImage.value;
    const create_at = new Date();
    const userEmail = user.email;
   console.log("Dara");
   
    const postDataNow = {
      title,
      postedBy,
      category,
      userEmail,
      coverImage,
      summary,
      create_at,
    };

    apies.patch(`jobs/${job._id}`, postDataNow).then((result) => {
      if (result.data.modifiedCount) {
        toast.success("Job Updated Successfully");
        navigate("/alljob");
      }
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <div>
            <Link
              to="/myAddjobs"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors mb-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to My Jobs</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              Update Job Details
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full border border-orange-200 dark:border-orange-800">
                Editing
              </span>
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              Refine your job posting to attract the perfect candidate.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last saved: Just now
            </span>
          </div>
        </motion.div>

        {/* Top Feature Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-1 shadow-lg mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-full text-orange-600 dark:text-orange-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Pro Tip: Boost Your Visibility</h3>
                <p className="text-gray-500 dark:text-gray-400">Detailed job descriptions get 3x more qualified applicants.</p>
              </div>
            </div>
            <button type="button" className="px-5 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors whitespace-nowrap">
              View Analytics
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Main Form Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              {/* Decorative Line */}
              <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500"></div>

              <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Job Title */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="title"
                        defaultValue={job?.title}
                        placeholder="e.g. Senior React Developer"
                        required
                        className="block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      </div>
                      <select
                        name="category"
                        defaultValue={job?.category}
                        required
                        className="block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a category</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Graphics Designing</option>
                        <option>Digital Marketing</option>
                        <option>Content Writing</option>
                        <option>Video Editing</option>
                        <option>UI/UX Design</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Cover Image URL */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Cover Image URL
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <ImageIcon className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      </div>
                      <input
                        type="url"
                        name="coverImage"
                        defaultValue={job?.coverImage}
                        placeholder="https://example.com/image.jpg"
                        className="block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Job Description <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      </div>
                      <textarea
                        name="textarea"
                        defaultValue={job?.summary}
                        rows="6"
                        required
                        placeholder="Describe the role, responsibilities, and requirements..."
                        className="block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-y min-h-[150px]"
                      />
                    </div>
                  </div>

                  {/* User Info (Read Only) */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Posted By
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        readOnly
                        className="block w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-xl text-gray-500 dark:text-gray-400 cursor-not-allowed focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        defaultValue={user?.email}
                        readOnly
                        className="block w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-xl text-gray-500 dark:text-gray-400 cursor-not-allowed focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-end gap-4">
                   <Link 
                     to="/myAddjobs"
                     className="px-6 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                   >
                     Cancel
                   </Link>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Save className="w-5 h-5" />
                    Update Job
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Sidebar Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            
            {/* Widget 0: Premium Upgrade (New) */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-xl">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 blur-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                    <Crown className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Premium Posting</h4>
                    <p className="text-xs text-gray-400">Get 10x more visibility</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Featured at top of results</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>Instant email alerts to candidates</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span>"Urgent Hiring" badge</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]">
                  Upgrade Now - $19
                </button>
              </div>
            </div>

            {/* Widget 1: Job Quality Score (New) */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-indigo-500" />
                  Job Quality Score
                </h4>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  jobScore >= 70 ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {jobScore}/100
                </span>
              </div>
              
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100 dark:bg-gray-700">
                  <div style={{ width: `${jobScore}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ease-out"></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Your job post is looking good! Add more details to reach a perfect score.
                </p>
                <div className="space-y-2">
                   <div className="flex items-center justify-between text-sm">
                     <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                       <CheckCircle className="w-3 h-3 text-green-500" /> Title Length
                     </span>
                     <span className="text-green-500 text-xs">Perfect</span>
                   </div>
                   <div className="flex items-center justify-between text-sm">
                     <span className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                       <AlertCircle className="w-3 h-3 text-yellow-500" /> Description Depth
                     </span>
                     <span className="text-yellow-500 text-xs">Can improve</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Widget 2: Job Preview Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Job Performance
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Total Views</p>
                      <p className="font-bold text-gray-900 dark:text-white">1,234</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-green-500">+12%</span>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Applicants</p>
                      <p className="font-bold text-gray-900 dark:text-white">45</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-green-500">+5%</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Posting Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-500" />
                Optimization Tips
              </h4>
              <ul className="space-y-3">
                {[
                  "Use a clear, standard job title",
                  "Include specific skills required",
                  "Mention salary range in description",
                  "Check for typos before saving"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Safety Notice */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Safety Reminders
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Never ask for sensitive personal information like bank details or passwords. Keep all communication within the platform for your safety.
              </p>
              <button className="mt-4 text-sm text-orange-500 font-medium hover:text-orange-600 hover:underline">
                Read Community Guidelines
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpdateJob;
