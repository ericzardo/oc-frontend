import PropTypes from "prop-types";

DropdownContent.propTypes = {
  children: PropTypes.node.isRequired,
};

function DropdownContent ({ children }) {
  return (
    <div className="w-full flex justify-between items-center max-sm:justify-center gap-4 flex-wrap p-6">
      {children}
    </div>
  );
}

export default DropdownContent;
