import { tv } from "tailwind-variants";
import PropTypes from "prop-types";

UserInputRoot.propTypes = {
  children: PropTypes.node.isRequired,

  size: PropTypes.string,
};

const userInputRoot = tv({
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

function UserInputRoot ({ children, size }) {
  return <span className={userInputRoot({ size })}>{children}</span>;
}

export default UserInputRoot;
