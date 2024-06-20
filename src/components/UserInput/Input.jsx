import PropTypes from "prop-types";

UserInputInput.propTypes = {
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

function UserInputInput ({ placeholder, required = false }) {
  return (
    <input
      required={required}
      type="text"
      placeholder={placeholder}
      className="placeholder:text-zinc-800/40 w-full text-zinc-800 bg-transparent outline-none py-2.5 px-4"
    />
  );
}

export default UserInputInput;
