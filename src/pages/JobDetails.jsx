import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useAxiosData } from "../Hooks/DataFetch";
import LodingSpinner from "../components/LodingSpinner";
import toast from "react-hot-toast";
import { MdMarkEmailRead } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useAuth } from "../Hooks/UseAuth";

const JobDetails = () => {
  const { user } = useAuth();
  const [loding, setLoding] = useState(true);
  const [job, setJob] = useState([]);
  const { id } = useParams();
  const apise = useAxiosData();
  const [isAccepted, setIsAccepted] = useState(false);
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

  const iosTime = job.create_at;
  const time = new Date(iosTime).toLocaleTimeString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  if (!loding) {
    return <LodingSpinner></LodingSpinner>;
  }

  return (
    <div>
      <div className="min-h-screen dark:bg-gray-950  py-12 px-4">
        <h1 className="text-2xl font-semibold text-center mb-15 md:text-3xl">
          Full job details
        </h1>
        <div className="max-w-6xl mx-auto">
          {/* Cover Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group cursor-pointer">
            <img
              src={
                job.coverImage ||
                "https://via.placeholder.com/1200x600?text=No+Image"
              }
              alt={job.title}
              className="w-full h-136 object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay - Center Title + Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-2xl">
                  {job.title}
                </h2>
                <span className="inline-block px-6 py-2 bg-orange-500 text-white font-bold rounded-full text-sm shadow-xl">
                  by {job.postedBy}
                </span>
              </div>
            </div>

            {/* Left Side Title - Hide on Hover */}
            <div className="absolute bottom-6 left-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-2xl">
                {job.title}
              </h1>
              <p className="text-xl mt-2 opacity-90">by {job.postedBy}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Category Badge */}
              <div className="flex items-center gap-4">
                <span className="px-5 py-2 bg-orange-500 text-white font-bold rounded-full text-sm shadow-lg">
                  {job?.category}
                </span>
                <span className="text-gray-600">Posted on: {time}</span>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {job?.summary}
                </p>
              </div>

              {/* Client Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Client Information
                </h2>
                <div className="flex items-center gap-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-400 flex items-center justify-center text-white text-md font-medium shadow-lg">
                    <MdMarkEmailRead />
                  </div>

                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      {job?.postedBy}
                    </p>
                    <p className="text-gray-600">{job.userEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Accept Button */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-200 sticky top-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {
                    user.email === job.userEmail ? " This is Your Post" : "  Take this Job "
                  }
                
                </h3>

                {user.email === job.userEmail ? " " :  isAccepted ? (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-green-600 font-bold text-lg">
                     Accepted!
                    </p>
                    <Link to="/accecptjob" className="text-sm text-gray-600 mt-2">Redirecting...</Link>
                  </div>
                ) : (
                  <button
                    onClick={handleAcceptJob}
                    className="w-full py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold text-lg rounded-xl hover:from-orange-500 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Accept for Interview
                  </button>
                )}

                <div className="mt-8 text-sm text-gray-600 space-y-3">
                  <p className="flex justify-between">
                    <span>Job ID:</span>
                    <span className="font-mono font-bold">1876*******</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Type:</span>
                    <span className="font-semibold">Fixed Price</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-600 font-bold">
                       {
                    user.email === job.userEmail ? "Your Post" : "Open"
                  }
                      </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
