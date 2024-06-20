import PropTypes from "prop-types";

ActionContent.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
};

function ActionContent ({ children }) {
  return <form className="flex flex-col gap-4">{children}</form>;
}

export default ActionContent;
