import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/UseAuth";
import usePrivetApi from "../Hooks/PriverAPI";
import { PencilIcon, TrashIcon } from "lucide-react";
import { NavLink, Link } from "react-router";
import toast from "react-hot-toast";
import LodingSpinner from "../components/LodingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";

const MyAddedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loding, setLoding] = useState(false);
  const apise = usePrivetApi();
  console.log("My add pages", user.email);

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
    apise.get(`myadd?email=${user?.email}`).then((result) => {
      console.log("Data insert ", result.data);
      setJobs(result.data);
      setLoding(false);
    });
  }, [user.email, apise]);

  const handleDelete1 = (id) => {
    if (!user.email) {
      <LodingSpinner></LodingSpinner>;
      return;
    }
    apise.delete(`jobs/${id}?email=${user.email}`).then((result) => {
      console.log("Data Delet Now", result.data);
      setJobs((prevJobs) => prevJobs.filter((one) => one._id !== id));
      toast.success("Delet Successfully");
    });
  };

  const handleDelete2 = (id) => {
    apise.delete(`jobs/${id}`).then((result) => {
      console.log("Data Delet Now", result.data);
      setJobs((prevJobs) => prevJobs.filter((one) => one._id !== id));
      toast.success("Delet Successfully");
    });
  };

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }
  return (
    <div className="min-h-[80vh] bg-[url('/background3.png')] bg-cover bg-center">
      <section className="max-w-7xl mx-auto p-5">
        <h2
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
          className="text-2xl font-bold text-gray-800 mb-6"
        >
          My Posted Jobs <span className="text-orange-500">{jobs.length}</span>
        </h2>

        <div className="overflow-hidden my-10 hidden md:block rounded-lg border border-gray-200 bg-white shadow-sm">
          {/* Header */}
          <div className="hidden md:grid grid-cols-6 bg-gray-50 text-xs font-semibold uppercase text-gray-600 px-6 py-3">
            <span className="col-span-2">Job Title</span>
            <span>Category</span>
            <span>Posted By</span>
            <span>Applicant</span>
            <span className="text-right">Actions</span>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-200">
            {jobs.length === 0
              ? <h1 className=" py-15 text-center"> No Jobs Post You</h1>
              : jobs.map((job, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-6 items-center px-6 py-4 hover:bg-gray-50 transition"
                  >
                    {/* Job Info */}
                    <div className="flex items-center space-x-4 col-span-2">
                      <img
                        src={job.coverImage}
                        className="w-14 h-14 rounded-md object-cover border border-gray-300"
                      />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          {job.title}
                        </h3>
                        <p className="text-xs w-[250px] text-gray-500 line-clamp-1">
                          {job.summary}
                        </p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">{job.category}</div>
                    <div className="text-sm text-gray-600">{job.postedBy}</div>
                    <div className="text-sm text-gray-600">{job.userEmail}</div>

                    {/* Actions */}
                    <div className="flex justify-end gap-2 mt-3 md:mt-0">
                      <Link
                        to={`/edit/${job._id}`}
                        className="flex items-center gap-1 bg-orange-500 text-white text-xs px-3 py-2 rounded-md hover:bg-orange-600 transition"
                      >
                        <PencilIcon className="w-4 h-4" />
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete1(job._id)}
                        className="flex items-center gap-1 bg-orange-100 text-orange-600 text-xs px-3 py-2 rounded-md hover:bg-orange-200 transition"
                      >
                        <TrashIcon className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* Mobile view as cards */}
        <div className="block  md:hidden mt-6 space-y-4">
          {jobs.map((job, index) => (
            <div
              data-aos="fade-up"
              // data-aos-duration="500"
              // data-aos-easing="ease-out-cubic"
              key={index}
              className="border border-gray-200 bg-white rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={job.coverImage}
                  alt={job.title}
                  className="w-12 h-12 rounded-md object-cover border border-gray-300"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-500">{job.category}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {job.summary}
              </p>
              <p className="text-xs text-gray-500 mb-2">{job.userEmail}</p>
              <div className="flex gap-2">
                <Link
                  to={`/edit/${job._id}`}
                  className="flex items-center gap-1 bg-orange-500 text-white text-xs px-3 py-2 rounded-md hover:bg-orange-600 transition"
                >
                  <PencilIcon className="w-4 h-4" />
                  Edit
                </Link>

                {/* delete button */}
                <button
                  onClick={() => handleDelete2(job._id)}
                  className="flex items-center gap-1 bg-orange-100 text-orange-600 text-xs px-3 py-1.5 rounded-md hover:bg-orange-200 transition"
                >
                  <TrashIcon className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyAddedJobs;
