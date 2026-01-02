import { 
  Briefcase, 
  Image as ImageIcon, 
  User, 
  Mail, 
  FileText, 
  Layers, 
  ArrowLeft,
  Send,
  Sparkles,
  Lightbulb,
  TrendingUp,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Home
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";
import usePrivetApi from "../Hooks/PriverAPI";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const AddJod = () => {
  const { user } = useAuth();
  const priverApi = usePrivetApi();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const postedBy = form.name.value;
    const category = form.category.value;
    const summary = form.textarea.value;
    const coverImage = form.coverImage.value;
    const userEmail = user?.email;
    const create_at = new Date();

    const jobData = {
      title,
      postedBy,
      category,
      summary,
      coverImage,
      userEmail,
      create_at,
    };

    setLoading(false);
    priverApi
      .post("/jobs", jobData)
      .then((res) => {
        console.log("Job posted:", res.data);
        toast.success("Job posted successfully! 🎉");
        navigate("/alljob");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to post job. Try again.");
      })
      .finally(() => setLoading(true));
  };

  if (!loading) {
    return <LodingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Professional Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-4 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 rounded-2xl border border-orange-200 dark:border-orange-700/50 shadow-inner">
              <Briefcase className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Post a New Job</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1.5">
                <Link to="/" className="flex items-center gap-1 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  <Home className="w-3.5 h-3.5" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                <span className="text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">Post Job</span>
              </div>
            </div>
          </div>

          <Link
            to="/alljob"
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl transition-all font-medium group border border-gray-200 dark:border-gray-600 relative z-10"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Jobs</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden h-fit"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white tracking-wide border border-white/20">
                    POST A JOB
                  </span>
                  <span className="flex items-center gap-1 text-orange-100 text-xs font-medium">
                    <Sparkles className="w-3 h-3" /> Premium Listing
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Find Your Perfect Freelancer
                </h1>
                <p className="text-orange-100 text-lg max-w-xl">
                  Create a detailed job post to attract top talent. Be specific about your requirements and budget.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid gap-8">
                
                {/* Job Title & Category Row */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="title"
                        required
                        placeholder="e.g. Senior React Developer"
                        className="w-full pl-4 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <Layers className="w-4 h-4 text-orange-500" />
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        required
                        className="w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all appearance-none dark:text-white cursor-pointer"
                      >
                        <option value="">Select a category</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Graphics Designing</option>
                        <option>Digital Marketing</option>
                        <option>Content Writing</option>
                        <option>Video Editing</option>
                        <option>UI/UX Design</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <FileText className="w-4 h-4 text-orange-500" />
                    Job Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="textarea"
                    rows="6"
                    required
                    placeholder="Describe the project scope, required skills, and deliverables..."
                    className="w-full p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none dark:text-white"
                  />
                </div>

                {/* Cover Image */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <ImageIcon className="w-4 h-4 text-orange-500" />
                    Cover Image URL
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      name="coverImage"
                      required
                      placeholder="https://example.com/image.jpg"
                      className="w-full pl-4 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-white"
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Recommended size: 1200x600px. Supports JPG, PNG.
                  </p>
                </div>

                <div className="h-px bg-gray-100 dark:bg-gray-700 my-4"></div>

                {/* User Info Row */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <User className="w-4 h-4 text-orange-500" />
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName || ""}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all dark:text-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <Mail className="w-4 h-4 text-orange-500" />
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email || ""}
                      disabled
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full md:w-auto ml-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Post Job Now</span>
                    <Send className="w-5 h-5" />
                  </button>
                </div>

              </div>
            </form>
          </motion.div>

          {/* Sidebar Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Pro Tips Card */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-6 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg text-blue-600 dark:text-blue-300">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Posting Tips</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Write a clear, descriptive title",
                  "Include budget range & timeline",
                  "List specific skills required",
                  "Check spelling & grammar"
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Market Insights Card */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-3xl p-6 border border-purple-100 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-lg text-purple-600 dark:text-purple-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Market Insights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-purple-100 dark:border-purple-800/50">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Active Freelancers</span>
                  <span className="font-bold text-gray-900 dark:text-white">12k+</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-100 dark:border-purple-800/50">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Avg. Proposal Time</span>
                  <span className="font-bold text-gray-900 dark:text-white">2 hrs</span>
                </div>
                <p className="text-xs text-purple-600 dark:text-purple-300 mt-2">
                  *Based on recent platform data
                </p>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Need Help?</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Not sure how to structure your job post? Our support team can assist you.
              </p>
              <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl text-sm font-medium transition-colors">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AddJod;