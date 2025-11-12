import React from "react";
import logo from "../assets/oooo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import x from "../assets/twitter2.png";
import toast from "react-hot-toast";
import { Link } from "react-router";
const Footer = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully Subscribe Now");
    e.target.reset();
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="w-11/12 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400 leading-relaxed text-sm hover:text-orange-500">
              Discover a world where talent meets opportunity. Our freelance
              marketplace connects skilled professionals with clients seeking
              quality work and creative solutions. Empowering freelancers to
              grow, earn, and shine globally.
            </p>
            <img className="w-34" src={logo}></img>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  All Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Add Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Success
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Jobs Plisement
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/alljob"
                    className="hover:text-orange-500 transition"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alljob"
                    className="hover:text-orange-500 transition"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alljob"
                    className="hover:text-orange-500 transition"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alljob"
                    className="hover:text-orange-500 transition"
                  >
                    Content Writing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alljob"
                    className="hover:text-orange-500 transition"
                  >
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alljob"
                    className="hover:text-orange-500 transition"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <img
                  className="w-5 h-5 hover:text-white rounded-full"
                  src={x}
                ></img>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <form
              onSubmit={handelSubmit}
              className="join mt-6 w-full max-w-md mx-auto"
            >
              {/* Input */}
              <input
                type="text"
                placeholder="username@site.com"
                className="input join-item w-full 
               input-bordered 
               bg-white 
               text-gray-800 
               placeholder-gray-500 
               focus:outline-none 
               focus:ring-2 focus:ring-orange-500 
               focus:border-orange-500
               rounded-l-xl 
               border-r-0"
              />

              {/* Button */}
              <button
                className="
    btn join-item 
    px-3 
    bg-gradient-to-r from-orange-500 to-orange-600 
    text-white font-semibold 
    border-none 
    rounded-r-xl 
    shadow-lg 
    hover:from-orange-600 hover:to-orange-700 
    hover:shadow-xl 
    hover:scale-105 
    active:scale-95 
    transition-all duration-300 ease-out
  "
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 hover:text-white pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
