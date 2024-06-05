import { useState } from "react";

import ChatBox from "./components/ChatBox";
import JoinChatAlert from "./components/JoinChatAlert";

function App() {
  const [isAlertVisible, setAlertVisible ] = useState(false);

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between p-12 rounded-t-2xl shadow-md">
      <ChatBox />
      <ChatBox />

      {isAlertVisible && <JoinChatAlert onClose={() => setAlertVisible(false)}/>}

      <JoinChatAlert />

    </div>
    
  ) 
}

export default App
