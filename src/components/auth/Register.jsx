import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [show, setShow] = useState(true);
  const { signUpUser, updeatUserInfo, googleLogin } = useContext(AuthContext);
  const [passErr, setPassErr] = useState("");
  const pageNaviget = useNavigate();

  const handelSubmite = (e) => {
    e.preventDefault();
    console.log("Submite ");
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoUrl.value;
    console.log(photoURL);

    const data = {
      displayName,
      photoURL,
    };
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPassErr(
        "Minimum 6 characters with at least 1 uppercase (A-Z) & 1 lowercase (a-z) letter"
      );
      return;
    }

    // chack pasword validitions
    setPassErr(" ");
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        updeatUserInfo(data).then(() => {
          toast.success("Account Signup Successfully");
          setPassErr(true);
          pageNaviget("/");
        });
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(err.code);
      });
  };

  const googleRegister = () => {
    googleLogin()
      .then((result) => {
        console.log("Google Login", result.user);
        toast.success("Account Signup Successfully");
        pageNaviget("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="min-h-screen bg-[url('/background2.png')] bg-cover bg-center0 flex items-center justify-center  p-4">
      <form
        onSubmit={handelSubmite}
        className="bg-white rounded-lg shadow-lg  border border-base-300 p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register Now
        </h2>

        {/* Name */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </label>

        {/* Password */}
        <div className=" relative">
          <label className="block mb-2">
            <span className="text-gray-700 font-semibold">Password</span>
            <input
              type={show ? "password" : "text"}
              name="password"
              placeholder="Enter password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </label>
          <div onClick={() => setShow(!show)}>
            {show ? (
              <IoMdEyeOff className="absolute right-3.5 z-2 top-10.5 " />
            ) : (
              <FaEye className="absolute right-3.5 z-2 top-10.5 " />
            )}
          </div>

          {passErr && (
            <p className="text-xs font-semibold text-red-600 mb-4">
              {" "}
              {passErr}{" "}
            </p>
          )}
        </div>
        {/* Photo URL */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Photo URL</span>
          <input
            type="url"
            name="photoUrl"
            placeholder="https://example.com/photo.jpg"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </label>

        {/* Checkbox */}
        <label className="flex items-center mb-6">
          <input
            type="checkbox"
            name="terms"
            className="h-4 w-4 text-pink-500 focus:ring-pink-400 border-gray-300 rounded"
            required
          />
          <span className="ml-2 text-gray-700 text-sm">
            I agree to the{" "}
            <a href="#" className="text-orange-500 hover:underline">
              terms and conditions
            </a>
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full relative py-2 px-8 border-2 border-orange-500 font-semibold text-[16px] text-white rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-gradient-to-r from-orange-500 to-amber-400 bg-[length:200%_200%] bg-[position:left_center] hover:bg-[position:right_center] shadow-md hover:shadow-xl"
        >
          <span className="relative z-10">Register</span>
        </button>

        {/* Or separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button
          onClick={googleRegister}
          type="button"
          className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Continue with Google
        </button>
        <p className="text-center mt-2 font-medium">
          Already have an account ?
          <Link to="/login" className="text-orange-500 underline">
            Log in Now
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
