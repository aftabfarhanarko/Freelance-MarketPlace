import React, { useEffect, useState } from "react";
import {
  Briefcase,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Tag,
  Clock,
  FilterIcon,
  User,
  User2,
} from "lucide-react";
import usePrivateApi from "../../Hooks/PrivateAPI";
import CountUp from "react-countup";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllJobs = () => {
  const nextapi = usePrivateApi();
  const [searchTerm, setSearchTerm] = useState("");

  // Pasitions
  const [page, setPage] = useState(1);
  const [allBook, setAllBook] = useState(0);
  const limit = 10;
  const skip = (page - 1) * limit;
  const totalPage = Math.ceil(allBook / limit);

  const {
    data: jobs = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["alljobs", page],
    queryFn: async () => {
      const res = await nextapi.get(
        `alljobsShowDashbord?limit=${limit}&skip=${skip}`
      );
      setAllBook(res?.data?.count);
      return res.data.result;
    },
  });

  console.log("This is Query", jobs);

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
        nextapi.delete(`dashbordJobDelete/${id}`).then((res) => {
          if (res?.data?.acknowledged) {
            refetch();
            toast.success("Admin Jobs Delete Successfully");
          }
          console.log("Delete job with id:", id, res);
        });
      }
    });
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(`Change job ${id} status to ${newStatus}`);
    // Implement status change logic here
    // For now, update local state if we had a status field,
    // or just show it's clicked
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="space-y-6 max-w-11/12 mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-orange-500" />
              All Jobs Management
              <span className="ml-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold">
                <CountUp end={allBook} duration={2} />
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Oversee all job postings on the platform.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700">
              <FilterIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop View - Table */}
        <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                  <th className="p-6 font-semibold">Job Title</th>
                  <th className="p-6 font-semibold">Category</th>
                  <th className="p-6 font-semibold">Posted By</th>
                  <th className="p-6 font-semibold">Salary</th>
                  <th className="p-6 font-semibold">Date</th>
                  <th className="p-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {jobs.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={job.coverImage}
                          alt={job.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-base">
                            {job.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <User className="w-3 h-3" />
                            {job.userEmail}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <Tag className="w-3 h-3 text-orange-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {job.category}
                        </span>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 flex gap-2">
                        <User2 className=" w-4 h-4"></User2> {job.postedBy}
                      </span>
                    </td>
                    <td className="p-6">
                      <span className="text-sm font-bold text-red-500">
                        ${job.sallery || 2340}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        {new Date(job.create_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleDelete(job._id)}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors text-sm font-medium flex-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <div className="flex gap-4 mb-4">
                <img
                  src={job.coverImage}
                  alt={job.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{job.postedBy}</p>
                  <p className="text-xs text-gray-400">{job.userEmail}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
                  <span className="text-gray-500 text-xs block mb-1">
                    Category
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {job.category}
                  </span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
                  <span className="text-gray-500 text-xs block mb-1">
                    Salary
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    ${job.sallery || 2340}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="text-xs text-gray-500">
                  {new Date(job.create_at).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors text-sm font-medium flex-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4 mt-7 border-t border-gray-200 rounded-b-2xl">
        {/* Previous Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            page === 1
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-sm"
          }`}
        >
          <FaArrowLeftLong /> Previous
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {Array.from({ length: totalPage }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-all ${
                page === i + 1
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            page === totalPage
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-sm"
          }`}
        >
          Next <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default AllJobs;
