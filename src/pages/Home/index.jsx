import { useEffect, useState } from "react";

import ChatCard from "@components/ChatCard";
import JoinChatAlert from "@components/modals/JoinChatModal";
import ErrorModal from "@components/modals/ErrorModal";
import ThemeDropdown from "@components/ThemeDropdown";

import useFetchChats from "@hooks/useFetchChats";

function Home () {
  const { data: chats, isLoading, error } = useFetchChats();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">
      {chats &&
        chats.map((theme) => (
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
        errorMessage={
          error
            ? error.message
            : "Server did not respond. Please try again later."
        }
      />
    </div>
  );
}

export default Home;
