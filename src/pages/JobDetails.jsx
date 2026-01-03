import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useAxiosData } from "../Hooks/DataFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";
import { useAuth } from "../Hooks/UseAuth";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Modal from "./Modal";
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
  AlertCircle,
  X,
  Star,
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
  const reafernc = useRef();

  const { data: rewiewData, refetch, isLoading } = useQuery({
    queryKey: ["jobs", id],
    queryFn: async () => {
      const res = await apise.get(`reviewsJobs/${id}`);
      return res?.data;
    },
  });

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
      sallery: job.sallery,
      acceptsUserName: user?.displayName,
      acceptsUserEmail: user?.email,
      coverImage: job.coverImage,
      summary: job.summary,
      create_at: new Date(),
    };

    apise.post("task", postDataNow).then((result) => {
      // console.log(result.data);
      if (result.data.acknowledged) {
        refetch();
        toast.success("Congratulations! You have accepted this job.");
        
        reafernc.current.showModal();
      }
    });
    // console.log(postDataNow);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    toast.success(
      isSaved ? "Job removed from saved" : "Job saved successfully"
    );
  };

  const iosTime = job.create_at;
  const time = new Date(iosTime).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(id);

  const handleModalSubmit = (data) => {
    const reviewData = {
      jobId: id,
      title: job.data.title,
      postedBy: job.data.postedBy,
      category: job.data.category,
      sallery: job.data.sallery || 1200,
      coverImage: job.data.coverImage,
      reviewerName: user?.displayName,
      reviewerEmail: user?.email,
      reviewerPhoto: user?.photoURL,
      rating: data.rating,
      comment: data.comment,
      timestamp: new Date().toISOString(),
    };
    console.log(reviewData);

    apise
      .post("reviews", reviewData)
      .then((res) => {
        toast.success("Thank you for your feedback!");
        console.log("reviews Result ", res);
        refetch();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to save feedback");
      });
  };

  console.log("Releted Review", rewiewData);

  // console.log(job.data);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (!loding , isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  // Calculate Average Rating
  const averageRating =
    rewiewData?.length > 0
      ? (
          rewiewData.reduce((acc, curr) => acc + curr.rating, 0) /
          rewiewData.length
        ).toFixed(1)
      : 0;

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20 pt-10"
      >
        {/* Hero Header */}
        <motion.div
          variants={fadeInUp}
          className="w-11/12 max-w-7xl mx-auto mb-10"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 group">
            <div className="relative h-84 md:h-140 overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                src={
                  job.coverImage ||
                  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                }
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
                      <span className="hidden md:block text-gray-600">•</span>
                      <span className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-orange-500" />
                        Salary: ${job.sallery || 1200}
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
                      className={`p-3 rounded-full backdrop-blur-md transition-all border border-white/10 ${
                        isSaved
                          ? "bg-orange-500/20 text-orange-500 border-orange-500/30"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                      title="Save Job"
                    >
                      <Heart
                        className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`}
                      />
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
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-orange-500 rounded-full block"></span>
                  Job Description
                </h2>
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {job?.summary}
                </div>
              </motion.div>

              {/* Features / Details */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.div
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Payment Verified
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This client has verified payment method. Your payment is
                    secured via escrow.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Remote Work
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You can work from anywhere. This is a fully remote position
                    with flexible hours.
                  </p>
                </motion.div>
              </motion.div>

              {/* Client Info */}
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  About the Client
                </h2>
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
                      <span className="px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-xs font-bold uppercase tracking-wider">
                        Verified
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                      <Mail className="w-4 h-4" />
                      {job?.userEmail}
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="text-sm">
                        <span className="font-bold text-gray-900 dark:text-white">
                          12
                        </span>
                        <span className="text-gray-500 ml-1">Jobs Posted</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-bold text-gray-900 dark:text-white">
                          85%
                        </span>
                        <span className="text-gray-500 ml-1">Hire Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Reviews Section - Premium Design */}
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 p-8 overflow-hidden relative"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

                {/* Header with Summary */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Client Reviews
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Feedback from freelancers who worked on this job
                    </p>
                  </div>

                  <div className="flex items-center gap-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/50">
                    <div className="text-center px-2">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white leading-none mb-1">
                        {averageRating}
                      </div>
                      <div className="flex text-orange-500 text-xs gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={
                              i < Math.round(averageRating)
                                ? "fill-current"
                                : "text-gray-300 dark:text-gray-600"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-px h-10 bg-gray-200 dark:bg-gray-700"></div>
                    <div className="text-sm">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {rewiewData?.length || 0}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">
                        Total Reviews
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rewiewData && rewiewData.length > 0 ? (
                    rewiewData.map((review, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-gray-50 dark:bg-gray-800/40 p-6 rounded-2xl border border-transparent hover:border-orange-200 dark:hover:border-orange-900/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
                      >
                        {/* Quote Icon Background */}
                        <div className="absolute top-4 right-4 text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M14.017 21L14.017 18C14.017 16.896 14.789 15.548 15.464 14.733C16.14 13.918 17.202 13.5 17.202 13.5C17.202 13.5 16.913 13.5 16.527 13.5C14.598 13.5 13.034 11.936 13.034 10.007V5.507C13.034 3.578 14.598 2.014 16.527 2.014H19.527C21.456 2.014 23.02 3.578 23.02 5.507V10.007C23.02 11.936 21.456 13.5 19.527 13.5C19.527 13.5 19.527 16.5 16.527 19.5L14.017 21ZM5.01699 21L5.01699 18C5.01699 16.896 5.78899 15.548 6.46399 14.733C7.13999 13.918 8.20199 13.5 8.20199 13.5C8.20199 13.5 7.91299 13.5 7.52699 13.5C5.59799 13.5 4.03399 11.936 4.03399 10.007V5.507C4.03399 3.578 5.59799 2.014 7.52699 2.014H10.527C12.456 2.014 14.02 3.578 14.02 5.507V10.007C14.02 11.936 12.456 13.5 10.527 13.5C10.527 13.5 10.527 16.5 7.52699 19.5L5.01699 21Z" />
                          </svg>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            {review.reviewerPhoto ? (
                              <img
                                src={review.reviewerPhoto}
                                alt={review.reviewerName}
                                className="w-14 h-14 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md group-hover:scale-105 transition-transform"
                              />
                            ) : (
                              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl border-4 border-white dark:border-gray-800 shadow-md group-hover:scale-105 transition-transform">
                                {review.reviewerName?.charAt(0).toUpperCase()}
                              </div>
                            )}
                            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm">
                              <div className="bg-green-500 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800"></div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-base">
                              {review.reviewerName}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <span>
                                {new Date(review.timestamp).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < review.rating
                                  ? "fill-orange-500 text-orange-500"
                                  : "text-gray-200 dark:text-gray-700"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">
                          "{review.comment}"
                        </p>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
                      <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-200 dark:text-orange-900/30 shadow-sm">
                        <Star className="w-10 h-10 fill-current" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        No reviews yet
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                        Be the first to share your experience working on this
                        project!
                      </p>
                    </div>
                  )}
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
                    <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Budget
                    </h3>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-1">
                      <span className="text-2xl text-gray-400">$</span>
                      {job.minPrice || job.maxPrice
                        ? `${job.minPrice} - ${job.maxPrice}`
                        : "Fixed Price"}
                    </div>
                  </div>

                  {user?.email === job?.userEmail ? (
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
                      <h3 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-1">
                        Proposal Sent!
                      </h3>
                      <p className="text-sm text-amber-600 dark:text-amber-400 mb-3">
                        Good luck with your application.
                      </p>
                      <Link
                        to="/accecptjob"
                        className="text-sm font-semibold underline text-amber-700 hover:text-amber-800"
                      >
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
                      <span className="text-gray-500 dark:text-gray-400">
                        Job Type
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Remote
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Experience
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Expert
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Date Posted
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {new Date(job.create_at).toLocaleDateString()}
                      </span>
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
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                        Safe & Secure
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        All payments are protected by our secure escrow system.
                        Only release payment when you're 100% satisfied.
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
                    Never pay outside of the platform. Report any suspicious
                    behavior immediately to support.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Modal ref={reafernc} onSubmit={handleModalSubmit} />
    </div>
  );
};

export default JobDetails;
