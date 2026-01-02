import React, { useEffect, useRef, useState } from "react";
import { useAxiosData } from "../Hooks/DataFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import Card1 from "../components/Cart/Card1";
import JobNotFound from "../components/JobNotFound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Search, Briefcase, Filter, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

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
  const [alljob, setAlljob] = useState([]);
  const [loding, setLoding] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [value, setValue] = useState("");
  const apiData = useAxiosData();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setLoding(true);
    apiData.get("jobs").then((result) => {
      setAlljob(result.data);
      setLoding(false);
    });
  }, [apiData]);

  const handleSelect = (cat) => {
    setSelectedCategory(cat);
    setLoding(true);

    if (cat === "All") {
      apiData.get("jobs").then((res) => {
        setAlljob(res.data);
        setLoding(false);
      });
    } else {
      apiData.get(`filtersOn?filter=${cat}`).then((res) => {
        setAlljob(res.data);
        setLoding(false);
      });
    }
  };

  const haldelSort = () => {
    if (value === "Sort ascending") {
      apiData.get("sorting").then((res) => setAlljob(res.data));
    } else if (value === "Sort descending") {
      apiData.get("sorting2").then((res) => setAlljob(res.data));
    }
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setLoding(true);
    apiData.get("jobs").then((result) => {
      setAlljob(result.data);
      setLoding(false);
    });
  };

  if (loding) return <LoadingSpinner />;

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${isDashboard ? 'p-0' : ''}`}>
      {/* Background Decoration - Only show if not dashboard */}
      {!isDashboard && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      )}

      <div className={`relative max-w-11/12 mx-auto ${isDashboard ? 'py-6' : 'py-12 md:py-20'}`}>
        
        {/* ===== HERO SECTION - Different for Dashboard ===== */}
        {isDashboard ? (
          <div className="mb-8">
             <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Browse Jobs</h1>
             <p className="text-gray-500 dark:text-gray-400">Find the perfect project for your skills.</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium text-sm mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Over {alljob.length}+ Jobs Available</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              Find Your Next
              <span className="relative inline-block px-4">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Dream Job</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 dark:bg-orange-900/50 -z-0 skew-x-12"></span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Browse verified freelance & remote jobs tailored for your skills. 
              Connect with top clients and start your next project today.
            </p>

            {/* Search Bar - Public Version */}
            <div className="mt-10 max-w-2xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 border border-gray-100 dark:border-gray-700">
                <div className="pl-4 text-gray-400">
                  <Search className="w-6 h-6" />
                </div>
                <input
                  type="text"
                  placeholder="Search by job title, keywords, or skills..."
                  className="w-full px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-lg"
                />
                <button className="hidden sm:block px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== STATS BAR - Hide on Dashboard to save space ===== */}
        {!isDashboard && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { title: "Total Jobs", value: alljob.length > 0 ? `${alljob.length}+` : "Loading...", icon: "📊" },
              { title: "Categories", value: categories.length, icon: "📑" },
              { title: "Verified Clients", value: "100%", icon: "✅" },
              { title: "Remote Friendly", value: "Yes", icon: "🌍" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mt-1">{item.title}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* ===== FILTERS & SORT ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // sticky
          className=" top-4 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-lg mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Category Swiper */}
            <div className="w-full lg:flex-1 min-w-0 relative group">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
              
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
                spaceBetween={10}
                slidesPerView="auto"
                grabCursor
                className="px-4"
              >
                {categories.map((cat) => (
                  <SwiperSlide key={cat} className="!w-auto py-1">
                    <button
                      onClick={() => handleSelect(cat)}
                      className={`
                        relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap
                        ${selectedCategory === cat
                          ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg scale-105"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }
                      `}
                    >
                      {cat}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-600 dark:text-gray-300 hover:text-orange-500 disabled:opacity-0 transition-all">
                <ChevronLeft size={16} />
              </button>
              <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-600 dark:text-gray-300 hover:text-orange-500 disabled:opacity-0 transition-all">
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 pt-4 lg:pt-0 lg:pl-6">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
                <Filter size={18} />
                <span className="hidden sm:inline">Sort:</span>
              </div>
              <div className="relative flex-1 lg:flex-none">
                <select
                  onClick={haldelSort}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-medium cursor-pointer hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <option>Sort Now Any Type</option>
                  <option>Sort ascending</option>
                  <option>Sort descending</option>
                </select>
                <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== JOB GRID ===== */}
        <div className="min-h-[400px]">
          {alljob.length === 0 ? (
            <JobNotFound resetFilters={resetFilters} />
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
          )}
        </div>

      </div>
    </div>
  );
};

export default Alljobs;
