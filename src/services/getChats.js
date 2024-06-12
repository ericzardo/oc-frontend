import api from "@lib/axios";

const getChats = async () => {
  await api.get("/get-chats")
    .then(response => {
      if (!response.data || response.data.chats) {
        const message = "Error loading website informations. Please try again.";
        return new Error(message);
      }

      return response.data.chats;
    })
    .catch(err => {
      if (!err.response) {
        const message = "Server did not respond. Please try again later";
        return new Error(message);
      }

      const { message } = err.response.data;
      return new Error(message);
    });

  // if passes all the way = error
  return new Error("Server did not respond. Please try again later");
};

export default getChats;