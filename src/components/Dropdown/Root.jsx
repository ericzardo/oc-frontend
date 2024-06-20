import PropTypes from "prop-types";
import { useDropdown } from "@hooks/ui/useDropdown";

DropdownRoot.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};

function DropdownRoot ({ children, params }) {
  const [, toggleState] = useDropdown(params);
  return (
    <div
      className="border-b-2 border-blue-500 h-10 w-full flex justify-start items-center gap-3 p-8 pl-6

        cursor-pointer select-none transition-colors duration-300 ease-out
      hover:bg-blue-400 text-zinc-800 hover:text-zinc-200"
      onClick={toggleState}
    >
      {children}
    </div>
  );
}

export default DropdownRoot;
