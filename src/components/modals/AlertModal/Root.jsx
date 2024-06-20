import { useEffect } from "react";
import { tv } from "tailwind-variants";
import PropTypes from "prop-types";

MessageModalRoot.propTypes = {
  model: PropTypes.string,

  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const messageModal = tv({
  base: "absolute m-auto h-fit left-0 right-0 top-2 flex flex-col justify-between p-4 pr-7 w-2/5 rounded-lg overflow-hidden",
  variants: {
    model: {
      default: "bg-zinc-200 text-zinc-800 border-zinc-800",
      error: "bg-red-600 text-zinc-200 border-zinc-200",
      sucess: "bg-zinc-200 text-green-500 border-zinc-200",
    },
  },
  defaultVariants: {
    model: "default",
  },
});

function MessageModalRoot ({ model, onClose, children }) {
  useEffect(() => {
    setTimeout(onClose, 6000);
  });

  return <span className={messageModal({ model })}>{children}</span>;
}

export default MessageModalRoot;
