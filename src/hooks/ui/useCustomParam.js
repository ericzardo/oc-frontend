import { useSearchParams } from "react-router-dom";
// custom, themes, Custom Theme
const useCustomParam = (key, id, optionValue) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleParamChange = (value) => {
    if (params.get(key)) params.delete(key);
    if (value === optionValue) params.set(key, id);
    setSearchParams(params);
  };

  const isCustomParamSet = params.get(key) === id;

  return { isCustomParamSet, handleParamChange };
};

export { useCustomParam }