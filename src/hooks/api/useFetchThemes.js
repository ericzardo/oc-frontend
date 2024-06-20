import { useQuery } from "@tanstack/react-query";

import fetchThemes from "@services/fetchThemes";

const useFetchThemes = () => {
  return useQuery({
    queryKey: ["themes"],
    queryFn: fetchThemes,
  });
};

export default useFetchThemes;