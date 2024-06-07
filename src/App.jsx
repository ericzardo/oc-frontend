import { useState } from "react";

import ChatBox from "@components/ChatBox";
import JoinChatAlert from "@components/modals/JoinChatModal";
// import ErrorModal from "@components/modals/ErrorModal";

import ThemeDropdown from "@components/ThemeDropdown";

function App () {
  const [ isJoiningChat, setJoiningChat ] = useState(false);

  // ErrorModal State: 
  // const [ isError, setError ] = useState(false);

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">

      {/* <ErrorModal
        isOpen={isError}
        onClose={() => setError(false)}
        errorMessage={"Testing error component, is it working?"}
      /> */}

      <ThemeDropdown themeName={"Test Theme"}> 
        <ChatBox
          onClick={() => setJoiningChat(true)}
        />
        <ChatBox
          onClick={() => setJoiningChat(true)}
        />
        <ChatBox
          onClick={() => setJoiningChat(true)}
        />
      </ThemeDropdown>

      <ThemeDropdown themeName={"Test Theme"}> 
        <ChatBox
          onClick={() => setJoiningChat(true)}
        />
        <ChatBox
          onClick={() => setJoiningChat(true)}
        />
        <ChatBox
          onClick={() => setJoiningChat(true)}
        />
      </ThemeDropdown>



      <JoinChatAlert
        isOpen={isJoiningChat}
        onClose={() => setJoiningChat(false)}
      />
    </div>
    
  );
}

export default App;
