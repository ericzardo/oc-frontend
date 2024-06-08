import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

UserInputBox.propTypes = {
  placeholder: PropTypes.string,
  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onSubmit: PropTypes.func.isRequired,

  size: PropTypes.string,
};

const userInputBox = tv({
  base: "flex flex-row items-center justify-between rounded-2xl overflow-hidden bg-zinc-100 shadow-sm",
  variants: {
    size: {
      default: "h-10 w-full text-lg",
      xl: "h-12 w-full text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function UserInputBox ({ placeholder, buttonContent, size, onSubmit }) {
  return (
    <span className={userInputBox({ size })}>
      <input
        required
        type="text"
        placeholder={placeholder}
        className="placeholder:text-zinc-800/40 w-full text-zinc-800 bg-transparent outline-none py-2.5 px-4"
      />

      <button
        onSubmit={onSubmit}
        type="submit"
        className="bg-blue-500 text-zinc-200 text-lg py-2.5 px-4 h-full flex items-center justify-start text-left cursor-pointer select-none transition-colors duration-300 ease-out hover:bg-blue-700"
      >
        {buttonContent}
      </button>
    </span>
  );
}

export default UserInputBox;
