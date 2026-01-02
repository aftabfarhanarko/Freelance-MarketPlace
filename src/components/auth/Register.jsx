import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { useAxiosData } from "../../Hooks/DataFetch";
import usePrivateApi from "../../Hooks/PrivateAPI";

const Register = () => {
  const [show, setShow] = useState(true);
  const [passErr, setPassErr] = useState("");
  const { signUpUser, updateUserInfo, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const axioxSechore = usePrivateApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const photoURL = e.target.photoUrl.value.trim() || null;

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPassErr(
        "Minimum 6 characters, 1 uppercase & 1 lowercase letter required"
      );
      return;
    }

    setPassErr("");

    signUpUser(email, password)
      .then((result) => {
        return updateUserInfo({ displayName, photoURL });
      })
      .then(async (res) => {
        // toast.success("Account created successfully!");
        // navigate("/");
        console.log(res);
        const userData = {
          name: displayName,
          email: email,
          photoURL: photoURL,
          providerId: "Types",
          password: password,
          createdAt: new Date().toISOString(),
        };
        console.log(userData);
        const myData  = await axioxSechore.post("users", userData);
        console.log(myData.data);
        
      })
      .catch((err) => {
        toast.error(err.code || "Registration failed");
      });
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then(() => {
        toast.success("Signed up with Google!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code || "Google signup failed");
      });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-orange-950 dark:to-amber-950 px-4 transition-all duration-1000">
      {/* Subtle orange glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full  max-w-2xl py-15">
        <div className="backdrop-blur-2xl bg-white/80 dark:bg-black/60 border border-white/20 dark:border-white/10 rounded-xl shadow-sm  md:shadow-xl p-10 transition-all duration-700">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
              Join us today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-white/10 border border-gray-300 dark:border-white/20 
                         focus:border-orange-500 dark:focus:border-amber-500 focus:outline-none focus:ring-4 
                         focus:ring-orange-500/20 dark:focus:ring-amber-500/20 transition-all duration-300 
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

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

            {/* Password Error */}
            {passErr && (
              <p className="text-sm font-medium text-red-600 dark:text-red-400 -mt-3">
                {passErr}
              </p>
            )}

            {/* Photo URL (Optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Photo URL{" "}
                <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="https://example.com/avatar.jpg"
                className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-white/10 border border-gray-300 dark:border-white/20 
                         focus:border-orange-500 dark:focus:border-amber-500 focus:outline-none focus:ring-4 
                         focus:ring-orange-500/20 dark:focus:ring-amber-500/20 transition-all duration-300 
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
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
              className="w-full py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-orange-600 to-amber-600 
                       hover:from-orange-700 hover:to-amber-700 transform hover:scale-[1.02] shadow-xl 
                       hover:shadow-orange-500/30 dark:hover:shadow-amber-500/30 transition-all duration-500 
                       relative overflow-hidden group"
            >
              <span className="relative z-10">Create Account</span>
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
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-4 py-4 rounded-2xl border border-gray-300 dark:border-white/20 
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

          {/* Login Link */}
          <p className="text-center mt-8 text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-orange-600 dark:text-amber-400 hover:underline transition"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
