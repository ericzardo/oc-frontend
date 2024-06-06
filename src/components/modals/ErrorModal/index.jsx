import PropTypes from "prop-types";

import CloseModal from "@components/common/CloseModal";

ErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

function ErrorModal ({ isOpen, onClose, errorMessage }) {
  if (!isOpen) return;
  
  return (
    <span
      className="bg-red-600 text-zinc-200 absolute m-auto h-fit left-0 right-0 top-2 flex flex-col justify-between p-4 pr-7 w-2/5 rounded-lg"
    >

      <CloseModal onClose={onClose} size="sm" color="white" />
      <p
        className="text-zinc-300"
      >
        { errorMessage }
      </p>

    </span>
  );
}

export default ErrorModal;