import { useState } from "react";

import ChatBox from "@components/ChatBox";
import JoinChatAlert from "@components/JoinChatAlert";

function App () {
  const [isJoiningChat, setJoiningChat ] = useState(false);

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between p-12 rounded-t-2xl shadow-md">
      <ChatBox onClick={() => setJoiningChat(true)} />
      
      {isJoiningChat && <JoinChatAlert onClose={() => setJoiningChat(false)}/>}
    </div>
    
  ); 
}

export default App;
