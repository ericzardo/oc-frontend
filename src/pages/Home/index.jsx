import ChatCard from "@components/ChatCard";
import JoinChatAlert from "@components/modals/JoinChatModal";
// import ErrorModal from "@components/modals/ErrorModal";

import ThemeDropdown from "@components/ThemeDropdown";

import data from "./data";

import getChats from "src/services/getChats";

function Home () {
  // ErrorModal State:
  // const [ isError, setError ] = useState(false);

  const chats = getChats;

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">
      {/* <ErrorModal
        isOpen={isError}
        onClose={() => setError(false)}
        errorMessage={"Testing error component, is it working?"}
      /> */}

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
    </div>
  );
}

export default Home;
