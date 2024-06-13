import { useQuery } from "@tanstack/react-query";

import getChats from "src/services/getChats";

import ChatCard from "@components/ChatCard";
import JoinChatAlert from "@components/modals/JoinChatModal";
import ErrorModal from "@components/modals/ErrorModal";
import ThemeDropdown from "@components/ThemeDropdown";

import data from "./data";
import { useState } from "react";

function Home () {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["chats"],
  //   queryFn: getChats,
  // });

  const [isError, setIsError] = useState(true);

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">
      {data.map((theme) => (
        <ThemeDropdown key={theme.name} themeName={theme.name}>
          {theme.chats.map((chat) => (
            <ChatCard
              key={chat.name}
              chatName={chat.name}
              onlineUsers={chat.onlineUsers.toString()}
              createdAt={chat.createdAt}
            />
          ))}
        </ThemeDropdown>
      ))}

      <JoinChatAlert onSubmit={() => console.log("submit")} />
      <ErrorModal
        isOpen={isError}
        onClose={() => setIsError(false)}
        errorMessage="Testing error message"
      />
    </div>
  );
}

export default Home;
