import ChatBox from "./components/ChatBox"

function App() {
  return (
    <div className="w-auto mx-auto max-w-screen-lg bg-zinc-300 flex flex-1 flex-wrap justify-between p-12 rounded-t-2xl shadow-md">
      <ChatBox />
      <ChatBox />

    </div>
    
  ) 
}

export default App
