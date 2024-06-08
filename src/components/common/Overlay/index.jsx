import PropTypes from "prop-types";

Overlay.propTypes = {
  onClick: PropTypes.func,
};

function Overlay ({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-zinc-900/50 z-10"
    />
  );
}

export default Overlay;
