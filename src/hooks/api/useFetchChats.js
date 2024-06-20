import { useQuery } from "@tanstack/react-query";

import fetchChats from "@services/fetchChats";

const useFetchChats = () => {
  return useQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
  });
};

export default useFetchChats;