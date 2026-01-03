import React, { useRef, useState } from "react";
import { useAxiosData } from "../Hooks/DataFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import Card1 from "../components/Cart/Card1";
import JobNotFound from "../components/JobNotFound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Briefcase,
  Filter,
  ArrowUpDown,
  DollarSign,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "Content Writing",
  "Video Editing",
  "UI/UX Design",
];

const Alljobs = ({ isDashboard = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(8);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceFilterApplied, setPriceFilterApplied] = useState(false);
  const apiData = useAxiosData();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch jobs with all filters
  const {
    data: response,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "alljobs",
      searchQuery,
      selectedCategory,
      sortBy,
      sortOrder,
      currentPage,
      jobsPerPage,
      priceFilterApplied ? minPrice : "",
      priceFilterApplied ? maxPrice : "",
    ],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage,
        limit: jobsPerPage,
        sortBy: sortBy,
        sortOrder: sortOrder,
      });

      if (searchQuery) params.append("search", searchQuery);
      if (selectedCategory !== "All")
        params.append("category", selectedCategory);
      if (priceFilterApplied && minPrice) params.append("minPrice", minPrice);
      if (priceFilterApplied && maxPrice) params.append("maxPrice", maxPrice);

      const res = await apiData.get(`jobs?${params.toString()}`);
      return res.data;
    },
  });

  const alljob = response?.data || [];
  const pagination = response?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalJobs: 0,
    hasNextPage: false,
    hasPrevPage: false,
  };

  // Category select handler
  const handleSelect = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Sort handler
  const handleSort = (value) => {
    if (value === "price-asc") {
      setSortBy("price");
      setSortOrder("asc");
    } else if (value === "price-desc") {
      setSortBy("price");
      setSortOrder("desc");
    } else if (value === "date-asc") {
      setSortBy("date");
      setSortOrder("asc");
    } else if (value === "date-desc") {
      setSortBy("date");
      setSortOrder("desc");
    }
    setCurrentPage(1);
  };

  // Search handler
  const handleSearch = () => {
    setSearchQuery(searchValue);
    setCurrentPage(1);
  };

  // Enter press for search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Price filter handler
  const applyPriceFilter = () => {
    setPriceFilterApplied(true);
    setCurrentPage(1);
  };

  // Clear price filter
  const clearPriceFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    setPriceFilterApplied(false);
    setCurrentPage(1);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchValue("");
    setSearchQuery("");
    setSortBy("date");
    setSortOrder("desc");
    setMinPrice("");
    setMaxPrice("");
    setPriceFilterApplied(false);
    setCurrentPage(1);
  };

  // Pagination handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (pagination.totalPages <= maxVisible) {
      for (let i = 1; i <= pagination.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(pagination.totalPages);
      } else if (currentPage >= pagination.totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (
          let i = pagination.totalPages - 3;
          i <= pagination.totalPages;
          i++
        ) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(pagination.totalPages);
      }
    }

    return pages;
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${
        isDashboard ? "p-0" : ""
      }`}
    >
      {/* Background Decoration */}
      {!isDashboard && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      )}

      <div
        className={`relative max-w-7xl md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 ${
          isDashboard ? "py-6" : "py-12 md:py-20"
        }`}
      >
        {/* HERO SECTION */}
        {isDashboard ? (
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Browse Jobs
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Find the perfect project for your skills.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium text-sm">
                <Briefcase className="w-4 h-4" />
                <span>{pagination.totalJobs} Active Jobs</span>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium text-sm mb-6 animate-fade-in-up">
              <Briefcase className="w-4 h-4" />
              <span>Over {pagination.totalJobs}+ Jobs Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6 tracking-tight">
              Find Your Next
              <span className="relative inline-block px-4">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-500">
                  Dream Job
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 dark:bg-orange-900/50 -z-0 skew-x-12 opacity-60"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Browse verified freelance & remote jobs tailored for your skills.
              Connect with top clients and start your next project today.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group z-20">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
              <div className="relative flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center w-full sm:w-auto flex-1 p-2">
                  <Search className="w-6 h-6 text-gray-400 ml-2" />
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search jobs..."
                    className="w-full px-4 py-2 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-base md:text-lg"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 mt-2 sm:mt-0"
                >
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* STATS BAR */}
        {!isDashboard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {[
              {
                title: "Total Jobs",
                value: pagination.totalJobs,
                icon: "📊",
                color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
              },
              {
                title: "Categories",
                value: categories.length,
                icon: "📑",
                color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
              },
              {
                title: "Active Users",
                value: "2k+",
                icon: "👥",
                color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
              },
              {
                title: "Remote Friendly",
                value: "100%",
                icon: "🌍",
                color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* FILTERS & SORT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 mb-12"
        >
          {/* Category Swiper */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-full min-w-0 relative group">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                spaceBetween={12}
                slidesPerView="auto"
                grabCursor
                className="px-4 py-2"
              >
                {categories.map((cat) => (
                  <SwiperSlide key={cat} className="!w-auto">
                    <button
                      onClick={() => handleSelect(cat)}
                      className={`
                        relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap border
                        ${
                          selectedCategory === cat
                            ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent shadow-lg transform scale-105"
                            : "bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
                        }
                      `}
                    >
                      {cat}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                ref={prevRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-600 dark:text-gray-300 hover:text-orange-500 disabled:opacity-0 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                ref={nextRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-600 dark:text-gray-300 hover:text-orange-500 disabled:opacity-0 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Sort and Price Filter Row */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row items-center gap-6">
            {/* Price Filter */}
            <div className="w-full lg:flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold min-w-[80px]">
                  <DollarSign size={18} className="text-orange-500" />
                  <span>Price Range</span>
                </div>
                <div className="flex items-center gap-3 flex-1 w-full sm:w-auto">
                  <div className="relative flex-1 sm:max-w-[120px]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl pl-6 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <span className="text-gray-400 font-medium">-</span>
                  <div className="relative flex-1 sm:max-w-[120px]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl pl-6 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <button
                    onClick={applyPriceFilter}
                    className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    Go
                  </button>
                  {priceFilterApplied && (
                    <button
                      onClick={clearPriceFilter}
                      className="p-2.5 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                      title="Clear Filter"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-gray-200 dark:bg-gray-700"></div>

            {/* Sort Dropdown */}
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">
                  <Filter size={18} className="text-orange-500" />
                  <span>Sort By:</span>
                </div>
                <div className="relative flex-1 lg:min-w-[200px]">
                  <select
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => handleSort(e.target.value)}
                    className="w-full appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-medium cursor-pointer transition-all"
                  >
                    <option value="date-desc">Newest First</option>
                    <option value="date-asc">Oldest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <ArrowUpDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* JOB GRID */}
        <div className="min-h-[400px]">
          {alljob.length === 0 ? (
            <JobNotFound resetFilters={resetFilters} />
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
              >
                {alljob.map((job) => (
                  <div
                    key={job._id}
                    className="transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <Card1 job={job} />
                  </div>
                ))}
              </motion.div>

              {/* PAGINATION */}
              {pagination.totalPages > 1 && (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Showing <span className="text-gray-900 dark:text-white font-bold">{(currentPage - 1) * jobsPerPage + 1}</span> to{" "}
                    <span className="text-gray-900 dark:text-white font-bold">{Math.min(currentPage * jobsPerPage, pagination.totalJobs)}</span>{" "}
                    of <span className="text-gray-900 dark:text-white font-bold">{pagination.totalJobs}</span> jobs
                  </p>

                  <div className="flex items-center gap-2 p-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!pagination.hasPrevPage}
                      className="p-2.5 rounded-lg text-gray-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-1 px-2">
                      {getPageNumbers().map((page, index) =>
                        page === "..." ? (
                          <span
                            key={`ellipsis-${index}`}
                            className="w-10 h-10 flex items-center justify-center text-gray-400 font-medium"
                          >
                            ...
                          </span>
                        ) : (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`
                              w-10 h-10 rounded-lg font-bold text-sm transition-all duration-200
                              ${
                                currentPage === page
                                  ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md transform scale-105"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                              }
                            `}
                          >
                            {page}
                          </button>
                        )
                      )}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!pagination.hasNextPage}
                      className="p-2.5 rounded-lg text-gray-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alljobs;
