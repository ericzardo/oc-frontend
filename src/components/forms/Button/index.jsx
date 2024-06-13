import { tv } from "tailwind-variants";
import PropTypes from "prop-types";

const button = tv({
  base: "transition-all ease-out duration-300 ",
  variants: {
    size: {
      default: "py-2 px-3 rounded-md text-lg",
      sm: "py-1 px-2 rounded-md text-sm",
    },
    color: {
      default: "text-zinc-100 bg-blue-500 hover:bg-blue-700",
      cancel: "text-zinc-100 bg-red-500 hover:bg-red-600/70",
      submit: "text-zinc-100 bg-green-500 hover:bg-green-600/70",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,

  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

function Button ({ buttonContent, color, size, onClick }) {
  return (
    <button onClick={onClick} className={button({ color, size })}>
      {buttonContent}
    </button>
  );
}

export default Button;
