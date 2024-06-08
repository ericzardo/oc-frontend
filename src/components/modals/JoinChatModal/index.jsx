import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import Overlay from "@components/common/Overlay";
import CloseModal from "@components/common/CloseModal";

import UserInputBox from "@components/UserInputBox";

JoinChatModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function JoinChatModal ({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isChatSelected = searchParams.get("chat");

  if (!isChatSelected) return;

  const handleClose = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("chat");

    setSearchParams(params);
  };

  return (
    <>
      <Overlay onClick={handleClose} />
      <div className="absolute w-3/5 h-fit m-auto left-0 right-0 top-0 bottom-0 flex flex-col justify-between gap-5 rounded-2xl z-10 bg-zinc-200 p-12 shadow-xl">
        <CloseModal onClose={handleClose} />

        <h2 className="text-4xl text-blue-700 font-bold">Joining a chat?</h2>
        <p className="text-lg text-zinc-800/80 leading-[1.2]">
          Please enter your username to continue to the online chat
        </p>

        <UserInputBox
          placeholder={"Enter your username here!"}
          buttonContent={"Next"}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

export default JoinChatModal;
