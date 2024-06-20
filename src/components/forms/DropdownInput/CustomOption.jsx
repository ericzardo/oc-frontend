import PropTypes from "prop-types";

DropdownCustomOption.propTypes = {
  content: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function DropdownCustomOption ({ content, value, onClick }) {
  return (
    <option onClick={onClick} key={content} value={content}>
      {content}
    </option>
  );
}

export default DropdownCustomOption;
