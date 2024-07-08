import PropTypes from "prop-types";

LabeledInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

  labelText: PropTypes.string,
};

function LabeledInput ({ name, labelText, children }) {
  return (
    <span className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="text-zinc-700">
        {labelText}
      </label>
      {children}
    </span>
  );
}

export default LabeledInput;
