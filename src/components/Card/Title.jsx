import PropTypes from "prop-types";

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function CardTitle ({ title }) {
  return <h2 className="font-semibold text-2xl text-zinc-800">{title}</h2>;
}

export default CardTitle;
