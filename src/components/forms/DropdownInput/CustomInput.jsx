import PropTypes from "prop-types";

DropdownCustomInput.propTypes = {
  placeholder: PropTypes.string,
};

function DropdownCustomInput ({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md mt-2"
    />
  );
}

export default DropdownCustomInput;
