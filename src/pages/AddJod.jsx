import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";
import usePrivetApi from "../Hooks/PriverAPI";
import { Link, useNavigate } from "react-router-dom"; // Fixed: react-router instead of react-router
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLeftArrowAlt } from "react-icons/bi";

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          to="/alljob"
          className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium text-lg hover:gap-3 transition-all duration-300 mb-10 group"
          data-aos="fade-right"
        >
          <BiLeftArrowAlt className="text-2xl group-hover:-translate-x-1 transition-transform" />
          Back to All Jobs
        </Link>

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Post a New Job
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with top freelancers worldwide. Describe your project and get proposals in hours.
          </p>
        </div>

        {/* Form Card with Glass Effect */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                Create Your Job Post
                <span className="animate-pulse">✨</span>
              </h2>
              <p className="mt-3 text-orange-100 text-lg">
                Attract the best talent with a clear and compelling job post
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-300/30 rounded-full blur-3xl"></div>
          </div>

          {/* Form Fields */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Job Title */}
            <div data-aos="fade-up" data-aos-delay="300">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Need a Full-Stack React Developer for SaaS App"
                className="w-full px-5 py-4 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300"
              />
            </div>

            {/* Category */}
            <div data-aos="fade-up" data-aos-delay="400">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                required
                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300"
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
            </div>

            {/* Cover Image */}
            <div data-aos="fade-up" data-aos-delay="500">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Cover Image URL
              </label>
              <input
                type="url"
                name="coverImage"
                required
                placeholder="https://i.ibb.co/... (Recommended: imgbb)"
                className="w-full px-5 py-4 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300"
              />
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Recommended: 1200×600px • Use high-quality banner images
              </p>
            </div>

            {/* Description */}
            <div data-aos="fade-up" data-aos-delay="600">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Job Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="textarea"
                rows="10"
                required
                placeholder="Describe your project in detail... Include scope, required skills, timeline, budget range, and deliverables."
                className="w-full px-5 py-4 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 resize-none"
              />
            </div>

            {/* Name */}
            <div data-aos="fade-up" data-aos-delay="700">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                required
                className="w-full px-5 py-4 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300"
              />
            </div>

            {/* Email (Disabled) */}
            <div data-aos="fade-up" data-aos-delay="800">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email || ""}
                disabled
                className="w-full px-5 py-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-2xl cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 px-8 md:px-12 py-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-3"
              >
                Post Job Now
                <span className="animate-pulse">🚀</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJod;