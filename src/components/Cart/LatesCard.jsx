import React, { useEffect, useState, useRef } from "react";
import { useAxiosData } from "../../Hooks/DataFetch";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";

const LatesCard = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const apise = useAxiosData();
  const sliderRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    apise
      .get("letes")
      .then((result) => {
        setCard(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setCard([]);
        setLoading(false);
      });
  }, [apise]);

  const scrollPrev = () => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollNext = () => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const SkeletonCard = () => (
    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-52 bg-gray-200"></div>
      <div className="p-5 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              className="text-3xl md:text-4xl font-semibold text-center opacity-0"
            >
              Trending Job Placment
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-easing="ease-out-cubic"
              className="text-lg md:text-xl text-center mt-2 mb-12 text-gray-600"
            >
              Most viewed and all-time top-selling services
            </p>
          </div>
        </div>

        {/* Slider + Arrows (Arrows vertically centered) */}
        <div className="relative">
          {/* Arrow Buttons */}
          <div className="absolute inset-0 flex justify-between items-center z-20 pointer-events-none px-2 md:px-4">
            <button
              onClick={scrollPrev}
              className="p-2 md:p-2 bg-white border border-orange-600 rounded-full shadow-2xl hover:bg-orange-50 transition-all duration-300 pointer-events-auto"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
            </button>

            <button
              onClick={scrollNext}
              className="p-2 md:p-2 bg-white border-1 border-orange-600 rounded-full shadow-2xl hover:bg-orange-50 transition-all duration-300 pointer-events-auto"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
            </button>
          </div>

          {/* Slider */}
          {loading ? (
            <div className="flex gap-6 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {card.map((job, index) => (
                <motion.div
                  key={job._id || index}
                  className="flex-shrink-0 w-80 snap-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/detlise/${job._id}`} className="block z-10">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden group border border-orange-100 hover:border-orange-300 transition-all">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          src={
                            job.coverImage ||
                            "https://via.placeholder.com/400x250?text=No+Image"
                          }
                          className="w-full h-52 object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/400x250?text=No+Image";
                          }}
                        />

                        {/* Featured Badge */}
                        {index === 0 && (
                          <div className="absolute top-4 left-0 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-5 py-2 rounded-r-full text-sm font-bold shadow-xl -rotate-12">
                            Freelancing
                          </div>
                        )}

                        {/* Heart */}
                        <motion.div
                          whileTap={{ scale: 0.8 }}
                          className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-lg border border-orange-200"
                        >
                          <Heart className="w-5 h-5 text-orange-600 group-hover:fill-orange-600 transition-all" />
                        </motion.div>
                      </div>

                      {/* Body */}
                      <div className="p-5 space-y-3">
                        {/* Category */}
                        <span className="inline-block px-4 py-1.5 text-xs font-bold text-orange-500 bg-orange-100 rounded-full">
                          {job.category || "Unknown"}
                        </span>

                        {/* Title */}
                        <h3 className="font-bold text-gray-900 text-lg line-clamp-2">
                          {job.title || "No Title"}
                        </h3>

                        {/* Summary */}
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {job.summary || "No description available."}
                        </p>

                        {/* User */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                            {job.postedBy?.charAt(0).toUpperCase() ||
                              job.userEmail?.charAt(0).toUpperCase() ||
                              "U"}
                          </div>
                          <p className="font-medium text-gray-700">
                            {job.postedBy ||
                              job.userEmail?.split("@")[0] ||
                              "Unknown"}
                          </p>
                        </div>

                        {/* View Details */}
                        <div className="flex items-end justify-between pt-3">
                          <motion.div whileHover={{ x: 6 }}>
                            {/* className="flex items-center gap-1 text-orange-600 font-bold text-sm" */}

                            <button className="relative inline-flex items-center gap-3 py-1 px-8 md:px-8  border-1 border-orange-500 font-medium text-md text-orange-400 rounded-full overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent hover:border-orange-400 shadow-2xl">
                              <svg
                                viewBox="0 0 24 24"
                                className="absolute left-[-40%] w-5 z-10 transition-all duration-700 group-hover:left-3 group-hover:fill-white"
                              >
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                              </svg>

                              <span className="relative z-10 transition-all duration-700 group-hover:text-white  group-hover:translate-x-4">
                                Visit Now
                              </span>

                              <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 transition-all duration-700 group-hover:scale-150 opacity-0 group-hover:opacity-100" />

                              <svg
                                viewBox="0 0 24 24"
                                className="absolute right-2 w-5 fill-orange-400 z-10 transition-all duration-700 group-hover:right-[-40%] group-hover:fill-white"
                              >
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                              </svg>
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatesCard;
