/* eslint-disable react/prop-types */

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${className} focus:outline-none focus:ring-2  focus:ring-opacity-50 transition duration-150 ease-in-out`}
      {...props}
    >
      {children}
    </button>
  );
}
