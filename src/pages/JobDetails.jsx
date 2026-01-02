import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useAxiosData } from "../Hooks/DataFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import { useAuth } from "../Hooks/UseAuth";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Globe, 
  MapPin, 
  Share2, 
  Shield, 
  User, 
  Mail,
  ArrowRight,
  Heart,
  Copy,
  AlertCircle
} from "lucide-react";

const JobDetails = () => {
  const { user } = useAuth();
  const [loding, setLoding] = useState(true);
  const [job, setJob] = useState([]);
  const { id } = useParams();
  const apise = useAxiosData();
  const [isAccepted, setIsAccepted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const pageNaviget = useNavigate();

  useEffect(() => {
    setLoding(false);
    apise.get(`jobs/${id}`).then((result) => {
      console.log(result.data);
      setJob(result.data);
      setLoding(true);
    });
  }, [apise, id]);

  const handleAcceptJob = () => {
    setIsAccepted(true);
    const postDataNow = {
      title: job.title,
      postedBy: job.postedBy,
      category: job.category,
      acceptsUserEmail: user.email,
      coverImage: job.coverImage,
      summary: job.summary,
      create_at: new Date(),
    };

    apise.post("task", postDataNow).then((result) => {
      console.log(result.data);
      toast.success("Congratulations! You have accepted this job.");
    });
    console.log(postDataNow);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Job removed from saved" : "Job saved successfully");
  };

  const iosTime = job.create_at;
  const time = new Date(iosTime).toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (!loding) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20 pt-10"
    >
      {/* Hero Header */}
      <motion.div variants={fadeInUp} className="w-11/12 max-w-7xl mx-auto mb-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 group">
          <div className="relative h-84 md:h-140 overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              src={job.coverImage || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
              alt={job.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                   <motion.span 
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.3 }}
                     className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 backdrop-blur-md text-sm font-semibold mb-4"
                   >
                     <Briefcase className="w-4 h-4" />
                     {job?.category}
                   </motion.span>
                   <motion.h1 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight"
                   >
                     {job.title}
                   </motion.h1>
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                     className="flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base"
                   >
                     <span className="flex items-center gap-2">
                       <User className="w-4 h-4 text-orange-500" />
                       Posted by {job.postedBy}
                     </span>
                     <span className="hidden md:block text-gray-600">•</span>
                     <span className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-orange-500" />
                       Posted on {time}
                     </span>
                   </motion.div>
                 </div>
                 
                 <div className="flex gap-3">
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={handleCopyLink}
                     className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all border border-white/10 tooltip"
                     title="Copy Link"
                   >
                     <Copy className="w-5 h-5" />
                   </motion.button>
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={toggleSave}
                     className={`p-3 rounded-full backdrop-blur-md transition-all border border-white/10 ${isSaved ? 'bg-orange-500/20 text-orange-500 border-orange-500/30' : 'bg-white/10 text-white hover:bg-white/20'}`}
                     title="Save Job"
                   >
                     <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                   </motion.button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description Card */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-orange-500 rounded-full block"></span>
                Job Description
              </h2>
              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {job?.summary}
              </div>
            </motion.div>

            {/* Features / Details */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                   <Shield className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Payment Verified</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">
                   This client has verified payment method. Your payment is secured via escrow.
                 </p>
               </motion.div>
               
               <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                   <Globe className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Remote Work</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">
                   You can work from anywhere. This is a fully remote position with flexible hours.
                 </p>
               </motion.div>
            </motion.div>

            {/* Client Info */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8">
               <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">About the Client</h2>
               <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {job.postedBy?.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 border-4 border-white dark:border-gray-900 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      {job.postedBy}
                      <span className="px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-xs font-bold uppercase tracking-wider">Verified</span>
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                      <Mail className="w-4 h-4" />
                      {job.userEmail}
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                       <div className="text-sm">
                         <span className="font-bold text-gray-900 dark:text-white">12</span>
                         <span className="text-gray-500 ml-1">Jobs Posted</span>
                       </div>
                       <div className="text-sm">
                         <span className="font-bold text-gray-900 dark:text-white">85%</span>
                         <span className="text-gray-500 ml-1">Hire Rate</span>
                       </div>
                    </div>
                  </div>
               </div>
            </motion.div>

          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Action Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6"
              >
                <div className="text-center mb-6">
                   <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">Budget</h3>
                   <div className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-1">
                     <span className="text-2xl text-gray-400">$</span>
                     {job.minPrice || job.maxPrice ? `${job.minPrice} - ${job.maxPrice}` : "Fixed Price"}
                   </div>
                </div>

                {user.email === job.userEmail ? (
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800/50 text-center">
                    <p className="text-orange-800 dark:text-orange-200 font-medium">
                      This is your own job posting
                    </p>
                  </div>
                ) : isAccepted ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/50"
                  >
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-300 mx-auto mb-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                    <h3 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-1">Proposal Sent!</h3>
                    <p className="text-sm text-amber-600 dark:text-amber-400 mb-3">Good luck with your application.</p>
                    <Link to="/accecptjob" className="text-sm font-semibold underline text-amber-700 hover:text-amber-800">
                      View My Bids
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAcceptJob}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </motion.button>
                )}

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Job Type</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Remote</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Experience</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Expert</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Date Posted</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{new Date(job.create_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.7 }}
                 className="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-6 border border-orange-100 dark:border-orange-800/30"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-800/50 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Safe & Secure</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      All payments are protected by our secure escrow system. Only release payment when you're 100% satisfied.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Warning/Safety Tip */}
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.8 }}
                 className="flex gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30"
              >
                 <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
                 <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                   Never pay outside of the platform. Report any suspicious behavior immediately to support.
                 </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
