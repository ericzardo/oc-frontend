import PropTypes from "prop-types";

InterfaceTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function InterfaceTitle ({ title }) {
  return (
    <h1 className="font-semibold text-4xl text-blue-500 capitalize mb-5">
      {title}
    </h1>
  );
}

export default InterfaceTitle;
