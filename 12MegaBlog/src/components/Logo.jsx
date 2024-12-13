/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center bg-blue-500 rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          className="text-white text-base font-bold"
          style={{ width: width }}
        >
          BlogHub
        </div>
      </div>
    </div>
  );
}

export default Logo;
