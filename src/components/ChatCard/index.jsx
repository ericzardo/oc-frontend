import PropTypes from "prop-types";

import { useSearchParams } from "react-router-dom";

ChatCard.propTypes = {
  chatName: PropTypes.string.isRequired,
  onlineUsers: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

function ChatCard ({ chatName, onlineUsers, createdAt }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("chat", chatName);
    setSearchParams(params);
  };

  return (
    <span
      onClick={handleClick}
      className="flex flex-col gap-5 p-5 w-64 h-28 shadow-md border-t-2 border-blue-500 bg-zinc-200 rounded-lg cursor-pointer transition-transform hover:scale-110 ease-linear duration-100"
    >
      <h2 className="font-semibold text-2xl text-zinc-800">{chatName}</h2>

      <span className="flex justify-between text-blue-500 text-base text-">
        <p>{onlineUsers} on-line</p>
        <p>{createdAt}</p>
      </span>
    </span>
  );
}

export default ChatCard;
