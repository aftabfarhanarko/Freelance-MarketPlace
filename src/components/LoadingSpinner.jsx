import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

const LoadingSpinner = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/SandyLoading.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie load error:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-64 h-64 md:w-80 md:h-80">
        {animationData ? (
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        ) : (
          <div className="h-16 w-16 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin" />
        )}
      </div>
      <p className="mt-6 text-lg font-semibold text-orange-600 dark:text-orange-400 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
