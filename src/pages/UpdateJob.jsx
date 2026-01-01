import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import usePrivetApi from "../Hooks/PriverAPI";
import { BiLeftArrowAlt } from "react-icons/bi";
import { ShieldCheck, PencilLine, Rocket } from "lucide-react";

const UpdateJob = () => {
  const [loding, setLoding] = useState(false);
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const { user } = useAuth();
  const apies = usePrivetApi();
  const naviget = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

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

    apies.patch(`updeat/${job._id}`, postDataNow).then((result) => {
      if (result.data.modifiedCount) {
        toast.success("Job Updated Successfully");
        naviget("/alljob");
      }
    });
  };

  if (loding) return <LodingSpinner />;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* ===== Back Button ===== */}
        <Link
          to="/myAddjobs"
          className="inline-flex items-center gap-2 mb-10 text-lg font-semibold hover:text-orange-500 transition"
        >
          <BiLeftArrowAlt size={26} /> Back to My Jobs
        </Link>

        {/* ===== HERO ===== */}
        <div className="text-center mb-16">
          <h1 data-aos="fade-up" className="text-4xl md:text-5xl font-bold">
            Update Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {" "}
              Job Post
            </span>
          </h1>
          <p data-aos="fade-up" className="mt-4 text-gray-500 text-lg">
            Refine your job details and attract better freelancers
          </p>
        </div>

        {/* ===== INFO CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <PencilLine />,
              title: "Editing Mode",
              text: "Modify your job post anytime",
            },
            {
              icon: <ShieldCheck />,
              title: "Secure Update",
              text: "Your data is protected",
            },
            {
              icon: <Rocket />,
              title: "Instant Publish",
              text: "Changes go live immediately",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center"
            >
              <div className="flex justify-center text-orange-500 mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link
            to="/myAddjobs"
            className=" font-semibold  flex text-lg items-center gap-1 mb-10"
          >
            <BiLeftArrowAlt className="w-7" /> Back To Post All
          </Link>
          <div className="text-center mb-10">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900"
            >
              Edit This Job
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              className="mt-3 text-lg  dark:text-white text-gray-600"
            >
              Reach thousands of skilled freelancers instantly
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Orange Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-300 text-white font-semibold text-lg rounded-xl hover:from-orange-400 hover:to-orange-500  p-8">
              <h2 className="text-2xl font-semibold flex gap-2">
                Edit Job Post{" "}
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
                  defaultValue={job?.title}
                  placeholder="Your Job Title"
                  className=" w-full  dark:text-black outline-none px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
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
                  className=" w-full px-4  dark:text-black outline-none py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all "
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
                  className="w-full px-4 dark:text-black py-3 border outline-none border-gray-900 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
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
                  className="  w-full px-4 py-3 dark:text-black border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none "
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
                  className="  w-full px-4 dark:text-black py-3 outline-none border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all  "
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
                  className="w-full px-4 py-3 dark:text-black border outline-none rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-10 py-2 
             bg-gradient-to-r from-orange-400 to-orange-500  hover:from-orange-500 hover:to-orange-400  text-white  font-medium text-lg rounded-xl  transition-all transform hover:scale-105 shadow-xl"
                >
                  Ubdeat Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateJob;
