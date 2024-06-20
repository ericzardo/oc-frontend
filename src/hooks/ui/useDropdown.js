import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import PropTypes from "prop-types";

const useDropdown = ({ key, value, childrenKey }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = searchParams.get(key) === value;

  const toggleState = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    if (childrenKey) {
      params.delete(childrenKey); // remove the childrenKey when dropdown is opened
    }

    isOpen ? params.delete(key) : params.set(key, value);

    setSearchParams(params);
  }, [isOpen, key, value, childrenKey, searchParams, setSearchParams]);

  return [isOpen, toggleState];
};

useDropdown.propTypes = {
  key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  childrenKey: PropTypes.string
};

export { useDropdown };