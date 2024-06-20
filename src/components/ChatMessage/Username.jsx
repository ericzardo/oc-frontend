import PropTypes from "prop-types";

MessageUsername.propTypes = {
  username: PropTypes.string.isRequired,
};

function MessageUsername ({ username }) {
  return (
    <p className="font-bold text-blue-500 whitespace-nowrap flex-shrink-0">
      {username}:
    </p>
  );
}

export default MessageUsername;
