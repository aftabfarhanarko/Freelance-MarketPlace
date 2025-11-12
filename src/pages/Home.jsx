import React, { useEffect } from "react";
import Banner from "../components/Banner";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineUsers,
} from "react-icons/hi";
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
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import upone from "../assets/ARKO.jpg";

import company from "../assets/1.png";
import company2 from "../assets/2.png";
import company3 from "../assets/3.png";
import company4 from "../assets/4.png";
import company5 from "../assets/5.png";
import company6 from "../assets/6.png";

import pic1 from "../assets/man2.png";
import pic2 from "../assets/man3.png";
import pic3 from "../assets/women1.png";
import pic4 from "../assets/women7.jpg";
import pic7 from "../assets/postes.png";
import pic5 from "../assets/women2.png";
import pic6 from "../assets/women4.png";
import CountUp from "react-countup";

import ScrollTrigger from "react-scroll-trigger";
import { Briefcase, Users, FileText, Building2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import LatesCard from "../components/Cart/LatesCard";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);
  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <section>
        <Banner></Banner>
      </section>

      <section className="w-11/12 mx-auto mt-20 md:mt-35 mb-15 md:mb-20">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            className="text-3xl md:text-4xl font-semibold text-center opacity-0"
          >
            Need something done?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            data-aos-easing="ease-out-cubic"
            className="text-md md:text-lg text-center mt-2 mb-12"
          >
            Most viewed and all-time top-selling services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              className="border px-5 border-gray-300 shadow-md rounded-lg flex flex-col text-center py-8
transition-transform transition-shadow transition-colors
duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
hover:bg-orange-50 hover:shadow-xl hover:scale-105 group transform "
            >
              <div
                className="mx-auto w-11 h-11 text-orange-500 transition-transform duration-500
                            group-hover:scale-110 group-hover:-rotate-3 animate-float flex items-center justify-center text-3xl"
              >
                <HiOutlineUsers className="w-full h-full" />
              </div>

              <h2 className="text-lg font-medium mt-4 transition-colors duration-500 group-hover:text-orange-500">
                Post a job
              </h2>
              <p className=" text-md mt-2 transition-opacity duration-700 group-hover:opacity-80">
                Write your project details clearly and attract the right talent
                instantly.
              </p>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="border px-5 border-gray-300 shadow-md rounded-lg flex flex-col text-center py-8
transition-transform transition-shadow transition-colors
duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
hover:bg-orange-50 hover:shadow-xl hover:scale-105 group transform"
            >
              <div
                className="mx-auto w-14 h-14 text-orange-500 transition-transform duration-500
                            group-hover:scale-110 group-hover:-rotate-3 animate-float flex items-center justify-center text-3xl"
              >
                <FaRegHandshake className="w-full h-full" />
              </div>

              <h2 className="text-lg font-medium mt-4 transition-colors duration-500 group-hover:text-orange-500">
                Choose freelancers
              </h2>
              <p className=" text-md mt-2 transition-opacity duration-700 group-hover:opacity-80">
                Browse verified profiles, compare experience, and select the
                best fit for your work.
              </p>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="border px-5 border-gray-300 shadow-md rounded-lg flex flex-col text-center py-8
transition-transform transition-shadow transition-colors
duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
hover:bg-orange-50 hover:shadow-xl hover:scale-105 group transform"
            >
              <div
                className="mx-auto w-14 h-14 text-orange-500 transition-transform duration-500
                            group-hover:scale-110 group-hover:-rotate-3 animate-float flex items-center justify-center text-3xl"
              >
                <HiOutlineCreditCard className="w-full h-full" />
              </div>

              <h2 className="text-lg font-medium mt-4 transition-colors duration-500 group-hover:text-orange-500">
                Pay safely
              </h2>
              <p className=" text-md mt-2 transition-opacity duration-700 group-hover:opacity-80">
                All payments are protected with secure escrow, released only
                when you're satisfied.
              </p>
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="border px-5 border-gray-300 shadow-md rounded-lg flex flex-col text-center py-8
transition-transform transition-shadow transition-colors
duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
hover:bg-orange-50 hover:shadow-xl hover:scale-105 group transform"
            >
              <div
                className="mx-auto w-14 h-14 text-orange-500 transition-transform duration-500
                            group-hover:scale-110 group-hover:-rotate-3 animate-float flex items-center justify-center text-3xl"
              >
                <HiOutlineSupport className="w-full h-full" />
              </div>

              <h2 className="text-lg font-medium mt-4 transition-colors duration-500 group-hover:text-orange-500">
                We’re here to help
              </h2>
              <p className=" text-md mt-2 transition-opacity duration-700 group-hover:opacity-80">
                Our support team is available anytime to guide you, answer
                questions, and assist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:w-11/12 mx-auto mb-15 md:mb-20">
        <LatesCard></LatesCard>
      </section>

      <section className="mb-15 md:mb-20 w-11/12 lg:w-8/12 mx-auto">
        <div className=" flex flex-col-reverse md:flex-row gap-10   md:gap-50 justify-between">
          {/* Left side text animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center space-y-3"
          >
            <h1 className="text-3xl md:text-4xl font-semibold  ">
              Experience a quicker, simpler
              <br />
              <span className="mt-1">more effective job search</span>
            </h1>

            <p className=" text-md md:text-lg">
              Our platform offers intuitive tools, personalized job
              recommendations, and valuable resources to streamline your job
              search process.
            </p>

            <div className="mt-3 text-xs">
              <p className="text-lg">
                Easily browse job listings with smart filters
              </p>
              <p className="text-lg">Receive personalized job suggestions</p>
              <p className="text-lg">
                Access resources to improve your resume and ace interviews.
              </p>
            </div>

            <button class="relative flex mt-5  w-[195px]  items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-5 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-2 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-2 w-5 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </motion.div>

          {/* Right side image animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }} // ✅ mobile friendly scroll trigger
            className="relative w-full max-w-lg mx-auto"
          >
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
          </motion.div>
        </div>
      </section>

      <section className="w-11/12 mx-auto mb-15 md:mb-20">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          className="text-3xl md:text-4xl font-semibold text-center "
        >
          Our Blog
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
          className="text- md:text-lg text-center mt-2 mb-12"
        >
          Aliquam lacinia diam quis lacus euismod
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {/* Card 1 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            className="group relative max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

            {/* Image with Parallax Zoom */}
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog1}
                alt="Instagram Marketing"
                className="w-full  h-60 object-cover"
              />
            </motion.div>

            <div className=" px-3.5 py-2.5  md:p-6  md:space-y-3">
              <motion.details
                className="collapse bg-transparent border-none"
                initial={false}
              >
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2
                    className="text-lg mb-2 text-orange-500 font-bold"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    December 2, 2022
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 text-base font-medium hover:text-pink-600 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Front becomes an official Instagram Marketing Partner{" "}
                    <br></br>
                  </motion.p>
                </motion.summary>

                <motion.div
                  className="collapse-content text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p>
                    Front is proud to announce its official partnership with
                    Instagram as a verified Marketing Partner. This
                    collaboration opens new doors for creators and businesses
                    worldwide.
                  </p>
                </motion.div>
              </motion.details>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="group relative max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog2}
                alt="Work from Home"
                className="w-full h-60 object-cover"
              />
            </motion.div>

            <div className="px-3.5 py-2.5  md:p-6  md:space-y-3">
              <motion.details className="collapse bg-transparent border-none">
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none"
                  whileHover={{ x: 4 }}
                >
                  <motion.h2 className="text-lg mb-2 text-orange-500 font-bold">
                    June 14, 2024
                  </motion.h2>
                  <motion.p className="text-gray-700 text-base font-medium hover:text-pink-600 transition-colors">
                    Start an online business and work from home
                  </motion.p>
                </motion.summary>
                <motion.div className="collapse-content text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                  <p>
                    Launching your own online business lets you unlock the
                    freedom to work from anywhere in the world with just a
                    laptop and internet.
                  </p>
                </motion.div>
              </motion.details>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="group relative max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog3}
                alt="Online Business Guide"
                className="w-full h-60 object-cover"
              />
            </motion.div>

            <div className="px-3.5 py-2.5  md:p-6  md:space-y-3">
              <motion.details className="collapse bg-transparent border-none">
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none"
                  whileHover={{ x: 4 }}
                >
                  <motion.h2 className="text-lg mb-2 text-orange-500 font-bold">
                    December 29, 2023
                  </motion.h2>
                  <motion.p className="text-gray-700 text-base font-medium hover:text-pink-600 transition-colors">
                    Start an online business and work from home right now
                  </motion.p>
                </motion.summary>
                <motion.div className="collapse-content text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                  <p>
                    Start your online business today and enjoy the freedom of
                    working from home. No office, no boss, just you and your
                    dreams.
                  </p>
                </motion.div>
              </motion.details>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="group relative max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog4}
                alt="Complete Guide"
                className="w-full h-60 object-cover"
              />
            </motion.div>

            <div className="px-3.5 py-2.5  md:p-6  md:space-y-3">
              <motion.details className="collapse bg-transparent border-none">
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none"
                  whileHover={{ x: 4 }}
                >
                  <motion.h2 className="text-lg mb-2 text-orange-500 font-bold">
                    December 19, 2024
                  </motion.h2>
                  <motion.p className="text-gray-700 text-base font-medium hover:text-pink-600 transition-colors">
                    Start an online business and work home guide.
                  </motion.p>
                </motion.summary>
                <motion.div className="collapse-content text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                  <p>
                    Step-by-step complete guide to launch your online business
                    from home. From idea to income – everything covered!
                  </p>
                </motion.div>
              </motion.details>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full  bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-5 mb-15 md:mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Side Animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold  mb-3">
              Find the Perfect Freelancer for Your Next Big Project
            </h2>

            <p className=" mb-8">
              Freeio is a modern freelance marketplace that connects talented
              professionals with clients around the world. Whether you’re a
              designer, developer, writer, or marketer — we help you grow your
              business and showcase your skills.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  4.9/
                  <CountUp start={0} end={5} duration={2} />{" "}
                </h3>
                <p className=" text-sm">Clients rate professionals on Freeio</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  <CountUp start={0} end={95} duration={2}></CountUp>%
                </h3>
                <p className=" text-sm">90% of customers are satisfied</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  Award Winner
                </h3>
                <p className=" text-sm">G2’s 2025 Best Software Awards</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Animation */}
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white shadow-xl rounded-2xl p-8 max-w-md mx-auto hover:shadow-2xl transition-all duration-500"
            >
              <h4 className="text-orange-500 font-semibold mb-3">Great Work</h4>
              <p className="text-gray-700 mb-6">
                Discover a global network of experts ready to bring your ideas
                to life. From startups to enterprises, we make it simple to
                hire, manage, and pay freelancers — all in one secure platform.
              </p>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center gap-3"
              >
                <img
                  src="https://i.pravatar.cc/50?img=5"
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Courtney Henry</p>
                  <p className="text-sm text-gray-500">Web Designer</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Slider Arrows */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center items-center gap-6 mt-6"
            >
              <button className="p-2 rounded-full border hover:bg-gray-100 transition">
                <HiOutlineArrowLeft className="text-xl text-gray-700" />
              </button>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                <span className="w-2 h-2 rounded-full bg-gray-900"></span>
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              </div>
              <button className="p-2 rounded-full border hover:bg-gray-100 transition">
                <HiOutlineArrowRight className="text-xl text-gray-700" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-11/12 mx-auto mb-15 md:mb-20  ">
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
          className="text-3xl md:text-4xl font-semibold text-center opacity-0"
        >
          Top Rated Performer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
          className="text-md md:text-lg text-center mt-2 mb-12"
        >
          Meet the professionals behind every successful project
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-12    mx-auto w-full">
          <div
            data-aos="zoom-in"
            className=" mx-auto w-[360px] md:justify-items-normal bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Robert Fox
            </h3>
            <p className="text-sm text-orange-500">Nursing Assistant</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">4.9</span>
              <span className="text-gray-400">(595 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Figma
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Sketch
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                HTML5
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$90 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%98</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="zoom-in-left"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic3}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Upwork</h3>
            <p className="text-sm text-orange-500">
              Darrell Steward Jacob Howard
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">6.9</span>
              <span className="text-gray-400">(2195 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Sketch
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                JS
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$120 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%68</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="zoom-in-up"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic5}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Online</h3>
            <p className="text-sm text-orange-500">Noah Collins</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">3.9</span>
              <span className="text-gray-400">(495 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Go
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Doker
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$320 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%78</p>
              </div>
            </div>

            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up"
            className=" mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic6}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Official
            </h3>
            <p className="text-sm text-orange-500">Isabella Hayes</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">8.9</span>
              <span className="text-gray-400">(7195 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C#
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Python
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Java
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$720 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%98</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-down-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic1}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Fiver</h3>
            <p className="text-sm text-orange-500">Korim Bangima</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">3.9</span>
              <span className="text-gray-400">(295 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Figma
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                SQL
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Node.js
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$50 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%58</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic2}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Market Place
            </h3>
            <p className="text-sm text-orange-500">JOS Don</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">4.9</span>
              <span className="text-gray-400">(675 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Figma
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                MongoDb
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$320 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%78</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="zoom-in-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic4}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Official
            </h3>
            <p className="text-sm text-orange-500">Merry Doms</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">3.9</span>
              <span className="text-gray-400">(1675 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                ALl
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                HP
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$1320 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%88</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="zoom-in-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic7}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Market{" "}
            </h3>
            <p className="text-sm text-orange-500">Limu Islam</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">5.9</span>
              <span className="text-gray-400">(975 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                New
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                PHP
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$170 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%48</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              {/* <!-- Left arrow --> */}
              <svg
                viewBox="0 0 24 24"
                class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                View Profile
              </span>

              <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className=" w-12/12 mx-auto  bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 mb-15 md:mb-20">
        <div className="w-11/12 mx-auto py-16 " ref={ref}>
          {/* Header Part */}
          <div className="text-center mb-12 px-4">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              className="px-4 py-1 text-sm rounded-full  text-orange-500 font-semibold"
            >
              Success Business Award
            </h2>
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              className="text-3xl md:text-4xl font-semibold   mt-4"
            >
              Our Success & Award
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-easing="ease-out-cubic"
              className="max-w-2xl text-md md:text-lg mx-auto mt-3 "
            >
              We take pride in our journey of connecting skilled freelancers
              with global clients. Through dedication, trust, and innovation,
              we’ve built a thriving marketplace where talent meets opportunity.
            </p>
          </div>

          {/* CountUp Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6  mx-auto">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all hover:bg-base-200  group">
              <div className="flex justify-center mb-4  ">
                <Briefcase
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && <CountUp start={0} end={12376} separator="," />}
              </h3>
              <p className="text-gray-500 mt-2">Live Jobs</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all group">
              <div className="flex justify-center mb-4 ">
                <Users
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && <CountUp start={0} end={89562} separator="," />}
              </h3>
              <p className="text-gray-500 mt-2">Jobs Candidate</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all group">
              <div className="flex justify-center mb-4">
                <FileText
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && <CountUp start={0} end={28166} separator="," />}
              </h3>
              <p className="text-gray-500 mt-2">Active Resume</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all group">
              <div className="flex justify-center mb-4 ">
                <Building2
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && <CountUp start={0} end={8966} separator="," />}
              </h3>
              <p className="text-gray-500 mt-2">Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Website About Sections */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 mb-15 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
            >
              About{" "}
              <span className="text-orange-500">Freelance Marketplace</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
              className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Connecting talented freelancers with businesses worldwide. Get
              your projects done faster, smarter, and with guaranteed quality.
            </p>
          </motion.div>

          <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image with floating animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.img
                src={upone}
                alt="Freelancers working together"
                className="rounded-2xl shadow-2xl w-full object-cover border border-base-300"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">100K+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </motion.div>

            {/* Right: Content with staggered animations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                <span className="text-orange-500"> Why Choose </span> Our
                Platform?
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We bridge the gap between skilled freelancers and businesses
                looking for top-tier talent. Whether you're a developer,
                designer, marketer, or writer — find your next opportunity here.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: "🚀",
                    title: "Fast Hiring",
                    desc: "Post jobs & get responses in hours",
                  },
                  {
                    icon: "🔒",
                    title: "Secure Payments",
                    desc: "Escrow protection until job done",
                  },
                  {
                    icon: "⭐",
                    title: "Verified Talent",
                    desc: "Only skilled & reviewed freelancers",
                  },
                  {
                    icon: "💬",
                    title: "24/7 Support",
                    desc: "We're always here to help",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* CTA Button - Same style as Home page */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Start Hiring Today
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto ">
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
          className="text-3xl md:text-4xl font-semibold text-center opacity-0"
        >
          Trusted by the world’s best Company
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
          className="text-md md:text-lg text-center mt-2 mb-12"
        >
          Building lasting partnerships through quality, trust, and innovation
        </p>

        <Marquee className="">
          <div className="flex items-center gap-x-25 mt-15">
            <img src={company} alt="Company 1" className="h-8 object-contain" />
            <img
              src={company2}
              alt="Company 2"
              className="h-8 dark:text-white object-contain"
            />
            <img
              src={company3}
              alt="Company 3"
              className="h-8 dark:text-white object-contain"
            />
            <img
              src={company4}
              alt="Company 3"
              className="h-8 dark:text-white object-contain"
            />
            <img
              src={company5}
              alt="Company 3"
              className="h-8 dark:text-white object-contain"
            />
            <img
              src={company6}
              alt="Company 3"
              className="h-8 dark:text-white object-contain"
            />
            <img src={company} alt="Company 1" className="h-8 object-contain" />
            <img
              src={company2}
              alt="Company 2"
              className="h-8 dark:text-white object-contain"
            />
            <img
              src={company3}
              alt="Company 3"
              className="h-8 dark:text-white object-contain"
            />
            <img
              src={company4}
              alt="Company 3"
              className="h-8 dark:text-white object-contain"
            />
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Home;
