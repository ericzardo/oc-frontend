import PropTypes from "prop-types";

InterfaceContent.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function InterfaceContent ({ children, onSubmit }) {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default InterfaceContent;
