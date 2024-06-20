import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import CloseModal from "@components/common/CloseModal";
import Overlay from "@components/common/Overlay";

InputModalRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

function InputModalRoot ({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClose = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("chat");

    setSearchParams(params);
  };

  return (
    <>
      <Overlay onClick={handleClose} />
      <div className="absolute w-fit h-fit m-auto left-0 right-0 top-0 bottom-0 flex flex-col justify-between gap-5 rounded-2xl z-10 bg-zinc-200 p-12 shadow-xl">
        <CloseModal onClose={handleClose} />
        {children}
      </div>
    </>
  );
}

export default InputModalRoot;
