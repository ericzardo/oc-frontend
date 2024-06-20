import PropTypes from "prop-types";

MessageRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

function MessageRoot ({ children }) {
  return (
    <span className="flex flex-row gap-1 overflow-x-hidden flex-nowrap">
      {children}
    </span>
  );
}

export default MessageRoot;
