import PropTypes from "prop-types";

DropdownName.propTypes = {
  name: PropTypes.string.isRequired,
};

function DropdownName ({ name }) {
  return <h2 className="text-xl font-semibold">{name}</h2>;
}

export default DropdownName;
