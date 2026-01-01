import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="flex flex-col items-center space-y-8">
        {/* Simple Dual-Ring Spinner with Thicker Borders */}
        <div className="relative w-20 h-20">
          {/* Outer ring - blue */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-200 border-t-blue-600 animate-spin"></div>
          {/* Inner ring - orange, spinning opposite direction */}
          <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-500 animate-spin-reverse"></div>
        </div>

        {/* Clean Loading Text with Bouncing Dots */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-800">Loading</h3>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-300"></span>
          </div>
          <p className="text-sm text-gray-500">Please wait a moment...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
