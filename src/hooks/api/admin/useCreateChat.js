import { useQuery } from "@tanstack/react-query";

import createChat from "@services/admin/createChat";

const useCreateChat = () => {
  return useQuery({
    queryKey: ["create-chat"],
    queryFn: createChat,
  });
};

export default useCreateChat;