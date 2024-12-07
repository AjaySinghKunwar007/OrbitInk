
import React from "react";
import { useId } from "react";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const Select = forwardRef(
  ( {
    label,
    options = [],
    className = "",
    placeholder = "Select an option",
    error,
    disabled = false,
    ...props
  },
  ref)=>{
    const id = useId();
    return (
      <div>
        {label ? (
          <label
            htmlFor={id}
            className="inline-block text-sm font-medium mb-1 pl-1 text-gray-300"
          >
            {label}
          </label>
        ) : null}
        <select
          id={id}
          ref={ref}
          disabled={disabled}
          className={` ${className} ${
            error ? "border-red-500" : "border-gray-600"
          } ${
            disabled ? "bg-gray-700 cursor-not-allowed" : "bg-gray-800"
          } text-gray-200 placeholder-gray-400 ${className}`}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options &&
            options.map((option) =>
              typeof option === "object" ? (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ) : (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
        </select>
        {error && (
          <p id={`${id}-error`} className="text-sm text-red-500 mt-1">
            {error}
          </p>
        )}
      </div>);
  }
)


Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ),
  ]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Select;
