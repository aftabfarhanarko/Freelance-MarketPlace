import React from "react";

const LodingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-xs">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-4 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-4 border-t-orange-500 rounded-full animate-spin animation-delay-200"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-4 border-t-orange-500 rounded-full animate-spin animation-delay-400"></div>
        </div>

        {/* Loading Text with Dots Animation */}
        <div className="flex items-center space-x-1">
          <span className="text-lg font-medium text-gray-700">Loading</span>
          <span className="flex">
            <span className="animate-bounce delay-100">.</span>
            <span className="animate-bounce delay-200">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        </div>

        {/* Optional: Subtle tagline */}
        <p className="text-sm text-gray-500">
          Please wait while we prepare everything
        </p>
      </div>
    </div>
  );
};

export default LodingSpinner;
