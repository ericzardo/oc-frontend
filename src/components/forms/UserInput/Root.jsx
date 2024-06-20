import { useState } from "react";
import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

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
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <span
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`${userInputRoot({ size })} ${
        isFocused ? "border-2 border-e-0 border-blue-500" : ""
      }`}
    >
      {children}
    </span>
  );
}

export default UserInputRoot;
