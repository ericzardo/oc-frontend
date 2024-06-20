import MessagesContainer from "@components/ChatContainer";
import ChatMessage from "@components/ChatMessage";
import UserInput from "@components/forms/UserInput";

import { CornerDownRight } from "react-feather";

function Chat () {
  return (
    <div className="w-auto mx-auto max-w-screen-lg relative p-12 bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">
      <MessagesContainer>
        <ChatMessage.Root>
          <ChatMessage.Username username="Eric Zardo" />
          <ChatMessage.Message message="This is a message test for this component!" />
        </ChatMessage.Root>
      </MessagesContainer>
      <UserInput.Root>
        <UserInput.Input placeholder="Enter your username here!" />
        <UserInput.Button
          content={<CornerDownRight />}
          onSubmit={() => console.log("submit!")}
        />
      </UserInput.Root>
    </div>
  );
}

export default Chat;
