import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ type = "text", placeholder = "", ...rest }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        {...rest}
        className="outline-none bg-zinc-100 text-zinc-800 placeholder:text-zinc-600 p-2.5 w-full rounded-md shadow-sm"
      />
    );
  },
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  ps: PropTypes.string,
};

export default Input;
