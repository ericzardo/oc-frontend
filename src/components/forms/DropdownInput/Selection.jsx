import PropTypes from "prop-types";

import { useCustomParam } from "@hooks/ui/useCustomParam";

DropdownSelection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,

  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};

function DropdownSelection ({
  children,
  id,
  required,
  defaultValue = "DEFAULT",
}) {
  // const { handleParamChange } = useCustomParam(key, value);

  const handleChange = (e) => {
    // handleParamChange(e.target.value);
    console.log("change");
  };

  return (
    <select
      className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
      required={required}
      key={id}
      defaultValue={defaultValue}
      onChange={handleChange}
    >
      {children}
    </select>
  );
}

export default DropdownSelection;
