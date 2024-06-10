import PropTypes from "prop-types";

Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

function Message ({ username, message }) {
  return (
    <span className="flex flex-row gap-1 overflow-x-hidden flex-nowrap">
      <p className="font-bold text-blue-500 whitespace-nowrap flex-shrink-0">
        {username}:
      </p>
      <p className="text-zinc-700 break-all flex-grow text-wrap">{message}</p>
    </span>
  );
}

export default Message;
