import PropTypes from "prop-types";

ActionActions.propTypes = {
  children: PropTypes.node.isRequired,
};

function ActionActions ({ children }) {
  return <span className="flex flex-row gap-3">{children}</span>;
}

export default ActionActions;
