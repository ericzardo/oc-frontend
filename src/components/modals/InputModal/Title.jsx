import PropTypes from "prop-types";

InputModalTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function InputModalTitle ({ title }) {
  return <h2 className="text-4xl text-blue-700 font-bold">{title}</h2>;
}

export default InputModalTitle;
