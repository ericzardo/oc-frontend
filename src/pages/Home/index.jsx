import ChatRadio from "@components/ChatRadio";
import JoinChatAlert from "@components/modals/JoinChatModal";
// import ErrorModal from "@components/modals/ErrorModal";

import ThemeDropdown from "@components/ThemeDropdown";

function Home () {
  // ErrorModal State:
  // const [ isError, setError ] = useState(false);

  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between rounded-t-2xl shadow-md overflow-hidden">
      {/* <ErrorModal
        isOpen={isError}
        onClose={() => setError(false)}
        errorMessage={"Testing error component, is it working?"}
      /> */}

      <ThemeDropdown themeName={"First and Testing Theme"}>
        <ChatRadio
          chatName="Top Trending Chat"
          onlineUsers="239"
          createdAt="08/06/2024"
        />
        <ChatRadio
          chatName="Where is that?"
          onlineUsers="98"
          createdAt="08/06/2024"
        />
        <ChatRadio
          chatName="MEEEE Test"
          onlineUsers="23"
          createdAt="08/06/2024"
        />
      </ThemeDropdown>

      <JoinChatAlert onSubmit={() => console.log("submit")} />
    </div>
  );
}

export default Home;
