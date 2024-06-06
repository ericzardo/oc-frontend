import { tv } from "tailwind-variants";
import PropTypes from "prop-types";

const closeModal = tv({
  base: "absolute top-0 right-0 cursor-pointer select-none transition-all ease-out duration-300 hover:scale-125",
  variants: {
    size: {
      default: "text-4xl p-2 leading-3",
      sm: "text-3xl p-2 leading-[.65rem]",
    },
    color: {
      default: "text-zinc-700 hover:text-red-600",
      white: "text-zinc-300 hover:text-zinc-200",
    }
  },
  defaultVariants: {
    size: "default",
    color: "default",
  }
});

CloseModal.propTypes = {
  onClose: PropTypes.func.isRequired,

  size: PropTypes.string,
  color: PropTypes.string,
};

function CloseModal ({ onClose, size, color }) {
  return (
    <span
      onClick={onClose}
      className={closeModal({ size, color })}
    >
      &times;
    </span>
  );
  
}

export default CloseModal;