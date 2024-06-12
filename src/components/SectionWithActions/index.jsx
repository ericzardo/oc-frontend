import ProptTypes from "prop-types";

SectionWithActions.propTypes = {
  title: ProptTypes.string.isRequired,
  children: ProptTypes.node.isRequired,
};

function SectionWithActions ({ title, children }) {
  return (
    <span className="flex flex-row w-full items-center justify-between">
      <h2 className="text-zinc-700 font-semibold text-xl my-2">{title}</h2>

      <span className="flex flex-row gap-3">{children}</span>
    </span>
  );
}

export default SectionWithActions;
