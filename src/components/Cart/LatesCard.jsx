import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useAxiosData } from "../../Hooks/DataFetch";
import { useAuth } from "../../Hooks/UseAuth";
import { Link } from "react-router-dom"; // ✅ fixed import
import { FaArrowRightLong } from "react-icons/fa6";

const LatesCard = () => {
  const { user } = useAuth();
  const axiosApi = useAxiosData();
  const [jobs, setJob] = useState([]);

  useEffect(() => {
    axiosApi.get("letes").then((result) => {
      console.log(result.data);
      setJob(result.data);
    });
  }, [axiosApi]);

  return (
    <section className="py-16">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-3xl md:text-4xl font-semibold "
          >
            Latest Community Programs
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1800"
            className=" mt-3 text-lg"
          >
            Discover our most recent community support initiatives.
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10 overflow-visible" // ✅ allow hover effects to show fully
        >
          {jobs.map((job, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="  p-19  flex flex-col justify-center items-center "
              >
                <div
                  data-aos="fade-up"
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-visible border border-gray-100" // ✅ overflow-visible
                >
                  {/* Cover Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={
                        job.coverImage ||
                        "https://via.placeholder.com/600x300?text=Job+Image"
                      }
                      alt={job.title}
                      className="w-full rounded-xl    h-full object-cover group-hover:scale-105 transition-transform duration-500 hover:rounded-xl"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-600 rounded-full shadow-md">
                        {job.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                      {job.title}
                    </h3>

                    <div className="flex items-center mt-3 text-sm text-gray-600">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-orange-600 font-bold bg-orange-200">
                        {job.postedBy.charAt(0)}
                      </div>
                      <span className="ml-3 font-medium">{job.postedBy}</span>
                    </div>

                    <p className="mt-4 line-clamp-2 text-gray-600 text-sm leading-relaxed">
                      {job.summary}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Posted by:{" "}
                        <span className="font-medium">
                          {job.userEmail.split("@")[0]}
                        </span>
                      </span>

                      <Link
                        to={`/detlise/${job._id}`}
                        className="  py-1 px-4 md:px-5 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 flex items-center gap-2 hover:bg-orange-500 hover:text-white"
                      >
                        Details <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatesCard;
