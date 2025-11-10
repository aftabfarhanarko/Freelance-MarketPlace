import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router";

const Card1 = ({ job }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);
  const { title, postedBy, category, summary, coverImage, userEmail, _id } =
    job;

  return (
    <div
      data-aos="fade-up"
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Cover Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={
            coverImage || "https://via.placeholder.com/600x300?text=Job+Image"
          }
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-600 rounded-full shadow-md">
            {category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-6">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>

        <div className="flex items-center mt-3 text-sm text-gray-600">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold shadow-md">
            {postedBy.charAt(0)}
          </div>
          <span className="ml-3 font-medium">{postedBy}</span>
        </div>

        <p className="mt-4 line-clamp-2 text-gray-600  text-sm leading-relaxed">
          {summary}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Posted by:{" "}
            <span className="font-medium">{userEmail.split("@")[0]}</span>
          </span>

          <Link
            to={`/detlise/${_id}`}
            class="relative flex items-center gap-1 py-1.5 px-7 md:px-7 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent"
          >
            {/* <!-- Left arrow --> */}
            <svg
              viewBox="0 0 24 24"
              class="absolute left-[-25%] w-4 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>

            <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
              View Details
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
    </div>
  );
};

export default Card1;
