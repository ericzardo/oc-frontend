import PropTypes from "prop-types";

InputModalContent.propTypes = {
  content: PropTypes.string.isRequired,
};

function InputModalContent ({ content }) {
  return <p className="text-lg text-zinc-800/80 leading-[1.2]">{content}</p>;
}

export default InputModalContent;
