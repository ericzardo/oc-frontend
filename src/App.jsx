import { useState } from "react";

import ChatBox from "@components/ChatBox";
import JoinChatAlert from "@components/JoinChatModal";
import ErrorModal from "@components/ErrorModal";

function App () {
  const [ isJoiningChat, setJoiningChat ] = useState(false);

  // ErrorModal State: 
  // const [ isError, setError ] = useState(false);

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between p-12 rounded-t-2xl shadow-md">

      {/* <ErrorModal
        isOpen={isError}
        onClose={() => setError(false)}
        errorMessage={"Testing error component, is it working?"}
      /> */}

      <ChatBox
        onClick={() => setJoiningChat(true)}
      />

      <JoinChatAlert
        isOpen={isJoiningChat}
        onClose={() => setJoiningChat(false)}
      />
    </div>
    
  );
}

export default App;
