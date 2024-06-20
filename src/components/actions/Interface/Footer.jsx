import PropTypes from "prop-types";

import Button from "@components/forms/Button";

InterfaceFooter.propTypes = {
  withCancel: PropTypes.bool,
  withSubmit: PropTypes.bool,
};

function InterfaceFooter ({ withCancel, withSubmit }) {
  const handleCancel = (event) => {
    event.preventDefault;
  };

  return (
    <span className="flex items-center justify-end gap-4 mt-3">
      {withCancel && (
        <Button
          color="cancel"
          buttonContent={"Cancel"}
          onClick={handleCancel}
        />
      )}
      {withSubmit && <Button color="submit" buttonContent={"Submit"} />}
    </span>
  );
}

export default InterfaceFooter;
