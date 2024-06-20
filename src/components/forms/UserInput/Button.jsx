import PropTypes from "prop-types";

UserInputButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function UserInputButton ({ content, onSubmit }) {
  return (
    <button
      onSubmit={onSubmit}
      type="submit"
      className="bg-blue-500 text-zinc-200 text-lg py-2.5 px-4 h-full flex items-center justify-start text-left cursor-pointer select-none transition-colors duration-300 ease-out hover:bg-blue-700"
    >
      {content}
    </button>
  );
}

export default UserInputButton;
