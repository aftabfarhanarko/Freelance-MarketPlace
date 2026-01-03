import React, { useContext, useState } from "react";
import { FaEye, FaCopy } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import usePrivateApi from "../../Hooks/PrivateAPI";
import { useAxiosData } from "../../Hooks/DataFetch";

const Login = () => {
  const [show, setShow] = useState(true);
  const { emailpasswordLoginUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axioxSechore = usePrivateApi();
  const nextAPi = useAxiosData();

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    emailpasswordLoginUser(email, password)
      .then(async (res) => {
        toast.success("Login Successful!");
        // console.log("User", res.user);
        const userData = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photoURL: res?.user?.photoURL,
          role: "user",
          password: password,
          providerId: "Types",
          createdAt: new Date().toISOString(),
        };
        nextAPi.post("users", userData).then((ress) => {
          // console.log(ress.data.message, userData);
          if (ress?.data?.insertedId) {
            toast.success(ress.data.message);
          }
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.code || "Login failed");
      });
  };

  const handleGoogle = () => {
    toast.loading("Logging in with Google...");
    googleLogin()
      .then((res) => {
        // toast.dismiss(); // remove loading
        toast.success("Login Successful!");
        console.log("Google login res:", res);
        const userData = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photoURL: res?.user?.photoURL,
          role: "user",
          // password: password,
          providerId: res?.user?.providerId,
          createdAt: new Date().toISOString(),
        };
        nextAPi.post("users", userData).then((ress) => {
          console.log(ress.data.message, userData);
          if (ress?.data?.insertedId) {
            toast.success(ress.data.message);
          }
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        // toast.dismiss();
        console.error("Google login error:", err);
        toast.error(err.code || "Google login failed");
      });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center pt-10 justify-center bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-orange-950 dark:to-amber-950 px-4 transition-all duration-1000">
      {/* Subtle orange decorative overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="backdrop-blur-2xl bg-white/80 dark:bg-black/60 border border-white/20 dark:border-white/10 rounded-xl shadow-sm  md:shadow-xl p-10 transition-all duration-700">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
              Sign in to continue
            </p>
          </div>

          {/* Admin Credentials */}
          <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <h3 className="text-sm font-bold text-orange-800 dark:text-orange-300 mb-3 uppercase tracking-wider">
              Admin Credentials
            </h3>
            <div className="space-y-3">
              {/* Admin Email */}
              <div className="flex items-center justify-between bg-white dark:bg-black/40 p-3 rounded-lg border border-orange-100 dark:border-orange-800/30">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email</span>
                  <span className="text-sm font-mono text-gray-800 dark:text-gray-200">adminemail@example.com</span>
                </div>
                <button
                  onClick={() => copyToClipboard("adminemail@example.com", "Admin Email")}
                  className="p-2 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-full transition-colors"
                  title="Copy Email"
                >
                  <FaCopy size={16} />
                </button>
              </div>

              {/* Admin Password */}
              <div className="flex items-center justify-between bg-white dark:bg-black/40 p-3 rounded-lg border border-orange-100 dark:border-orange-800/30">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Password</span>
                  <span className="text-sm font-mono text-gray-800 dark:text-gray-200">Admin@@123</span>
                </div>
                <button
                  onClick={() => copyToClipboard("Admin@@123", "Admin Password")}
                  className="p-2 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/40 rounded-full transition-colors"
                  title="Copy Password"
                >
                  <FaCopy size={16} />
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-white/10 border border-gray-300 dark:border-white/20 
                         focus:border-orange-500 dark:focus:border-amber-500 focus:outline-none focus:ring-4 
                         focus:ring-orange-500/20 dark:focus:ring-amber-500/20 transition-all duration-300 
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Password
              </label>
              <input
                type={show ? "password" : "text"}
                name="password"
                placeholder="••••••••••"
                required
                className="w-full px-5 py-4 pr-14 rounded-2xl bg-white/50 dark:bg-white/10 border border-gray-300 dark:border-white/20 
                         focus:border-orange-500 dark:focus:border-amber-500 focus:outline-none focus:ring-4 
                         focus:ring-orange-500/20 dark:focus:ring-amber-500/20 transition-all duration-300 
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-11 text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-amber-500 transition"
              >
                {show ? <IoMdEyeOff size={22} /> : <FaEye size={22} />}
              </button>
            </div>

            {/* Terms */}
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                required
                className="w-5 h-5 rounded border-gray-300 dark:border-white/30 text-orange-600 dark:text-amber-500 
                         focus:ring-orange-500 dark:focus:ring-amber-500 focus:ring-offset-0"
              />
              <span className="ml-3 text-gray-600 dark:text-gray-300">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-orange-600 dark:text-amber-400 hover:underline font-medium"
                >
                  Terms & Conditions
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 hover:scale-105 duration-600 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-orange-600 to-amber-600 
                       hover:from-orange-700 hover:to-amber-700 transform hover:scale-[1.02] shadow-xl 
                       hover:shadow-orange-500/30 dark:hover:shadow-amber-500/30 transition-all duration-500 
                       relative overflow-hidden group"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-300 dark:bg-white/20"></div>
            <span className="px-4 text-sm text-gray-500 dark:text-gray-400">
              or
            </span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-white/20"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-4 py-3 hover:scale-105 duration-600 rounded-2xl border border-gray-300 dark:border-white/20 
                     bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 backdrop-blur-sm 
                     transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.4H272v95.6h146.9c-6.4 34.8-26 64.3-55.9 84.1v69.8h90.1c52.7-48.5 83.4-120.1 83.4-199.1z"
                fill="#4285F4"
              />
              <path
                d="M272 544.3c72.5 0 133.5-23.9 178-64.9l-90.1-69.8c-25 16.8-57.1 26.7-87.9 26.7-67.5 0-124.9-45.6-145.5-107.1H34.9v67.3C79.1 488.3 168.6 544.3 272 544.3z"
                fill="#34A853"
              />
              <path
                d="M126.5 323.2c-10.6-31.3-10.6-65.4 0-96.7V159.2H34.9c-39.3 76.3-39.3 167.6 0 243.9l91.6-69.9z"
                fill="#FBBC05"
              />
              <path
                d="M272 107.7c37.1 0 70.5 12.8 96.8 33.9l72.7-72.7C406.2 24.7 348.5 0 272 0 168.6 0 79.1 56 34.9 140.4l91.6 67.3c20.6-61.5 78-107.7 145.5-107.7z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Continue with Google
            </span>
          </button>

          {/* Sign Up Link */}
          <p className="text-center mt-8 text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-orange-600 dark:text-amber-400 hover:underline transition"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
