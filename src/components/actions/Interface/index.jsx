import PropTypes from "prop-types";

import Button from "@components/Button";

Interface.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

  submitButton: PropTypes.bool,
  cancelButton: PropTypes.bool,
};

function Interface ({ title, children, submitButton, cancelButton }) {
  return (
    <div className="w-11/12 mx-auto my-5 bg-zinc-200 p-6 rounded-lg shadow-sm">
      <h1 className="font-semibold text-4xl text-blue-500 uppercase mb-4">
        {title}
      </h1>

      <form className="flex flex-col gap-4">
        {children}

        <span className="flex items-center justify-end gap-4">
          {cancelButton && <Button color="cancel" buttonContent={"Cancel"} />}
          {submitButton && <Button color="submit" buttonContent={"Submit"} />}
        </span>
      </form>
    </div>
  );
}

export default Interface;
