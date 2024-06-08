import PropTypes from "prop-types";

MessagesContainer.propTypes = {
  children: PropTypes.node,
};

function MessagesContainer ({ children }) {
  return (
    <span className="flex flex-col max-h-[70%] overflow-y-auto gap-1.5 py-5 pt-1.5">
      {children}
    </span>
  );
}

export default MessagesContainer;
