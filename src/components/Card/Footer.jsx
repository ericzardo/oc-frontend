import PropTypes from "prop-types";

CardFooter.propTypes = {
  infos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function CardFooter ({ infos }) {
  return (
    <span className="flex justify-between text-blue-500 text-base text-">
      {infos &&
        infos.map((information) => <p key={information}>{information}</p>)}
    </span>
  );
}

export default CardFooter;
