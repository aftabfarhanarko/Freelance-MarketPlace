import React, { useEffect, useState } from "react";
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
import {
  Briefcase,
  Users,
  FileText,
  Building2,
  CheckCircle,
  Search,
  DollarSign,
  Star,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Code,
  PenTool,
  Monitor,
  Smartphone,
  Globe,
  Database,
  Clock,
  MapPin,
  Check,
  Download,
  Shield,
  Zap,
  Mail,
  Send,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

      <section
        id="New Sections add Prowerfull and reletev features"
        className="w-11/12 max-w-7xl mx-auto mt-16 md:mt-24 mb-16 md:mb-24 space-y-24"
      >
       

        {/* 2. Success Metrics (Stats)
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 dark:divide-gray-700">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <CountUp end={890} duration={2.5} />M
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Total Freelancers
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <CountUp end={750} duration={2.5} />
              k+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Positive Reviews</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <CountUp end={100} duration={2.5} />M
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Orders Received</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              <CountUp end={336} duration={2.5} />M
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Projects Completed
            </p>
          </div>
        </div> */}

        {/* 3. Why Choose Us (Value Prop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-orange-50 dark:bg-gray-800 p-8 rounded-3xl transition-transform hover:-translate-y-2 duration-300 border border-orange-100 dark:border-gray-700"
            data-aos="fade-up"
          >
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Proof of Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Check any pro’s work samples, client reviews, and identity
              verification.
            </p>
          </div>
          <div
            className="bg-amber-50 dark:bg-gray-800 p-8 rounded-3xl transition-transform hover:-translate-y-2 duration-300 border border-amber-100 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 mb-6">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              No Cost Until You Hire
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Interview potential fits for your job, negotiate rates, and only
              pay for work you approve.
            </p>
          </div>
          <div
            className="bg-orange-50 dark:bg-gray-800 p-8 rounded-3xl transition-transform hover:-translate-y-2 duration-300 border border-orange-100 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 mb-6">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Safe & Secure
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Focus on your work knowing we help protect your data and privacy.
              We’re here with 24/7 support.
            </p>
          </div>
        </div>
      </section>

      <section className=" w-11/12 max-w-7xl mx-auto mt-16 md:mt-24 mb-16 md:mb-24">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            className="text-3xl md:text-4xl font-bold text-center opacity-0 text-gray-900 dark:text-white"
          >
            Need something done?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            data-aos-easing="ease-out-cubic"
            className="text-base md:text-lg text-center mt-3 mb-12 text-gray-600 dark:text-gray-300"
          >
            Most viewed and all-time top-selling services
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-8 shadow-sm rounded-2xl flex flex-col text-center 
transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full"
            >
              <div className="mx-auto w-14 h-14 text-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-3xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <HiOutlineUsers className="w-7 h-7" />
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-orange-500">
                Post a job
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                Write your project details clearly and attract the right talent
                instantly.
              </p>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-8 shadow-sm rounded-2xl flex flex-col text-center 
transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full"
            >
              <div className="mx-auto w-14 h-14 text-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-3xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <FaRegHandshake className="w-7 h-7" />
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-orange-500">
                Choose freelancers
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                Browse verified profiles, compare experience, and select the
                best fit for your work.
              </p>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-8 shadow-sm rounded-2xl flex flex-col text-center 
transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full"
            >
              <div className="mx-auto w-14 h-14 text-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-3xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <HiOutlineCreditCard className="w-7 h-7" />
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-orange-500">
                Pay safely
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                All payments are protected with secure escrow, released only
                when you're satisfied.
              </p>
            </div>

            {/* Card 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-8 shadow-sm rounded-2xl flex flex-col text-center 
transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full"
            >
              <div className="mx-auto w-14 h-14 text-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-3xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <HiOutlineSupport className="w-7 h-7" />
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-orange-500">
                We’re here to help
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                Our support team is available anytime to guide you, answer
                questions, and assist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fiver types"></section>

      <section className="w-11/12 max-w-7xl mx-auto mb-16 md:mb-24">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Our Blog
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
          className="text-base md:text-lg text-center mt-3 mb-12 text-gray-600 dark:text-gray-300"
        >
          See how you can up your career game
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Card 1 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{
              y: -12,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-orange-200"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>

            {/* Image with Parallax Zoom */}
            <motion.div
              className="overflow-hidden h-52 w-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog1}
                alt="Instagram Marketing"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="p-5 flex flex-col h-[calc(100%-13rem)]">
              <motion.details
                className="collapse bg-transparent border-none"
                initial={false}
              >
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none min-h-0"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h2
                    className="text-sm font-bold text-orange-500 mb-2 uppercase tracking-wide"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    December 2, 2022
                  </motion.h2>
                  <motion.p
                    className="text-gray-900 dark:text-white text-lg font-bold hover:text-orange-600 transition-colors line-clamp-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Front becomes an official Instagram Marketing Partner
                  </motion.p>
                </motion.summary>

                <motion.div
                  className="collapse-content text-sm text-gray-600 dark:text-gray-300 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700"
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
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-orange-200"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>

            <motion.div
              className="overflow-hidden h-52 w-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog2}
                alt="Work from Home"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="p-5 flex flex-col h-[calc(100%-13rem)]">
              <motion.details className="collapse bg-transparent border-none">
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none min-h-0"
                  whileHover={{ x: 4 }}
                >
                  <motion.h2 className="text-sm font-bold text-orange-500 mb-2 uppercase tracking-wide">
                    June 14, 2024
                  </motion.h2>
                  <motion.p className="text-gray-900 dark:text-white text-lg font-bold hover:text-orange-600 transition-colors line-clamp-2">
                    Start an online business and work from home
                  </motion.p>
                </motion.summary>
                <motion.div className="collapse-content text-sm text-gray-600 dark:text-gray-300 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
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
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-orange-200"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>

            <motion.div
              className="overflow-hidden h-52 w-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog3}
                alt="Online Business Guide"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="p-5 flex flex-col h-[calc(100%-13rem)]">
              <motion.details className="collapse bg-transparent border-none">
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none min-h-0"
                  whileHover={{ x: 4 }}
                >
                  <motion.h2 className="text-sm font-bold text-orange-500 mb-2 uppercase tracking-wide">
                    December 29, 2023
                  </motion.h2>
                  <motion.p className="text-gray-900 dark:text-white text-lg font-bold hover:text-orange-600 transition-colors line-clamp-2">
                    Start an online business and work from home right now
                  </motion.p>
                </motion.summary>
                <motion.div className="collapse-content text-sm text-gray-600 dark:text-gray-300 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
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
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-orange-200"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>

            <motion.div
              className="overflow-hidden h-52 w-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={blog4}
                alt="Virtual Assistant"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="p-5 flex flex-col h-[calc(100%-13rem)]">
              <motion.details className="collapse bg-transparent border-none">
                <motion.summary
                  className="collapse-title p-0 font-semibold cursor-pointer list-none min-h-0"
                  whileHover={{ x: 4 }}
                >
                  <motion.h2 className="text-sm font-bold text-orange-500 mb-2 uppercase tracking-wide">
                    January 5, 2024
                  </motion.h2>
                  <motion.p className="text-gray-900 dark:text-white text-lg font-bold hover:text-orange-600 transition-colors line-clamp-2">
                    How to become a Virtual Assistant and earn money
                  </motion.p>
                </motion.summary>
                <motion.div className="collapse-content text-sm text-gray-600 dark:text-gray-300 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <p>
                    Virtual assistants are in high demand. Learn the skills you
                    need to start your career and find your first clients today.
                  </p>
                </motion.div>
              </motion.details>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* res */}
      <section
        id="job-find-sections"
        className="w-11/12 max-w-7xl mx-auto mb-16 md:mb-24"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Top Rated Performer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
          className="text-base md:text-lg text-center mt-3 mb-12 text-gray-600 dark:text-gray-300"
        >
          Meet the professionals behind every successful project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-full">
          {[
            {
              name: "Robert Fox",
              role: "Nursing Assistant",
              img: "https://i.pravatar.cc/150?img=32",
              rating: "4.9",
              reviews: "595",
              skills: ["Figma", "Sketch", "HTML5"],
              location: "London",
              rate: "$90 / hr",
              success: "98%",
              aos: "zoom-in",
            },
            {
              name: "Darrell Steward",
              role: "Product Designer",
              img: pic3,
              rating: "4.9",
              reviews: "2195",
              skills: ["React", "Sketch", "JS"],
              location: "London",
              rate: "$120 / hr",
              success: "98%",
              aos: "zoom-in-left",
            },
            {
              name: "Noah Collins",
              role: "Backend Developer",
              img: pic5,
              rating: "4.8",
              reviews: "495",
              skills: ["Go", "Docker", "C++"],
              location: "London",
              rate: "$320 / hr",
              success: "78%",
              aos: "zoom-in-up",
            },
            {
              name: "Isabella Hayes",
              role: "Data Scientist",
              img: pic6,
              rating: "4.9",
              reviews: "7195",
              skills: ["C#", "Python", "Java"],
              location: "London",
              rate: "$720 / hr",
              success: "98%",
              aos: "fade-up",
            },
            {
              name: "Korim Bangima",
              role: "Full Stack Dev",
              img: pic1,
              rating: "4.5",
              reviews: "295",
              skills: ["Figma", "SQL", "Node.js"],
              location: "London",
              rate: "$50 / hr",
              success: "58%",
              aos: "fade-down-right",
            },
            {
              name: "JOS Don",
              role: "UI/UX Designer",
              img: pic2,
              rating: "4.9",
              reviews: "675",
              skills: ["Figma", "C++", "MongoDB"],
              location: "London",
              rate: "$320 / hr",
              success: "78%",
              aos: "fade-up-right",
            },
            {
              name: "Merry Doms",
              role: "Project Manager",
              img: pic4,
              rating: "4.8",
              reviews: "1675",
              skills: ["Agile", "C++", "PHP"],
              location: "London",
              rate: "$1320 / hr",
              success: "88%",
              aos: "zoom-in-right",
            },
            {
              name: "Limu Islam",
              role: "Market Analyst",
              img: pic7,
              rating: "4.9",
              reviews: "975",
              skills: ["SEO", "C++", "PHP"],
              location: "London",
              rate: "$170 / hr",
              success: "48%",
              aos: "zoom-in-right",
            },
          ].map((performer, index) => (
            <div
              key={index}
              data-aos={performer.aos}
              className="mx-auto w-full max-w-[360px] bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="p-1 rounded-full border-2 border-gray-100 dark:border-gray-700 group-hover:border-orange-500 transition-colors duration-300">
                  <img
                    src={performer.img}
                    alt={performer.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <span className="absolute bottom-2 right-2 w-5 h-5 bg-orange-500 border-4 border-white dark:border-gray-800 rounded-full shadow-sm"></span>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300 text-center">
                {performer.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-3 text-center">
                {performer.role}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full mb-4">
                <span className="text-orange-500 text-sm">★</span>
                <span className="font-bold text-gray-900 dark:text-white text-sm">
                  {performer.rating}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({performer.reviews} reviews)
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
                {performer.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-semibold border border-transparent hover:border-orange-200 dark:hover:border-orange-900 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-3 w-full border-t border-gray-100 dark:border-gray-700 pt-4 mb-6">
                <div className="text-center px-2 border-r border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    {performer.location}
                  </p>
                </div>
                <div className="text-center px-2 border-r border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                    Rate
                  </p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    {performer.rate}
                  </p>
                </div>
                <div className="text-center px-2">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                    Success
                  </p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    {performer.success}
                  </p>
                </div>
              </div>

              {/* View Profile Button */}
              <button className="w-full py-3 rounded-xl font-bold text-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm hover:shadow-orange-500/30 flex items-center justify-center gap-2">
                View Profile{" "}
                <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className=" w-full  bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 mb-15 md:mb-20">
        <div className="w-11/12 max-w-7xl mx-auto py-16 " ref={ref}>
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
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 mb-10 md:mb-20">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
            >
              About{" "}
              <span className="text-orange-500">Freelance Marketplace</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Connecting talented freelancers with businesses worldwide. Get
              your projects done faster, smarter, and with guaranteed quality.
            </p>
          </motion.div>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
          >
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <motion.img
                src={upone}
                alt="Freelancers working together"
                className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg object-cover border border-base-300"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-lg text-center">
                <p className="text-lg sm:text-2xl font-bold">100K+</p>
                <p className="text-xs sm:text-sm">Happy Clients</p>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-5 sm:space-y-6 text-center md:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                <span className="text-orange-500">Why Choose</span> Our
                Platform?
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                We bridge the gap between skilled freelancers and businesses
                looking for top-tier talent. Whether you're a developer,
                designer, marketer, or writer — find your next opportunity here.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
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
                    className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="pt-3"
              >
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Start Hiring Today
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It <span className="text-orange-500">Works</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get your work done in 4 easy steps. Safe, secure, and fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-orange-500" />,
                title: "Create Account",
                desc: "Sign up for free, set up your profile, and browse opportunities.",
              },
              {
                icon: <Search className="w-10 h-10 text-orange-500" />,
                title: "Search Jobs",
                desc: "Filter by skills, price, and location to find the perfect match.",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-orange-500" />,
                title: "Hire or Work",
                desc: "Clients hire the best talent. Freelancers start working.",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-orange-500" />,
                title: "Safe Payment",
                desc: "Payments are held in escrow until the job is approved.",
              },
            ].map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300 dark:border-gray-600 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Membership / Pricing Plans */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent{" "}
              <span className="text-orange-500">Pricing</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the plan that fits your needs. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 relative"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Basic
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                For casual freelancers
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  Free
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "5 Bids per month",
                  "Basic Profile",
                  "Standard Support",
                  "5% Service Fee",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check className="w-5 h-5 text-orange-500" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div
              className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-orange-500 transform scale-105 relative z-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-gray-400 text-sm mb-6">
                For serious professionals
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "50 Bids per month",
                  "Verified Badge",
                  "Priority Support",
                  "2% Service Fee",
                  "Highlighted Proposals",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <Check className="w-5 h-5 text-orange-500" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all shadow-lg shadow-orange-500/30">
                Upgrade Now
              </button>
            </div>

            {/* Enterprise Plan */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Enterprise
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                For agencies & teams
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  $99
                </span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited Bids",
                  "Team Management",
                  "Dedicated Manager",
                  "0% Service Fee",
                  "Custom Contracts",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check className="w-5 h-5 text-orange-500" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular <span className="text-orange-500">Categories</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Browse top talent by category
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Development", icon: <Code />, count: "12k+ Jobs" },
              { name: "Design", icon: <PenTool />, count: "8k+ Jobs" },
              { name: "Marketing", icon: <Monitor />, count: "5k+ Jobs" },
              { name: "Writing", icon: <FileText />, count: "3k+ Jobs" },
              { name: "Mobile Apps", icon: <Smartphone />, count: "4k+ Jobs" },
              { name: "SEO", icon: <Globe />, count: "6k+ Jobs" },
              { name: "Data Entry", icon: <Database />, count: "2k+ Jobs" },
              { name: "Business", icon: <Briefcase />, count: "7k+ Jobs" },
            ].map((cat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all cursor-pointer group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Jobs Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            data-aos="fade-up"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Featured <span className="text-orange-500">Jobs</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Latest opportunities from top companies
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              View All Jobs <HiOutlineArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Senior UI/UX Designer",
                company: "TechFlow",
                type: "Remote",
                salary: "$80k - $120k",
                time: "2h ago",
                tags: ["Figma", "React", "Design System"],
              },
              {
                title: "Full Stack Developer",
                company: "StartupX",
                type: "Remote",
                salary: "$100k - $150k",
                time: "5h ago",
                tags: ["Node.js", "React", "MongoDB"],
              },
              {
                title: "Marketing Manager",
                company: "Growth.io",
                type: "Hybrid",
                salary: "$70k - $90k",
                time: "1d ago",
                tags: ["SEO", "Content", "Analytics"],
              },
              {
                title: "Mobile App Developer",
                company: "Appify",
                type: "On-site",
                salary: "$90k - $130k",
                time: "1d ago",
                tags: ["Flutter", "iOS", "Android"],
              },
              {
                title: "DevOps Engineer",
                company: "CloudScale",
                type: "Remote",
                salary: "$120k - $160k",
                time: "2d ago",
                tags: ["AWS", "Docker", "Kubernetes"],
              },
              {
                title: "Content Writer",
                company: "MediaBuzz",
                type: "Remote",
                salary: "$40k - $60k",
                time: "3d ago",
                tags: ["Copywriting", "SEO", "Blog"],
              },
            ].map((job, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-300  shadow-sm   dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-500 font-bold text-xl">
                    {job.company[0]}
                  </div>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {job.company}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 px-2 py-1 rounded border border-gray-100 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {job.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
              View All Jobs <HiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Users <span className="text-orange-500">Say</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Trusted by thousands of freelancers and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Product Manager",
                text: "I found an amazing developer in just 24 hours. The quality of work was outstanding and the process was so smooth.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Startup Founder",
                text: "This platform saved my business. I scaled my team from 2 to 10 in a month without any overhead. Highly recommended!",
                rating: 5,
              },
              {
                name: "Emma Wilson",
                role: "Freelance Designer",
                text: "The best platform for freelancers. Guaranteed payments and great clients. I've doubled my income in 6 months.",
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-50 dark:bg-gray-800 p-8 border border-base-300 shadow rounded-2xl relative"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Top Rated Freelancers Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Top Rated <span className="text-orange-500">Talent</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Work with the best freelancers in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Product Designer",
                rate: "$65/hr",
                rating: 4.9,
                img: "https://i.ibb.co.com/HfKz1QK0/image.png",
              },
              {
                name: "Sarah Connor",
                role: "React Developer",
                rate: "$80/hr",
                rating: 5.0,
                img: "https://i.ibb.co.com/Mk5bvwKv/image.png",
              },
              {
                name: "John Doe",
                role: "SEO Specialist",
                rate: "$50/hr",
                rating: 4.8,
                img: "https://i.ibb.co.com/QZZvhNf/image.png",
              },
              {
                name: "Emily Blunt",
                role: "Content Writer",
                rate: "$45/hr",
                rating: 4.9,
                img: "https://i.ibb.co.com/R49nK4FZ/image.png",
              },
            ].map((freelancer, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-orange-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity transform scale-110"></div>
                  <img
                    src={freelancer.img}
                    alt={freelancer.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white dark:border-gray-700 shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-1 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-orange-500 fill-current" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {freelancer.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {freelancer.role}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-bold text-gray-900 dark:text-white">
                    {freelancer.rating}
                  </span>
                  <span className="text-gray-400 text-sm">
                    ({Math.floor(Math.random() * 50) + 10} jobs)
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                  <span className="font-bold text-gray-900 dark:text-white">
                    {freelancer.rate}
                  </span>
                  <button className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Trending Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col md:flex-row justify-between items-end mb-12"
            data-aos="fade-up"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Trending <span className="text-orange-500">Skills</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Skills that are in high demand right now
              </p>
            </div>
            <a
              href="#"
              className="text-orange-500 font-semibold hover:underline mt-4 md:mt-0"
            >
              View all skills
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { name: "Generative AI", growth: "+120%" },
              { name: "React Native", growth: "+85%" },
              { name: "Video Editing", growth: "+60%" },
              { name: "SEO Writing", growth: "+45%" },
              { name: "Data Analysis", growth: "+90%" },
              { name: "Shopify", growth: "+55%" },
              { name: "Figma", growth: "+70%" },
              { name: "Python", growth: "+65%" },
              { name: "3D Modeling", growth: "+40%" },
              { name: "Blockchain", growth: "+30%" },
            ].map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-all cursor-pointer"
              >
                <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-orange-500 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">
                  {skill.growth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Section */}
      <section className="py-20">
        <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-10 md:p-16 text-center md:text-left"
            data-aos="zoom-in"
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-amber-300 opacity-20 rounded-full blur-2xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay ahead of the curve
                </h2>
                <p className="text-orange-100 text-lg mb-8">
                  Get the latest freelance tips, industry trends, and job
                  opportunities delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-lg"
                  />
                  <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                    Subscribe
                  </button>
                </div>
                <p className="text-orange-100 text-sm mt-4">
                  We care about your data in our{" "}
                  <a href="#" className="underline hover:text-white">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <div className="hidden md:flex justify-center">
                <Mail className="w-48 h-48 text-white opacity-90 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" max-w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2">
        {/* 5. FAQ Section */}
        <section className="py-20  ">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked{" "}
                <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How does the payment protection work?",
                  a: "We hold funds in escrow until the work is completed and approved by the client. This ensures safety for both parties.",
                },
                {
                  q: "Is there a fee for freelancers?",
                  a: "We charge a small service fee on completed projects. Joining and browsing jobs is completely free.",
                },
                {
                  q: "How do I verify my profile?",
                  a: "You can verify your profile by submitting ID documents and linking your professional social media accounts.",
                },
                {
                  q: "Can I cancel a project?",
                  a: "Yes, projects can be cancelled by mutual agreement or through our dispute resolution center if issues arise.",
                },
                {
                  q: "How do I get paid?",
                  a: "We support various withdrawal methods including PayPal, Bank Transfer, and Payoneer.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">
                      {item.q}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="text-orange-500" />
                    ) : (
                      <ChevronDown className="text-gray-400" />
                    )}
                  </button>
                  <div
                    className={`px-6 pb-6 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                      openFaq === index ? "block" : "hidden"
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section className="py-20  overflow-hidden">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-orange-500 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

              <div
                className="w-full md:w-1/2 text-white relative z-10 mb-10 md:mb-0"
                data-aos="fade-right"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get the work done
                  <br />
                  <span className="text-gray-100">from anywhere</span>
                </h2>
                <p className="text-lg text-orange-100 mb-8 max-w-md">
                  Download our mobile app to browse jobs, chat with clients, and
                  get paid on the go. Available for iOS and Android.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <div className="text-2xl">
                      <Smartphone />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500 font-medium">
                        Download on the
                      </div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </button>

                  <button className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-700">
                    <div className="text-2xl">
                      <Smartphone />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-400 font-medium">
                        GET IT ON
                      </div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>

              <div
                className="w-full md:w-1/2 relative z-10 flex justify-center md:justify-end"
                data-aos="fade-left"
              >
                <div className="relative w-64 md:w-80">
                  <div className="absolute inset-0 bg-white opacity-20 blur-3xl rounded-full"></div>
                  <div className="relative bg-gray-900 rounded-[2.5rem] border-8 border-gray-800 shadow-2xl overflow-hidden h-[500px] w-full mx-auto">
                    {/* Screen Content Mockup */}
                    <div className="bg-white dark:bg-gray-800 h-full w-full p-4 overflow-hidden">
                      <div className="flex justify-between items-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="w-20 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-32 rounded-xl bg-orange-100 dark:bg-orange-900/20 w-full mb-4"></div>
                        <div className="h-20 rounded-xl bg-gray-100 dark:bg-gray-700 w-full"></div>
                        <div className="h-20 rounded-xl bg-gray-100 dark:bg-gray-700 w-full"></div>
                        <div className="h-20 rounded-xl bg-gray-100 dark:bg-gray-700 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className=" w-11/12 max-w-7xl mx-auto ">
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
      </section>
      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Trusted by 10,000+ Companies Worldwide
          </p>
        </div>
        <Marquee
          className=""
          gradient={true}
          gradientColor={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? [31, 41, 55]
              : [249, 250, 251]
          }
        >
          <div className="flex items-center gap-x-16 mt-4 pr-16">
            {[company, company2, company3, company4, company5, company6].map(
              (logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="h-8 md:h-10 object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                />
              )
            )}
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Home;
