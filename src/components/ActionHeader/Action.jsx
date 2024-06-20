import PropTypes from "prop-types";
import { useActionContext } from "./Context";

ActionAction.propTypes = {
  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func.isRequired,
};

function ActionAction ({ buttonContent, onClick }) {
  const ActionParam = useActionContext();

  return (
    <button
      onClick={() => onClick(ActionParam)}
      className="bg-blue-500 text-zinc-50 w-8 h-8 rounded-full flex justify-center items-center p-0.5 transition-colors duration-300 ease-out hover:bg-blue-700"
    >
      {buttonContent}
    </button>
  );
}

export default ActionAction;
