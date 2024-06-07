import PropTypes from "prop-types";

import Overlay from "@components/common/Overlay";
import CloseModal from "@components/common/CloseModal";

import UserInputBox from "@components/UserInputBox";


const submit = () => {
  console.log("submit!");
};

JoinChatModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function JoinChatModal ({ isOpen, onClose }) {

  if (!isOpen) return;

  return (
    <>
      <Overlay />
      <div className="absolute w-3/5 h-fit m-auto left-0 right-0 top-0 bottom-0 flex flex-col justify-between gap-5 rounded-2xl z-10 bg-zinc-200 p-12 shadow-xl">

        <CloseModal onClose={onClose}/>

        <h2 className="text-4xl text-blue-700 font-bold">Joining a chat?</h2>
        <p className="text-lg text-zinc-800/80 leading-[1.2]">Please enter your username to continue to the online chat</p>

        <UserInputBox
          placeholder={"Enter your username here!"}
          buttonText={"Next"}
          onSubmit={submit}
        />

      </div>
    </>
  );

}

export default JoinChatModal;