function JoinChatAlert({ onClose }) {
  return (
    <div className="absolute w-3/5 h-fit m-auto left-0 right-0 top-0 bottom-0 flex flex-col justify-between gap-5 rounded-2xl z-10 bg-zinc-200 p-12 shadow-xl">

      <span className="absolute top-0 right-0 mt-2.5 mr-2.5 text-zinc-700 text-4xl p-2.5 cursor-pointer transition-all ease-out duration-300 hover:text-red-600 hover:scale-125" onClick={onClose}>&times;</span>

      <h2 className="text-4xl text-blue-800 font-bold">Joining a chat?</h2>
      <p className="text-lg text-zinc-800/80 leading-[1.2]">Please enter your username to continue to the online chat</p>

      <span className="flex flex-row items-center justify-between h-10 w-full rounded-2xl overflow-hidden bg-zinc-100 text-lg shadow-sm">

        <input required type="text" placeholder="Enter your username here!" className="placeholder:text-zinc-800/40 text-zinc-800 bg-transparent outline-none py-2.5 px-4"/>

        <button type="submit" className="bg-blue-500 text-zinc-200 text-lg py-2.5 px-4 flex items-center justify-start text-left cursor-pointer select-none transition-colors duration-300 ease-out hover:bg-blue-800">Continue</button>
      </span>
    </div>  
  )
}

export default JoinChatAlert;