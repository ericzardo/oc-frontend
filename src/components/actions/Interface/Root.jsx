import PropTypes from "prop-types";

import { ActionContext } from "@components/ActionHeader/Context";
import Overlay from "@components/common/Overlay";

InterfaceRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

function InterfaceRoot ({ children }) {
  const handleCancel = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Overlay onClick={handleCancel} />
      <div className="absolute z-10 w-2/4 h-fit m-auto left-0 right-0 top-0 bottom-0 flex flex-col bg-zinc-200 p-6 rounded-lg shadow-sm">
        {children}
      </div>
    </>
  );
}

export default InterfaceRoot;
