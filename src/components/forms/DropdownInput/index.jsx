import PropTypes from "prop-types";
import { useState } from "react";

DropdownInput.propTypes = {
  placeholder: PropTypes.string,
  custom: PropTypes.string,

  onChange: PropTypes.func,
};

function DropdownInput ({
  placeholder = false,
  custom = false,
  children,
  onChange: change,
}) {
  const [showCustomInput, setShowCustomInput] = useState(false);

  const onChange = (e) => {
    if (e.target.value === custom) return setShowCustomInput(true);

    setShowCustomInput(false);
  };

  return (
    <>
      <select
        className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
        required
        key="themes"
        itemID="themes"
        defaultValue={"DEFAULT"}
        onChange={change ? change : onChange}
      >
        {placeholder && (
          <option value="DEFAULT" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
        {custom && (
          <option
            onChange={() => setShowCustomInput(true)}
            key={custom}
            value={custom}
          >
            {custom}
          </option>
        )}
      </select>
      {showCustomInput && (
        <input
          type="text"
          onChange={() => setShowCustomInput(false)}
          placeholder="Create Custom Theme"
          className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md mt-2"
        />
      )}
    </>
  );
}

export default DropdownInput;
