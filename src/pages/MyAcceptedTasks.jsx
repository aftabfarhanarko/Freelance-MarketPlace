import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import usePrivetApi from "../Hooks/PriverAPI";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const MyAcceptedTasks = () => {
  const [loding, setLoding] = useState(false);
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const apies = usePrivetApi();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    if (!user?.email) return;
    setLoding(true);
    apies.get(`task?email=${user?.email}`).then((result) => {
      setJobs(result.data);
      setLoding(false);
    });
  }, [apies, user]);

  const handelClear = (_id) => {
    apies.delete(`task/${_id}?email=${user?.email}`).then((result) => {
      if (result.data.deletedCount) {
        setJobs((prev) => prev.filter((j) => j._id !== _id));
        toast.success("Successfully removed accepted job");
      }
    });
  };

  const time = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  if (loding) return <LodingSpinner />;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* ===== HERO ===== */}
      <div className="text-center pt-16 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-orange-500">Accepted Jobs</span>
        </h1>
        <p className="mt-4 text-gray-500">Jobs you have already accepted</p>
      </div>

      {/* ===== STATS ===== */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-orange-500">{jobs.length}</h2>
          <p className="text-sm text-gray-500">Total Accepted</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-orange-500">{jobs.length}</h2>
          <p className="text-sm text-gray-500">Active Tasks</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold text-orange-500">—</h2>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>

      {/* ===== TABLE (DESKTOP) ===== */}
      <div className="w-11/12 mx-auto hidden md:block">
        <div className=" bg-white dark:bg-gray-900 rounded-lg shadow">
          <table className="min-w-full  divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                  Posted By
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                  Category 
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                  Applicant 
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                  Time
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=" border-t border-base-300">
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-10 text-gray-500">
                    No accepted jobs found
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr key={job._id}>
                    <td className="px-6 py-4">{job?.title}</td>
                    <td className="px-6 py-4">{job?.postedBy}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-600">
                        {job?.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">{job?.acceptsUserEmail}</td>
                    {/* <td className="px-6 py-4 line-clamp-2">{job?.summary}</td> */}
                    <td className="px-6 py-4">{time}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handelClear(job._id)}
                        className="px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        <XCircleIcon className="w-4 h-4 inline mr-1" />
                        Clear
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== MOBILE CARD VIEW (RESTORED) ===== */}
      <div className="w-11/12 mx-auto md:hidden space-y-5 pb-10">
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">No accepted jobs found</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white dark:bg-gray-900 border rounded-xl p-4 shadow space-y-3"
            >
              <div>
                <h3 className="font-semibold">{job?.title}</h3>
                <p className="text-xs text-gray-500">{job?.postedBy}</p>
              </div>

              <span className="inline-block px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-600">
                {job?.category}
              </span>

              <p className="text-sm text-gray-600 line-clamp-2">
                {job?.summary}
              </p>

              <div className="flex justify-between items-center text-xs">
                <span className="truncate max-w-[65%]">
                  {job?.acceptsUserEmail}
                </span>
                <span>{time}</span>
              </div>

              <button
                onClick={() => handelClear(job._id)}
                className="w-full flex justify-center items-center gap-2 px-3 py-2 text-xs bg-red-600 text-white rounded hover:bg-red-700"
              >
                <XCircleIcon className="w-4 h-4" />
                Clear Job
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MyAcceptedTasks;
