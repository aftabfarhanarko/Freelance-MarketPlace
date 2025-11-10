import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import usePrivetApi from "../Hooks/PriverAPI";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";
import toast from "react-hot-toast";
import { useAxiosData } from "../Hooks/DataFetch";

const UpdateJob = () => {
  const [loding, setLoding] = useState(false);
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const { user } = useAuth();
  const apies = useAxiosData();
  const naviget = useNavigate();
  // console.log(id);

  useEffect(() => {
    setLoding(true);
    apies.get(`jobs/${id}`).then((result) => {
      setJob(result.data);
      setLoding(false);
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

    const postDataNow = {
      title,
      postedBy,
      category,
      userEmail,
      coverImage,
      summary,
      create_at,
    };
    console.log(postDataNow);

    apies.patch(`jobs/${job._id}`, postDataNow).then((result) => {
      if (result.data.modifiedCount) {
        toast.success("Your Updeat Successfully");
        naviget("/alljob");
      }
      console.log(result.data);
    });
  };

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Edit This Job</h1>
        <p className="mt-3 text-lg text-gray-600">
          Reach thousands of skilled freelancers instantly
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        {/* Orange Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 text-white">
          <h2 className="text-2xl font-bold">Edit Job Post</h2>
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
              defaultValue={job?.title}
              placeholder="Your Job Title"
              className=" w-full outline-none px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
            />
          </div>

          {/* 2. Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              defaultValue={job?.category}
              placeholder="Please select a category"
              className=" w-full px-4 outline-none py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all "
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
              defaultValue={job?.coverImage}
              placeholder="https://i.ibb.co/... (imgbb recommended)"
              className="w-full px-4 py-3 border outline-none border-gray-900 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
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
              type="text"
              rows="9"
              name="textarea"
              defaultValue={job?.summary}
              className="  w-full px-4 py-3 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none "
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
              defaultValue={user?.displayName}
              className="  w-full px-4 py-3 outline-none border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all  "
            />
          </div>

          {/* 6. Your Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              disabled
              defaultValue={user?.email}
              className="w-full px-4 py-3 border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all  "
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-10 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Ubdeat Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
