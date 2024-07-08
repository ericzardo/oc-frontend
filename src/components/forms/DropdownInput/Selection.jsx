import PropTypes from "prop-types";

DropdownSelection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,

  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};

function DropdownSelection ({ children, id, required, defaultValue }) {
  return (
    <select
      className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
      required={required}
      key={id}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
}

export default DropdownSelection;
