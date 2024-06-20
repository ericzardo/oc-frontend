import PropTypes from "prop-types";

MessageContent.propTypes = {
  message: PropTypes.node.isRequired,
};

function MessageContent ({ message }) {
  return (
    <p className="text-zinc-700 break-all flex-grow text-wrap">{message}</p>
  );
}

export default MessageContent;
