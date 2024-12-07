import React, { forwardRef, useId } from "react";
import PropTypes from "prop-types"; 

const Input = forwardRef(
  ({ label, type = "text", className = "",divClass='', error, ...props }, ref) => {
    const id = useId();
    return (
      <div className={`${divClass}`}>
        {label && (
          <label className={`inline-block text-sm font-medium mb-1 pl-1 text-gray-300`} htmlFor={id}>
            {label}
          </label>
        )}
        <input  
          type={type}
          ref={ref}
          id={id}
          autoComplete="on"
          {...props}
          className={`${className} px-3 py-2 rounded-lg bg-gray-800 text-black outline-none focus:bg-gray-800 duration-200 border ${
            error ? "border-red-500" : "border-gray-500"
          } w-full`}
          aria-describedby={error ? `${id}-error` : undefined} // Accessibility enhancement
        />
        {error && (
          <p id={`${id}-error`} className="text-red-500 text-sm">
            {error}
          </p>
        )}
      </div>
    );
  }
);

// Prop validation
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string, // Error message
};

export default Input;
