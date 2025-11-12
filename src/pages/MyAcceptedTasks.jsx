import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import usePrivetApi from "../Hooks/PriverAPI";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const MyAcceptedTasks = () => {
  const [loding, setLoding] = useState(false);
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const apies = usePrivetApi();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (!user?.email) {
      <LodingSpinner></LodingSpinner>;
      return;
    }
    setLoding(true);
    apies.get(`task?email=${user?.email}`).then((result) => {
      console.log("Data is Sccepts", result.data);
      setJobs(result.data);
      setLoding(false);
    });
  }, [apies, user]);

  // Pc Delet
  const handelClear = (_id) => {
    if (!user?.email) {
      <LodingSpinner></LodingSpinner>;
      return;
    }
    //  setLoding(true)
    apies.delete(`task/${_id}?email=${user?.email}`).then((result) => {
      if (result.data.deletedCount) {
        setJobs((prevJobs) => prevJobs.filter((one) => one._id !== _id));
        toast.success("Successfully Deleat Your Accesspts Jobs");
        setLoding(false);
      }
    });
  };

  const iosTime = jobs?.create_at;
  const time = new Date(iosTime).toLocaleTimeString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Mobile
  const hanndelCLearMobile = (_id) => {
    if (!user?.email) {
      <LodingSpinner></LodingSpinner>;
      return;
    }
    //  setLoding(true)
    apies.delete(`task/${_id}?email=${user?.email}`).then((result) => {
      if (result.data.deletedCount) {
        setJobs((prevJobs) => prevJobs.filter((one) => one._id !== _id));
        toast.success("Successfully Deleat Your Accesspts Jobs");
        setLoding(false);
      }
    });
  };

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:text-white dark:from-gray-900 dark:to-gray-800">
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-easing="ease-out-cubic"
        className="text-center text-3xl dark:text-white  font-semibold pt-15"
      >
        This is Your Accepts Job Sections
      </h1>
      <div className=" w-11/12 mx-auto min-h-screen pt-10 ">
        <div className="overflow-hidden rounded-lg md:border  md:border-gray-200 md:bg-white md:shadow-sm">
          {/* Desktop Table View */}
          <div className="overflow-x-auto hidden dark:bg-gray-900 md:block">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Posted By
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Summary
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Applied On
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No job applications found.
                    </td>
                  </tr>
                ) : (
                  jobs.map((job, index) => {
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        {/* Cover Image + Title */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            {job?.coverImage ? (
                              <img
                                src={job?.coverImage}
                                alt={job?.title}
                                className="w-12 h-12 rounded-lg object-cover border border-gray-300"
                              />
                            ) : (
                              <div className="w-12 h-12 bg-gray-200 border-2 border-dashed rounded-lg" />
                            )}
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {job?.title}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Posted By */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {job?.postedBy}
                        </td>

                        {/* Category */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-600">
                            {job?.category}
                          </span>
                        </td>

                        {/* Applicant */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {job?.acceptsUserEmail}
                        </td>

                        {/* Summary */}
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                          <p className="line-clamp-2">{job?.summary}</p>
                        </td>

                        {/* Applied Date */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {time}
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                          <div className="flex items-center justify-center space-x-3">
                            <div
                              onClick={() => handelClear(job._id)}
                              className="flex gap-3"
                            >
                              <button className="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition">
                                <CheckCircleIcon className="w-4 h-4 mr-1" />
                                Done
                              </button>
                              <button className="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition">
                                <XCircleIcon className="w-4 h-4 mr-1" />
                                Clear
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden p-4 space-y-5 ">
            {jobs?.length === 0 ? (
              <p className="text-center text-gray-500">
                No job applications found.
              </p>
            ) : (
              jobs?.map((job, index) => {
                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    className="border bg-white border-gray-300  rounded-lg shadow-lg p-4 space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      {job?.coverImage ? (
                        <img
                          src={job?.coverImage}
                          alt={job?.title}
                          className="w-14 h-14 rounded-lg object-cover border border-gray-300"
                        />
                      ) : (
                        <div className="w-14 h-14 bg-gray-200 border-2 border-dashed rounded-lg" />
                      )}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          {job?.title}
                        </h3>
                        <p className="text-xs text-gray-500">{job?.postedBy}</p>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-600">
                      <span className="inline-flex px-2 py-1 rounded-full bg-orange-100 text-orange-600">
                        {job?.category}
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 line-clamp-2">
                      {job?.summary}
                    </p>

                    <div className="flex  flex-col gap-3">
                      <div className=" flex items-center justify-between">
                        <p className="text-xs text-gray-500 truncate max-w-[60%]">
                          {job?.acceptsUserEmail}
                        </p>
                        <p className="text-xs text-gray-900">{time}</p>
                      </div>
                      <div
                        className="flex gap-5"
                        onClick={() => hanndelCLearMobile(job._id)}
                      >
                        <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition">
                          <CheckCircleIcon className="w-4 h-4 mr-1" />
                          Done
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition">
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAcceptedTasks;
