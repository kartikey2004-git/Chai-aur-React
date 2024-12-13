/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-4 py-2 rounded-md bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:bg-white focus:border-blue-500 border border-gray-300 w-full transition duration-200 ease-in-out ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
