import PropTypes from "prop-types";

import Overlay from "@components/common/Overlay";

ActionRoot.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

function ActionRoot ({ children, onClose }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <div className="absolute z-10 w-2/4 h-fit m-auto left-0 right-0 top-0 bottom-0 flex flex-col bg-zinc-200 p-6 rounded-lg shadow-sm">
        {children}
      </div>
    </>
  );
}

export default ActionRoot;
