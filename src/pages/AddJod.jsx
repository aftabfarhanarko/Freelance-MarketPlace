import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";
import usePrivetApi from "../Hooks/PriverAPI";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLeftArrowAlt } from "react-icons/bi";


const AddJod = () => {
  const { user } = useAuth();
  const priverApi = usePrivetApi();
  const pageNaviget = useNavigate();
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const postedBy = e.target.name.value;
    const category = e.target.category.value;
    const summary = e.target.textarea.value;
    const coverImage = e.target.coverImage.value;
    const userEmail = user.email;
    const create_at = new Date();

    const postDataNow = {
      title,
      postedBy,
      category,
      create_at,
      userEmail,
      coverImage,
      summary,
    };

    setLoding(false);
    priverApi.post("jobs", postDataNow).then((result) => {
      console.log("This is Data", result.data);
      pageNaviget("/");
      toast.success("Your Job Add Successfully");
    });
    setLoding(true);
  };

  if (!loding) {
    return <LodingSpinner></LodingSpinner>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:text-white dark:from-gray-900 dark:to-gray-800 ">
      <div className="">
        <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/alljob" className=" font-semibold  flex text-lg items-center gap-1 mb-10"><BiLeftArrowAlt className="w-7" /> Back All Job</Link>
          <div className="text-center mb-10">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              className=" text-3xl md:text-4xl font-bold "
            >
              Post a New Job
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
              className="mt-3 text-lg "
            >
              Reach thousands of skilled freelancers instantly
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Orange Header */}
            <div
              className="
      bg-gradient-to-r from-orange-500 to-orange-300 text-white font-semibold text-lg rounded-xl hover:from-orange-400 hover:to-orange-500 
          
          
          p-8 "
            >
              <h2 className=" text-xl md:text-2xl font-semibold flex gap-2">
                Creat a Job and Post{" "}
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
                <span className="animate-bounce delay-300">.</span>
              </h2>
              <p className="mt-2 opacity-90">
                Fill in the details below to attract the best talent
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* 1. Job Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Your Job Title"
                  className=" w-full text-black outline-none px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              {/* 2. Category */}
              <div>
                <label className="block text-sm font-semibold dark:text-black dark:text-black mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  required
                  placeholder="Please select a category"
                  className=" w-full px-4 outline-none py-3 border dark:text-black  dark:border-black rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all "
                >
                  <option value="">Choose a category</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Graphics Designing</option>
                  <option>Digital Marketing</option>
                  <option>Content Writing</option>
                  <option>Video Editing</option>
                  <option>UI/UX Design</option>
                </select>
              </div>

              {/* 3. Cover Image URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  name="coverImage"
                  required
                  placeholder="https://i.ibb.co/... (imgbb recommended)"
                  className="w-full px-4 py-3 border outline-none dark:text-black border-gray-900 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Recommended size: 1200×600px
                </p>
              </div>

              {/* 4. Job Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  type="text area "
                  rows="9"
                  name="textarea"
                  required
                  placeholder="Describe   the project, required skills, timeline, budget..."
                  className="  w-full px-4 dark:text-black py-3 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none "
                />
              </div>

              {/* 5. Posted By (Your Name) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  className="  w-full dark:text-black px-4 py-3 outline-none border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all  "
                />
              </div>

              {/* 6. Your Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  disabled
                  defaultValue={user.email}
                  className="w-full dark:text-black px-4 py-3 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-10 py-2
                bg-gradient-to-r from-orange-400 to-orange-500  hover:from-orange-500 hover:to-orange-400  text-white font-semibold text-lg rounded-xl
                 
                 transition-all transform hover:scale-105 shadow-xl"
                >
                  Post Job Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJod;
