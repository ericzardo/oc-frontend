import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

DropdownInput.propTypes = {
  placeholder: PropTypes.string,
  custom: PropTypes.string,

  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

  onChange: PropTypes.func,
};

const useCustomParam = (id, custom) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleParamChange = (value) => {
    if (params.get("custom")) params.delete("custom");
    if (value === custom) params.set("custom", id);
    setSearchParams(params);
  };

  const isCustomParamSet = params.get("custom") === id;

  return { isCustomParamSet, handleParamChange };
};

function DropdownInput ({
  placeholder = false,
  custom = false,
  children,
  onChange,
  id,
}) {
  const { isCustomParamSet, handleParamChange } = useCustomParam(id, custom);

  const handleChange = (e) => {
    if (onChange) return onChange(e);
    handleParamChange(e.target.value);
  };

  return (
    <>
      <select
        className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md"
        required
        key={id}
        itemID={id}
        defaultValue={"DEFAULT"}
        onChange={handleChange}
      >
        {placeholder && (
          <option value="DEFAULT" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
        {custom && (
          <option key={custom} value={custom}>
            {custom}
          </option>
        )}
      </select>
      {isCustomParamSet && (
        <input
          type="text"
          placeholder="Create Custom Theme"
          className="bg-zinc-100 text-zinc-800 p-2.5 rounded-md mt-2"
        />
      )}
    </>
  );
}

export default DropdownInput;
