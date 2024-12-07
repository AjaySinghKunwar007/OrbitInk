import React from "react";
import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa"; // Loading spinner icon
const Button = ({
  children,
  loadingText,
  type = "button",
  bgColor = "bg-blue-500", // Default background color
  textColor = "text-gray-900", // Default text color
  className = "",
  size = "medium", // Default size
  isLoading = false, // Button loading state
  disabled = false, // Button disabled state
  ...props
}) => {
  // Determine button size based on the 'size' prop
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };
  return (
    <button
      type={type}
      disabled={disabled || isLoading} // Disable button if loading or explicitly disabled
      aria-label={isLoading ? "Loading..." : "Button"} // Accessibility improvement
      className={`block rounded-lg font-semibold hover:bg-gray-600 ${
        sizeClasses[size]
      } ${bgColor} ${textColor} ${className} ${
        isLoading || disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      {...props}
    >
      {" "}
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin mr-2 align-middle" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
};
// Prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
