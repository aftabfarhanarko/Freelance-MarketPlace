import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { HiOutlineUsers } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa6";
import { HiOutlineCreditCard } from "react-icons/hi";
import { HiOutlineSupport } from "react-icons/hi";
import news from "../assets/h21.png";
import news2 from "../assets/h22.png";
import news3 from "../assets/h23.png";
import AOS from "aos";
import "aos/dist/aos.css";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section className="w-11/12 mx-auto mt-35 mb-35">
        <div>
          <h1 className="text-3xl font-semibold text-center ">
            Need something done?
          </h1>
          <p className="text-lg text-center mt-1 mb-15">
            Most viewed and all-time top-selling services
          </p>
          <div className=" grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7  "
            >
              <div className="hover:animate-bounce">
                <HiOutlineUsers className="w-11 h-8 mx-auto "></HiOutlineUsers>
              </div>
              <h2 className="text-lg font-medium">Post a job</h2>
              <p className="text-gray-800 text-md">
                Write your project details clearly and attract the right talent
                instantly.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7 "
            >
              <div className="hover:animate-bounce">
                <FaRegHandshake className="w-11 h-8 mx-auto "></FaRegHandshake>
              </div>
              <h2 className="text-lg font-medium">Choose freelancers</h2>
              <p className="text-gray-800 text-md">
                Browse verified profiles, compare experience, and select the
                best fit for your work.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7 "
            >
              <div className="hover:animate-bounce">
                <HiOutlineCreditCard className="w-11 h-8 mx-auto "></HiOutlineCreditCard>
              </div>
              <h2 className="text-lg font-medium">Pay safely</h2>
              <p className="text-gray-800 text-md">
                All payments are protected with secure escrow, released only
                when you're satisfied.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7 "
            >
              <div className="hover:animate-bounce">
                <HiOutlineSupport className="w-11 h-8 mx-auto "></HiOutlineSupport>
              </div>
              <h2 className="text-lg font-medium">We’re here to help</h2>
              <p className="text-gray-800 text-md">
                Our support team is available anytime to guide you, answer
                questions, and assist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-35 w-11/12   lg:w-8/12 mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-20 justify-between">
          <div className=" flex flex-col justify-center  space-y-3">
            <h1 className="text-3xl font-semibold space-y-1  ">
              Experience a quicker, simpler, and
              <br></br>
              <span className="mt-1"> more effective job search</span>
            </h1>
            <p className="text-lg  ">
              Our platform offers intuitive tools, personalized job
              recommendations, and valuable resources to streamline your job
              search process.
            </p>
            <div className="mt-3 text-xs">
              <p className="text-lg  ">
                Easily browse job listings with smart search and filters
              </p>
              <p className="text-lg  ">
                Receive personalized job suggestions based on your preferences.
              </p>
              <p className="text-lg  ">
                Access resources to improve your resume, ace interviews, and
                advance your career.{" "}
              </p>
            </div>
            <button class="relative mt-4 w-[170px] flex items-center gap-1 py-1 px-9 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-xl shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                Visite Now
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div data-aos="fade-up" className="relative w-full max-w-lg mx-auto">
            <img
              src={news}
              alt="News main"
              className="w-full h-auto rounded-lg"
            />

            <img
              src={news2}
              alt="News secondary"
              className="absolute right-0 top-19 border bg-white border-base-300 rounded-lg w-20 sm:w-36 md:w-38"
            />

            <img
              src={news3}
              alt="News tertiary"
              className="absolute left-3 bottom-17 border border-gray-300 rounded-2xl w-19 sm:w-30 md:w-44"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto mb-35">
        <h1 className="text-3xl font-semibold text-left ">Our Blog</h1>
        <p className="text-lg text-left mt-1 mb-15">
          Aliquam lacinia diam quis lacus euismod
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div data-aos="fade-up" className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500">
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog1}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <h2 className="text-lg  mb-2 text-gray-800">December 2, 2022</h2>
              <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                Front becomes an official Instagram Marketing Partner
              </p>

              <p className="text-gray-600  transition-colors cursor-pointer">
                Front is proud to announce its official partnership with
                Instagram as a verified Marketing Partne
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500">
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog2}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <h2 className="text-lg  mb-2 text-gray-800">June 14, 2024</h2>
              <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                Start an online business and work from home
              </p>

              <p className="text-gray-600  transition-colors cursor-pointer">
                Launching your own online business lets you unlock the freedom
                to work
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500">
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog3}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <h2 className="text-lg  mb-2 text-gray-800">December 29, 2023</h2>
              <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                Start an online business and work from home right now
              </p>

              <p className="text-gray-600  transition-colors cursor-pointer">
                Start your online business today and enjoy the freedom of
                working from home
              </p>
            </div>
          </div>

          <div data-aos="fade-up" className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500">
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog4}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <h2 className="text-lg  mb-2 text-gray-800">December 19, 2024</h2>
              <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                Start an online business and work from home with complete guide.
              </p>

              <p className="text-gray-600  transition-colors cursor-pointer">
                Start your online business, work from home, step-by-step
                complete guide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
