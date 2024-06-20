import PropTypes from "prop-types";

DropdownPlaceholder.propTypes = {
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

function DropdownPlaceholder ({
  placeholder,
  disabled = false,
  hidden = false,
}) {
  return (
    <option value="DEFAULT" disabled={disabled} hidden={hidden}>
      {placeholder}
    </option>
  );
}

export default DropdownPlaceholder;
