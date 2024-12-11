/* eslint-disable react/prop-types */
function Button({
  children,
  // eslint-disable-next-line no-unused-vars
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}
    >
      {children}
    </button>
  );
}

export default Button;
