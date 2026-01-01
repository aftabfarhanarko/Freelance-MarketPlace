import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/UseAuth";
import usePrivetApi from "../Hooks/PriverAPI";
import { PencilIcon, TrashIcon, BriefcaseIcon } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import LodingSpinner from "../components/LodingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const MyAddedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loding, setLoding] = useState(false);
  const apise = usePrivetApi();

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
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

      {/* ===== HERO ===== */}
      <div className="text-center pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-orange-500">Posted Jobs</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Manage all the jobs you have posted. You can edit or delete them anytime.
        </p>
      </div>

      {/* ===== STATS ===== */}
      <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-center">
          <h2 className="text-3xl font-bold text-orange-500">{jobs.length}</h2>
          <p className="text-sm text-gray-500 mt-1">Total Posted</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-center">
          <h2 className="text-3xl font-bold text-orange-500">{jobs.length}</h2>
          <p className="text-sm text-gray-500 mt-1">Active Jobs</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow text-center">
          <h2 className="text-3xl font-bold text-orange-500">—</h2>
          <p className="text-sm text-gray-500 mt-1">Closed</p>
        </div>
      </div>

      {/* ===== INFO BANNER ===== */}
      <div className="w-11/12 max-w-6xl mx-auto mb-10 bg-orange-50 border border-orange-200 text-orange-700 px-6 py-4 rounded-xl">
        📌 These are the jobs you have created. Keep them updated for better applicants.
      </div>

      {/* ===== DESKTOP TABLE ===== */}
      <div className="w-11/12 max-w-6xl mx-auto hidden md:block bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-6 bg-gray-200 px-6 py-3 text-xs font-semibold uppercase text-gray-600">
          <span className="col-span-2">Job</span>
          <span>Category</span>
          <span>Posted By</span>
          <span>Applicant</span>
          <span className="text-right">Actions</span>
        </div>

        {jobs.length === 0 ? (
          <p className="py-14 text-center text-gray-500">
            You haven't posted any job yet.
          </p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="grid grid-cols-6 items-center px-6 py-4 border-t border-base-300 hover:bg-gray-50 transition"
            >
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src={job.coverImage}
                  className="w-14 h-14 rounded-lg object-cover border border-base-300 "
                />
                <div>
                  <h3 className="text-sm font-semibold">{job.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {job.summary}
                  </p>
                </div>
              </div>

              <span className="text-sm">{job.category}</span>
              <span className="text-sm">{job.postedBy}</span>
              <span className="text-sm">{job.userEmail}</span>

              <div className="flex justify-end gap-2">
                <Link
                  to={`/edit/${job._id}`}
                  className="px-3 py-2 text-xs rounded-md bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-1"
                >
                  <PencilIcon className="w-4 h-4" /> Edit
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="px-3 py-2 text-xs rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 flex items-center gap-1"
                >
                  <TrashIcon className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ===== MOBILE CARDS ===== */}
      <div className="w-11/12 max-w-6xl mx-auto md:hidden space-y-4 pb-12">
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">
            No jobs posted yet.
          </p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              data-aos="fade-up"
              className="bg-white dark:bg-gray-900 border rounded-xl p-4 shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={job.coverImage}
                  className="w-12 h-12 rounded-md object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-sm">{job.title}</h3>
                  <p className="text-xs text-gray-500">{job.category}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {job.summary}
              </p>

              <p className="text-xs text-gray-500 mb-3">
                {job.userEmail}
              </p>

              <div className="flex gap-2">
                <Link
                  to={`/edit/${job._id}`}
                  className="flex-1 text-center py-2 text-xs rounded-md bg-orange-500 text-white"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="flex-1 py-2 text-xs rounded-md bg-orange-100 text-orange-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MyAddedJobs;
