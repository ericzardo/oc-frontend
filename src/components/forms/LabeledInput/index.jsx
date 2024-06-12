import PropTypes from "prop-types";

LabeledInput.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

  labelText: PropTypes.string,
};

function LabeledInput ({ id, labelText, children }) {
  return (
    <span className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-zinc-700">
        {labelText}
      </label>
      {children}
    </span>
  );
}

export default LabeledInput;
