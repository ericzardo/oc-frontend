import PropTypes from "prop-types";

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function Radio ({ name, content }) {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" name={name} className="h-full" />
      <label htmlFor={name} className="text-zinc-800/70">
        {content}
      </label>
    </div>
  );
}

export default Radio;
