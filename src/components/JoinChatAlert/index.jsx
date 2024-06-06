import Overlay from "../Overlay";
import UserInputBox from "../UserInputBox";

const submit = () => {
  console.log("submit!");
};

function JoinChatAlert ({ onClose }) {
  return <>
    <Overlay />
    <div className="absolute w-3/5 h-fit m-auto left-0 right-0 top-0 bottom-0 flex flex-col justify-between gap-5 rounded-2xl z-10 bg-zinc-200 p-12 shadow-xl">

      <span className="absolute top-0 right-0 mt-2.5 mr-2.5 text-zinc-700 text-4xl p-2.5 cursor-pointer select-none transition-all ease-out duration-300 hover:text-red-600 hover:scale-125" onClick={onClose}>&times;</span>

      <h2 className="text-4xl text-blue-800 font-bold">Joining a chat?</h2>
      <p className="text-lg text-zinc-800/80 leading-[1.2]">Please enter your username to continue to the online chat</p>

      <UserInputBox
        placeholder={"Enter your username here!"}
        buttonText={"Next >"}
        onSubmit={submit}
      />

    </div>
  </>;
}

export default JoinChatAlert;