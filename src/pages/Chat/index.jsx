import MessagesContainer from "@components/MessagesContainer";
import UserInputBox from "@components/UserInputBox";

import { CornerDownRight } from "react-feather";

function Chat () {
  return (
    <div className="w-auto mx-auto max-w-screen-lg relative p-12 bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">
      <MessagesContainer></MessagesContainer>
      <UserInputBox
        size="xl"
        placeholder="Message..."
        buttonContent={<CornerDownRight />}
        onSubmit={() => console.log("submit")}
      />
    </div>
  );
}

export default Chat;
