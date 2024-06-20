import PropTypes from "prop-types";

import Button from "@components/forms/Button";

ActionFooter.propTypes = {
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

function ActionFooter ({ onCancel, onSubmit }) {
  return (
    <span className="flex items-center justify-end gap-4 mt-3">
      {onCancel && (
        <Button color="cancel" buttonContent={"Cancel"} onClick={onCancel} />
      )}
      {onSubmit && (
        <Button color="submit" buttonContent={"Submit"} onClick={onSubmit} />
      )}
    </span>
  );
}

export default ActionFooter;
