import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // সংশোধন: react-router থেকে সঠিক ইম্পোর্ট

const Card1 = ({ job }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
 
  console.log(job);
  
  const { title, postedBy, category, summary, coverImage, userEmail, _id , sallery = 1200  } =
    job;

  return (
    <div
      data-aos="fade-up"
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 backdrop-blur-sm"
    >
      {/* Cover Image with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={
            coverImage || "https://via.placeholder.com/800x400?text=Premium+Job"
          }
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category Badge - Premium Style */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 text-xs font-bold tracking-wider uppercase text-white bg-orange-600/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
            {category}
          </span>
        </div>

        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[-100%]" />
      </div>

      {/* Card Body */}
      <div className="p-8 space-y-2 bg-gradient-to-b from-white to-gray-50/30">
        {/* Title */}
        <h3 className="text-xl font-extrabold text-gray-900 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors duration-500">
          {title}
        </h3>

        {/* Poster Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            {postedBy.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{postedBy}</p>
            <p className="text-sm text-gray-500">@{userEmail.split("@")[0]}</p>
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
          {summary}
        </p>

        {/* Salary */}
        <p className="text-lg font-bold text-gray-800">
           Salary: <span className="text-orange-600">${sallery}</span>
        </p>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-sm text-gray-500">
            Posted by{" "}
            <span className="font-medium text-gray-700">
              {userEmail.split("@")[0]}
            </span>
          </span>

          {/* Premium Button */}
          <Link
            to={`/detlise/${_id}`}
            class="relative flex items-center gap-1 py-1 px-7 md:px-7 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent"
          >
            {/* <!-- Left arrow --> */}
            <svg
              viewBox="0 0 24 24"
              class="absolute left-[-25%] w-4 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>

            <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
              Details
            </span>

            <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

            <svg
              viewBox="0 0 24 24"
              class="absolute right-4 w-4 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Subtle bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-0 scale-x-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-x-100" />
    </div>
  );
};

export default Card1;
