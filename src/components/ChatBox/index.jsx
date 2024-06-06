function ChatBox ({ onClick }) {
  return (
    <span onClick={onClick} className="flex flex-col gap-5 p-5 w-64 h-28 shadow-md border-t-2 border-blue-500 bg-zinc-200 rounded-lg cursor-pointer transition-transform hover:scale-110 ease-linear duration-100">

      <h2 className="font-semibold text-2xl text-zinc-800">[chat-name]</h2>

      <span className="flex justify-between text-blue-500 text-base text-">
        <p>[online_users]</p>
        <p>[created_at]</p>
      </span>
    </span>
    
  ); 
}

export default ChatBox;
