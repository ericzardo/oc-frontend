import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

CardRoot.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};

function CardRoot ({ children, params }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { key, value } = params;

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    setSearchParams(params);
  };

  return (
    <span
      onClick={handleClick}
      className="flex flex-col justify-around gap-8 p-5 w-80 h-40 shadow-md border-b-4 border-blue-500 bg-zinc-200 rounded-lg cursor-pointer transition-transform hover:scale-110 ease-linear duration-100"
    >
      {children}
    </span>
  );
}

export default CardRoot;
