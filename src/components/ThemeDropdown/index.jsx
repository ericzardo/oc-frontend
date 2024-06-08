import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { ArrowDown, ArrowRight } from "react-feather";

ThemeDropdown.propTypes = {
  themeName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function ThemeDropdown ({ themeName, children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = searchParams.get("theme") === themeName;

  const toggleState = () => {
    const params = new URLSearchParams(searchParams);

    if (!isOpen) {
      params.set("theme", themeName);
      params.delete("chat");
    } else {
      params.delete("chat");
      params.delete("theme");
    }

    setSearchParams(params);
  };

  // first div is the theme dropdown button
  // if clicked then show up second div
  // the second div is the dropdown displayed items
  return (
    <>
      <div
        className="border-b-2 border-blue-500 h-10 w-full flex justify-start items-center gap-3 p-8 pl-6

        cursor-pointer select-none transition-colors duration-300 ease-out
      hover:bg-blue-400 text-zinc-800 hover:text-zinc-200"
        onClick={toggleState}
      >
        {isOpen ? <ArrowDown /> : <ArrowRight />}
        <h2 className="text-xl font-semibold">{themeName}</h2>
      </div>

      {isOpen && (
        <div className="w-full flex justify-between items-center gap-4 flex-wrap p-6">
          {children}
        </div>
      )}
    </>
  );
}

export default ThemeDropdown;
