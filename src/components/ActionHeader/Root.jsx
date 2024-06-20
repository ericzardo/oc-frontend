import PropTypes from "prop-types";
import { ActionProvider } from "./Context";

ActionRoot.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  actionParam: PropTypes.string.isRequired,
};

function ActionRoot ({ children, title, actionParam }) {
  return (
    <ActionProvider value={actionParam}>
      <span className="flex flex-row w-full items-center justify-between">
        <h2 className="text-zinc-700 font-semibold text-xl my-2">{title}</h2>
        {children}
      </span>
    </ActionProvider>
  );
}

export default ActionRoot;
